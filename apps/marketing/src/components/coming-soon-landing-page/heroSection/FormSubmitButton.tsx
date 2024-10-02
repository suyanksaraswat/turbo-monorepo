"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@repo/ui";

export function FormSubmitButton({ ctaButtonText }: { ctaButtonText: string }) {
  const { pending } = useFormStatus();

  return (
    <Button
      variant="default"
      size="lg"
      className="mt-3 w-full bg-gray-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none sm:ml-3 sm:mt-0 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center"
      disabled={pending}
      type="submit"
    >
      {ctaButtonText}
    </Button>
  );
}
