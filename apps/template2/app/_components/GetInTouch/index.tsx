"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  Input,
  FormMessage,
  Checkbox,
  Textarea,
  Button,
} from "@repo/ui";

interface Props {
  data: any;
}

export default function GetInTouch({ data }: Props) {
  const form = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col-reverse md:flex-row">
      <div
        className="flex rounded-none bg-cover bg-center bg-no-repeat  md:hidden"
        style={{
          backgroundImage: `url(${
            data?.contact?.images[1]
              ? data?.contact?.images[1]
              : "/placeholder.jpg"
          })`,
        }}
      >
        <div className="flex flex-1 flex-col gap-8 bg-[rgba(0,0,0,0.4)] px-12 py-28 text-center md:flex-row md:text-current">
          <div className="flex-1">
            <h6 className="text-lg tracking-[4px] text-white">VISIT US</h6>
          </div>
          <div className="flex-1">
            <h6 className="mb-3 text-lg tracking-[4px] text-white">
              OFFICE HOURS
            </h6>
            {data?.contact?.officeHours?.map((hour: any, index: number) => (
              <h6 key={index} className="text-md text-white">
                {hour}
              </h6>
            ))}
          </div>
        </div>
      </div>

      <div
        className="flex w-full flex-1 rounded-none bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${
            data?.contact?.images[0]
              ? data?.contact?.images[0]
              : "/placeholder.jpg"
          })`,
        }}
      >
        <div className="flex w-full flex-1 flex-col items-center gap-8 bg-[rgba(0,0,0,0.4)] px-12 py-28">
          <h6 className="text-xl tracking-[4px] text-white">
            HOW CAN WE HELP YOU?
          </h6>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">First Name</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-white"
                          placeholder="Enter your first name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Last Name</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-white"
                          placeholder="Enter your last name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-white"
                        type="email"
                        placeholder="Enter your email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Phone</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-white"
                        type="tel"
                        placeholder="Enter your phone number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-1 py-4">
                    <FormControl>
                      <Checkbox className="my-0 bg-white py-0" {...field} />
                    </FormControl>
                    <FormLabel className="text-white">
                      Yes, I&apos;d be happy to receive text messages!
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        className="bg-white"
                        placeholder="Enter your message"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <p className="py-3 text-white">
                This site is protected by reCAPTCHA. Google Privacy Policy Opens
                in a new taband Terms of Service Opens in a new tabapply.
              </p>

              <FormItem className="pt-5">
                <Button className="w-full" size="lg" type="submit">
                  SEND MY MESSAGE
                </Button>
              </FormItem>
            </form>
          </Form>
        </div>
      </div>

      <div className="flex-1">
        <div className="p-12">
          <h6 className="text-left text-2xl font-bold text-gray-800 md:text-left md:text-current lg:text-3xl xl:text-4xl 2xl:text-5xl">
            GET IN TOUCH
          </h6>

          <p className="mt-6 text-center md:text-left">
            Interested in visiting our property? Fill out the form or call the
            number below and we will reach out to you shortly! We look forward
            to hearing from you!
          </p>
        </div>

        <div
          className=" hidden h-full rounded-none bg-cover bg-center bg-no-repeat md:flex"
          style={{
            backgroundImage: `url(${
              data?.contact?.images[1]
                ? data?.contact?.images[1]
                : "/placeholder.jpg"
            })`,
          }}
        >
          <div className="flex  flex-1 flex-col gap-8 bg-[rgba(0,0,0,0.4)] px-12 py-28 text-center md:flex-row md:text-current">
            <div className="flex-1">
              <h6 className="text-lg tracking-[4px] text-white">VISIT US</h6>
            </div>
            <div className="flex-1 text-left">
              <h6 className="mb-3 text-lg tracking-[4px] text-white">
                OFFICE HOURS
              </h6>
              {data?.contact?.officeHours?.map((hour: any, index: number) => (
                <h6 key={index} className="text-md text-white">
                  {hour}
                </h6>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
