import {
  RiCloseLine,
  RiAlertFill,
  RiCheckboxCircleFill,
  RiErrorWarningFill,
  RiInformationFill,
  RiMagicFill,
} from "@remixicon/react";
import * as React from "react";

import { toast } from "./toast";

type AlertToastProps = {
  t: string | number;
  status?: "success" | "warning" | "error" | "information" | "feature";
  variant?: "filled" | "stroke";
  message: string;
  dismissable?: boolean;
  icon?: React.ElementType;
};

const AlertToast = React.forwardRef<
  HTMLDivElement,
  AlertToastProps
>(
  (
    {
      t,
      status = "feature",
      variant = "filled",
      message,
      dismissable = true,
      icon,
    },
    forwardedRef,
  ) => {
    let Icon: React.ElementType;

    if (icon) {
      Icon = icon;
    } else {
      switch (status) {
        case "success":
          Icon = RiCheckboxCircleFill;
          break;
        case "warning":
          Icon = RiAlertFill;
          break;
        case "error":
          Icon = RiErrorWarningFill;
          break;
        case "information":
          Icon = RiInformationFill;
          break;
        case "feature":
          Icon = RiMagicFill;
          break;
        default:
          Icon = RiErrorWarningFill;
          break;
      }
    }

    const toneClasses: Record<NonNullable<AlertToastProps["status"]>, string> = {
      success: "border-emerald-200 bg-emerald-50 text-emerald-900",
      warning: "border-amber-200 bg-amber-50 text-amber-900",
      error: "border-red-200 bg-red-50 text-red-900",
      information: "border-blue-200 bg-blue-50 text-blue-900",
      feature: "border-violet-200 bg-violet-50 text-violet-900",
    };

    const variantClass =
      variant === "stroke" ? "border bg-white text-slate-900" : toneClasses[status];

    return (
      <div
        ref={forwardedRef}
        className={`flex w-[360px] items-start gap-3 rounded-xl border px-3 py-2.5 text-sm shadow-sm ${variantClass}`}
      >
        <Icon className="mt-0.5 size-4 shrink-0" />
        <span className="flex-1">{message}</span>
        {dismissable && (
          <button
            type="button"
            className="text-current/70 hover:text-current"
            onClick={() => toast.dismiss(t)}
          >
            <RiCloseLine className="size-4" />
          </button>
        )}
      </div>
    );
  },
);
AlertToast.displayName = "AlertToast";

export { AlertToast as Root };
