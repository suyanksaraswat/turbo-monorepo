import React from "react";
import Link from "next/link";

import { Container, Footer, Header } from "../../components";

function PrivacyPolicy() {
  return (
    <>
      <Header />

      <Container className="mb-20 mt-24 w-full">
        <div className="mb-8 flex h-24 w-full flex-col items-start justify-center gap-2">
          <h1 className="text-5xl font-semibold">Privacy Policy</h1>
          <div className="flex gap-5">
            <p className="text-sm text-gray-500">Effective Date: 01-Sep-2024</p>
            <p className="text-sm text-gray-500">
              Last Updated On: 02-Sep-2024
            </p>
          </div>
        </div>

        <div className="text-md text-gray-700">
          <p className="mb-3">
            This Privacy Policy describes the policies of:
            <br />
            <span className="font-semibold">MLE Software LLC,</span>
            <br />
            <span className="font-semibold">228 Park Ave South,</span>
            <br />
            <span className="font-semibold">New York,</span>
            <br />
            <span className="font-semibold">10003,</span>
            <br />
            <span className="font-semibold">
              United States of America (the),
            </span>
            <br />
            <span className="font-semibold">Email: info@dealmeridian.com,</span>
            <br />
            <span className="font-semibold">Phone: (212) 287-7916</span>
            <br />
            on the collection, use and disclosure of your information that we
            collect when you use our website ( dealmeridian.com ), (the
            “Service”). By accessing or using the Service, you are consenting to
            the collection, use and disclosure of your information in accordance
            with this Privacy Policy. If you do not consent to the same, please
            do not access or use the Service.
          </p>

          <p className="mb-3">
            We may modify this Privacy Policy at any time without any prior
            notice to you and will post the revised Privacy Policy on the
            Service. The revised Policy will be effective 180 days from when the
            revised Policy is posted in the Service and your continued access or
            use of the Service after such time will constitute your acceptance
            of the revised Privacy Policy. We therefore recommend that you
            periodically review this page.
          </p>

          <ul>
            <li>
              <h2 className="text-xl font-semibold text-gray-900">
                How We Collect Your Information:
              </h2>

              <p className="mt-2">
                We collect/receive information about you in the following
                manner:
              </p>

              <ol className="mt-2 list-disc px-8">
                <li>
                  When a user fills up the registration form or otherwise
                  submits personal information
                </li>
                <li>Interacts with the website</li>
                <li>From public sources</li>
              </ol>
            </li>

            <li className="mt-5">
              <h2 className="text-xl font-semibold text-gray-900">
                How We Use Your Information:
              </h2>
              <p className="mt-2">
                We will use the information that we collect about you for the
                following purposes:
              </p>

              <ol className="mt-2 list-disc px-8">
                <li>Marketing/ Promotional</li>

                <li>Targeted advertising</li>
              </ol>

              <p className="mt-2">
                If we want to use your information for any other purpose, we
                will ask you for consent and will use your information only on
                receiving your consent and then, only for the purpose(s) for
                which grant consent unless we are required to do otherwise by
                law.
              </p>
            </li>

            <li className="mt-5">
              <h2 className="text-xl font-semibold text-gray-900">
                How We Share Your Information:
              </h2>

              <p className="mt-2">
                We will not transfer your personal information to any third
                party without seeking your consent, except in limited
                circumstances as described below:
              </p>

              <ol className="mt-2 list-disc px-8">
                <li>Analytics</li>
              </ol>

              <p className="mt-2">
                We require such third party’s to use the personal information we
                transfer to them only for the purpose for which it was
                transferred and not to retain it for longer than is required for
                fulfilling the said purpose.
              </p>

              <p className="mt-2">
                We may also disclose your personal information for the
                following: (1) to comply with applicable law, regulation, court
                order or other legal process; (2) to enforce your agreements
                with us, including this Privacy Policy; or (3) to respond to
                claims that your use of the Service violates any third-party
                rights. If the Service or our company is merged or acquired with
                another company, your information will be one of the assets that
                is transferred to the new owner.
              </p>
            </li>

            <li className="mt-5">
              <h2 className="text-xl font-semibold text-gray-900">
                Your Rights:
              </h2>
              <p className="mt-2">
                Depending on the law that applies, you may have a right to
                access and rectify or erase your personal data or receive a copy
                of your personal data, restrict or object to the active
                processing of your data, ask us to share (port) your personal
                information to another entity, withdraw any consent you provided
                to us to process your data, a right to lodge a complaint with a
                statutory authority and such other rights as may be relevant
                under applicable laws. To exercise these rights, you can write
                to us at info@dealmeridian.com. We will respond to your request
                in accordance with applicable law.
              </p>

              <p className="mt-2">
                You may opt-out of direct marketing communications or the
                profiling we carry out for marketing purposes by writing to us
                at info@dealmeridian.com.
              </p>

              <p className="mt-2">
                Do note that if you do not allow us to collect or process the
                required personal information or withdraw the consent to process
                the same for the required purposes, you may not be able to
                access or use the services for which your information was
                sought.
              </p>
            </li>

            <li className="mt-5">
              <h2 className="text-xl font-semibold text-gray-900">
                Cookies Etc.
              </h2>
              <p className="mt-2">
                To learn more about how we use these and your choices in
                relation to these tracking technologies, please refer to our{" "}
                <Link href="/cookie-policy" className="text-primary">
                  Cookie Policy.
                </Link>
              </p>
            </li>

            <li className="mt-5">
              <h2 className="text-xl font-semibold text-gray-900">Security:</h2>
              <p className="mt-2">
                The security of your information is important to us and we will
                use reasonable security measures to prevent the loss, misuse or
                unauthorized alteration of your information under our control.
                However, given the inherent risks, we cannot guarantee absolute
                security and consequently, we cannot ensure or warrant the
                security of any information you transmit to us and you do so at
                your own risk.
              </p>
            </li>

            <li className="mt-5">
              <h2 className="text-xl font-semibold text-gray-900">
                Grievance / Data Protection Officer:
              </h2>
              <p className="mt-2">
                If you have any queries or concerns about the processing of your
                information that is available with us, you may email our
                Grievance Officer at MLE Software LLC, 228 Park Ave South,
                email: info@dealmeridian.com. We will address your concerns in
                accordance with applicable law.
              </p>
            </li>
          </ul>
        </div>
      </Container>

      <Footer />
    </>
  );
}

export default PrivacyPolicy;
