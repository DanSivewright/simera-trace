import { env } from "@simera-trace/env/server";

import { createAssessmentSummaryPdf } from "./pdf";
import { sendEmail } from "./send";
import { AssessmentInternalTemplate } from "./templates/assessment-internal";
import { AssessmentResultsTemplate } from "./templates/assessment-results";
import { ContactInternalTemplate } from "./templates/contact-internal";
import { ContactThankYouTemplate } from "./templates/contact-thank-you";
import type {
  AssessmentSubmissionPayload,
  ContactSubmissionPayload,
  EmailDeliveryStatus,
} from "./types";

const DEFAULT_DEV_EMAIL = "dan@wixels.com";

function getNotificationRecipient() {
  return env.INBOUND_NOTIFICATION_EMAIL ?? DEFAULT_DEV_EMAIL;
}

function getBaseUrl() {
  return env.BETTER_AUTH_URL;
}

export async function sendContactNotificationToTeam(
  payload: ContactSubmissionPayload,
) {
  return sendEmail({
    to: getNotificationRecipient(),
    subject: `New contact submission: ${payload.fullName}`,
    react: ContactInternalTemplate(payload),
  });
}

export async function sendContactThankYouToUser(
  payload: ContactSubmissionPayload,
) {
  return sendEmail({
    to: payload.email,
    subject: "Thanks for contacting Simera Trace",
    react: ContactThankYouTemplate({
      fullName: payload.fullName,
      assessmentUrl: `${getBaseUrl()}/assessment`,
    }),
  });
}

export async function sendAssessmentNotificationToTeam(
  payload: AssessmentSubmissionPayload,
) {
  return sendEmail({
    to: getNotificationRecipient(),
    subject: `New assessment submission: ${payload.fullName}`,
    react: AssessmentInternalTemplate(payload),
  });
}

export async function sendAssessmentResultsToUser(
  payload: AssessmentSubmissionPayload,
): Promise<{ email: EmailDeliveryStatus; attachmentIncluded: boolean }> {
  let attachment:
    | {
        filename: string;
        content: string;
        contentType?: string;
      }
    | undefined;

  try {
    attachment = await createAssessmentSummaryPdf(payload);
  } catch {
    attachment = undefined;
  }

  const email = await sendEmail({
    to: payload.email,
    subject: "Your Simera Trace assessment estimate",
    react: AssessmentResultsTemplate({
      fullName: payload.fullName,
      estimate: payload.estimate,
      contactUrl: `${getBaseUrl()}/contact`,
    }),
    attachments: attachment ? [attachment] : undefined,
  });

  return {
    email,
    attachmentIncluded: Boolean(attachment),
  };
}

export type {
  AssessmentEstimatePayload,
  AssessmentSubmissionPayload,
  ContactSubmissionPayload,
  EmailDeliveryStatus,
  LeadDetails,
} from "./types";
