import React from "react";
import Link from "next/link";
import { Logo, SlimLayout } from "../../../components";
import backgroundImage from "../../images/background-auth.jpg";
import { ContactForm } from "./_components/ContactForm";

function Contact() {
  return (
    <SlimLayout backgroundImage={backgroundImage}>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-10 text-lg font-semibold text-gray-900">Contact Sales</h2>

      <ContactForm />
    </SlimLayout>
  );
}

export default Contact;
