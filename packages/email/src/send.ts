import { render } from "@react-email/render";
import { env } from "@simera-trace/env/server";
import type * as React from "react";
import { Resend } from "resend";

import type { EmailDeliveryStatus } from "./types";

const DEFAULT_DEV_EMAIL = "dan@wixels.com";
const resend = env.RESEND_API_KEY ? new Resend(env.RESEND_API_KEY) : null;
const from = env.EMAIL_FROM ?? "info@simeratrace.com";

export type SendEmailInput = {
  to: string | string[];
  subject: string;
  react?: React.ReactElement;
  html?: string;
  attachments?: {
    filename: string;
    content: string;
    contentType?: string;
  }[];
};

function normalizeRecipients(to: string | string[]) {
  return Array.isArray(to) ? to : [to];
}

function enforceDevRecipients(recipients: string[]) {
  if (env.NODE_ENV === "production") {
    return recipients;
  }

  const devAllowed = env.INBOUND_NOTIFICATION_EMAIL ?? DEFAULT_DEV_EMAIL;
  return recipients.filter(
    (email) => email.toLowerCase() === devAllowed.toLowerCase(),
  );
}

export async function sendEmail({
  to,
  subject,
  react,
  html,
  attachments,
}: SendEmailInput): Promise<EmailDeliveryStatus> {
  const intendedRecipients = normalizeRecipients(to);
  const recipients = enforceDevRecipients(intendedRecipients);

  if (recipients.length === 0) {
    return {
      sent: false,
      skipped: true,
      reason: "Recipient blocked in development mode",
    };
  }

  if (!resend) {
    return {
      sent: false,
      skipped: true,
      reason: "RESEND_API_KEY not configured",
    };
  }

  const renderedHtml = html ?? (react ? await render(react) : "");

  const { data, error } = await resend.emails.send({
    from,
    to: recipients,
    subject,
    html: renderedHtml,
    attachments,
  });

  if (error) {
    return {
      sent: false,
      skipped: false,
      error: error.message,
    };
  }

  return {
    sent: true,
    skipped: false,
    id: data?.id,
  };
}
