"use server";

import { z } from "zod";

const InterestFormSchema = z.object({
  email: z.string().email(),
});

export interface SubmitInterestResponse {
  success: boolean;
  message: string;
}

export const submitInterest = async (_: any, formData: FormData) => {
  const rawData = Object.fromEntries(formData);

  const dataValidation = InterestFormSchema.safeParse(rawData);
  if (!dataValidation.success) {
    return {
      success: false,
      message: "Please provide a valid email.",
    };
  }

  const data = dataValidation.data;
  const success = await publishMessageToSlackLeadsChannel(data.email);

  return {
    success: success,
    message: success
      ? "Ok"
      : "Unable to fulfill you request at the moment. Please try again later.",
  };
};

async function publishMessageToSlackLeadsChannel(message: string): Promise<boolean> {
  console.log("Publishing message to slack");

  const slackWebhookUrl = process.env.SLACK_INTERESTED_CLIENT_SCOUT_WEBHOOK_URL;

  if (!slackWebhookUrl) {
    console.error("SLACK_INTERESTED_CLIENT_SCOUT_WEBHOOK_URL not found");
    return false;
  }

  try {
    const response = await fetch(slackWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: message,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send message: " + message + " to slack.");
    }

    return true;
  } catch (error) {
    console.error("Error sending message to Slack:", error);
    return false;
  }
}
