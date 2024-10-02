"use client";

import React from "react";
import { useFormState } from "react-dom";
import { Input } from "@repo/ui";
import { FormSubmitButton } from "./FormSubmitButton";

export function InterestCaptureForm({
  ctaText,
  ctaButtonText,
  onInterestSubmission,
}: {
  ctaText: string;
  ctaButtonText: string;
  onInterestSubmission: (
    prevState: any,
    formData: FormData
  ) => Promise<{ success: boolean; message: string }>;
}) {
  const [state, formAction] = useFormState(onInterestSubmission, undefined);

  return (
    <>
      {!state?.success && (
        <div>
          <p className="text-base font-medium text-gray-900">{ctaText}</p>
          <form action={formAction} className="mt-3 sm:flex sm:items-center">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="text-md py-5"
            />
            <FormSubmitButton ctaButtonText={ctaButtonText} />
          </form>
          {state?.message && <p className="mt-1 text-red-400">{state.message}</p>}
        </div>
      )}

      {state?.success && (
        <div className="py-5 text-lg font-medium text-gray-600">
          Thank You for showing interest. We will reach out to you soon.
        </div>
      )}
    </>
  );
}
