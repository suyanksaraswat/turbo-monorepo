"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import * as z from "zod";
import {
  Label,
  Input,
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  Calendar,
  RadioGroup,
  RadioGroupItem,
  Textarea,
  Checkbox,
} from "@repo/ui";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  zipCode: z.string().min(5, "ZIP code must be at least 5 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  moveInDate: z.date({
    required_error: "Move-in date is required",
  }),
  hasPets: z.enum(["YES", "NO"]),
  message: z.string().optional(),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

interface Props {
  data: any;
}

export default function Contact({ data }: Props) {
  const contactData = data?.contact;

  const form: any = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      zipCode: "",
      email: "",
      phone: "",
      hasPets: "NO",
      message: "",
      acceptTerms: false,
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Here you would typically send the data to your backend
  };

  if (!contactData) {
    return (
      <div className="flex h-screen animate-spin items-center justify-center">
        <AiOutlineLoading3Quarters />
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="mx-auto max-w-4xl overflow-hidden">
        <div className="md:flex">
          <div className="p-6 md:w-1/3">
            <h1 className="mb-4 text-3xl font-bold">Contact Us</h1>
            {contactData?.images[0] && (
              <img
                src={contactData?.images?.[0]}
                alt="Apartment"
                className="mb-4 h-48 w-full object-cover"
              />
            )}
            <p className="text-sm">
              {contactData?.address}
              <br />
              phone: {contactData?.phoneNumber}
            </p>
          </div>
          <div className="p-6 md:w-2/3">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input {...form.register("firstName")} id="firstName" />
                  {form.formState.errors.firstName && (
                    <p className="text-sm text-red-500">
                      {form.formState.errors.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input {...form.register("lastName")} id="lastName" />
                  {form.formState.errors.lastName && (
                    <p className="text-sm text-red-500">
                      {form.formState.errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <Label htmlFor="zipCode">ZIP/Postal Code *</Label>
                <Input {...form.register("zipCode")} id="zipCode" />
                {form.formState.errors.zipCode && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.zipCode.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input {...form.register("email")} id="email" type="email" />
                {form.formState.errors.email && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input {...form.register("phone")} id="phone" type="tel" />
                {form.formState.errors.phone && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <Label>Move-in Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={`w-full justify-start text-left font-normal ${
                        !form.watch("moveInDate") && "text-muted-foreground"
                      }`}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {form.watch("moveInDate") ? (
                        format(form.watch("moveInDate"), "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={form.watch("moveInDate")}
                      onSelect={(date) => form.setValue("moveInDate", date)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {form.formState.errors.moveInDate && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.moveInDate.message}
                  </p>
                )}
              </div>
              <div>
                <Label>Do you have pets?</Label>
                <RadioGroup
                  defaultValue="NO"
                  onValueChange={(value) => form.setValue("hasPets", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="YES" id="yes" />
                    <Label htmlFor="yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="NO" id="no" />
                    <Label htmlFor="no">No</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea {...form.register("message")} id="message" />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="acceptTerms"
                  checked={form.watch("acceptTerms")}
                  onCheckedChange={(checked) =>
                    form.setValue("acceptTerms", checked)
                  }
                />
                <Label htmlFor="acceptTerms" className="text-sm">
                  By clicking this box you are opting in to receive
                  communications from us, including communications about our
                  properties, and you confirm it is your own contact information
                  entered above. Your data will be processed in accordance with
                  our Privacy Policy. You may opt-out at any time by clicking or
                  replying unsubscribe to one of our communications.
                </Label>
              </div>
              {form.formState.errors.acceptTerms && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.acceptTerms.message}
                </p>
              )}
              <Button type="submit" className="w-full">
                CONTACT ME
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
