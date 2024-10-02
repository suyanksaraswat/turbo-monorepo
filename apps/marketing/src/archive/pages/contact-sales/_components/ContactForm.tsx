"use client";

import { ChangeEvent, useState } from "react";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@repo/ui";
import {
  validateEmail,
  validatePhoneNumber,
} from "../../../../app/utils/validators";
import { TextField, SelectField } from "../../../../components";

export function ContactForm() {
  const [formState, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_CONTACT_SALES_FORM_ID ?? "123"
  );

  const [data, setData] = useState<{
    email: string;
    phoneNumber: string;
    emailError: string | null;
    phoneNumberError: string | null;
  }>({
    email: "",
    phoneNumber: "",
    emailError: null,
    phoneNumberError: null,
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>, field: string) {
    switch (field) {
      case "email":
        setData((oldData) => ({
          ...oldData,
          email: event.target.value,
          emailError: null,
        }));
        break;
      case "phoneNumber":
        setData((oldData) => ({
          ...oldData,
          phoneNumber: event.target.value,
          phoneNumberError: null,
        }));
        break;
      default:
    }
  }

  if (formState.succeeded) {
    return (
      <>
        <p className="mt-3 text-sm text-gray-700">
          We appreciate your interest. We will be in touch with you shortly.
        </p>

        <Link href="/">
          <Button className="mt-10 bg-black">Go back home</Button>
        </Link>
      </>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (!validateEmail(data.email)) {
          setData((oldData) => ({
            ...oldData,
            emailError: "Invalid Email. Please Provide a valid email.",
          }));

          return;
        } else if (!validatePhoneNumber(data.phoneNumber)) {
          setData((oldData) => ({
            ...oldData,
            phoneNumberError:
              "Invalid Phone Number. Please Provide a valid phone number.",
          }));

          return;
        }

        handleSubmit(event);
      }}
      className="mt-7 grid grid-cols-1 gap-x-6 gap-y-5 overflow-y-scroll sm:grid-cols-2"
    >
      <TextField
        label="First name"
        name="first_name"
        type="text"
        autoComplete="given-name"
        maxLength={255}
        required
      />

      <TextField
        label="Last name"
        name="last_name"
        type="text"
        autoComplete="family-name"
        maxLength={255}
        required
      />

      <div className="col-span-full">
        <TextField
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={255}
          value={data.email}
          onChange={(event) => handleChange(event, "email")}
          required
        />
        {data.emailError && (
          <p className="mt-1 text-sm text-red-400">{data.emailError}</p>
        )}

        <ValidationError
          field="email"
          errors={formState.errors}
          className="text-red-400"
        />
      </div>

      <TextField
        className="col-span-full"
        label="Company Name"
        name="company_name"
        type="text"
        maxLength={255}
        required
      />

      <div className="col-span-full">
        <TextField
          className="col-span-full"
          label="Phone Number"
          name="phone_number"
          type="tel"
          maxLength={30}
          value={data.phoneNumber}
          onChange={(event) => handleChange(event, "phoneNumber")}
          required
        />

        {data.phoneNumberError && (
          <p className="mt-1 text-sm text-red-400">{data.phoneNumberError}</p>
        )}

        <ValidationError
          field="phone_number"
          errors={formState.errors}
          className="text-red-400"
        />
      </div>

      <SelectField
        className="col-span-full"
        label="Unit Count"
        name="unit_count"
        required
      >
        <option value="">Select....</option>
        <option value="1-10">1-10</option>
        <option value="11-100">11-100</option>
        <option value="101-200">101-200</option>
        <option value="201-2000">201-2000</option>
        <option value="2000+">2000+</option>
      </SelectField>

      <TextField
        className="col-span-full"
        label="Job Title"
        name="job_title"
        type="text"
        maxLength={255}
        required
      />

      <SelectField
        className="col-span-full"
        label="I am"
        name="user_type"
        required
      >
        <option value="">Select....</option>
        <option value="owner/operator/property-manager">
          Owner/Operator/Property Manager
        </option>
        <option value="resident">Resident</option>
      </SelectField>

      <div className="col-span-full mt-3">
        <Button
          type="submit"
          disabled={formState.submitting}
          className="w-full"
        >
          <span>
            Submit <span aria-hidden="true">&rarr;</span>
          </span>
        </Button>
      </div>

      <ValidationError
        className="col-span-full text-red-500"
        errors={formState.errors}
      />
    </form>
  );
}
