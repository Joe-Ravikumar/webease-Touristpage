"use server";

import { sendEmails } from "./email";
import { contactUsEmailTemplate } from "./contact-us-email";
import { z } from "zod";

const ContactUsSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "Full name should be at least 1 character long",
    })
    .max(50, {
      message: "Full name should be at most 50 characters long",
    }),
  tel: z
    .string()
    .min(1, {
      message: "Mobile Number should be at least 1 character long",
    })
    .max(10, {
      message: "Mobile Number  should be at most 10 characters long",
    }),
  email: z.string().email({
    message: "Invalid email address",
  }),

  message: z
    .string()
    .min(1, {
      message: "Message should be at least 1 characters long",
    })
    .max(1000, {
      message: "Message should be at most 1000 characters long",
    }),
});

/**
 * Server action for contact us form
 */

export const contactUs = async (values: z.infer<typeof ContactUsSchema>) => {
  try {
    // validate data in backend
    const validatedFields = ContactUsSchema.safeParse(values);

    // check if validation failed and return errors
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.errors,
      };
    }

    // destructure data from validated fields
    const { name, tel, email, message } = values;

    // setup email template
    const template = contactUsEmailTemplate(name, tel, email, message);
    //get recipient email from env
    const to = process.env.CONTACT_US_EMAIL;

    // if recipient email is available
    if (to) {
      const isSend = await sendEmails({
        to: to,
        replyTo: email,
        subject: "Contact Us Form Webease",
        body: template,
      });

      // if email not sent
      if (!isSend) {
        return {
          error: "Message not sent.Please try again",
        };
      }

      //  if no error
      return {
        success: "Message sent successfully",
      };
      // if recipient email is not available
    } else {
      return {
        error: "Something went wrong",
      };
    }
  } catch (error) {
    // if any error
    return {
      error: "Something went wrong",
    };
  }
};
