import React from "react";
import Link from "next/link";
import { Container, Footer, Header } from "../../components";

function CookiePolicy() {
  return (
    <>
      <Header />

      <Container className="mb-20 mt-24 w-full">
        <div className="mb-8 flex h-24 w-full flex-col items-start justify-center gap-2">
          <h1 className="text-5xl font-semibold">Cookie Policy</h1>
          <div className="flex gap-5">
            <p className="text-sm text-gray-500">Effective Date: 01-Sep-2024</p>
            <p className="text-sm text-gray-500">
              Last Updated On: 07-Sep-2024
            </p>
          </div>
        </div>

        <div className="text-md text-gray-700">
          <h2 className="text-xl font-semibold text-gray-900">
            What are cookies?
          </h2>
          <div>
            <p className="mt-2">
              This Cookie Policy explains what cookies are and how we use them,
              the types of cookies we use i.e, the information we collect using
              cookies and how that information is used, and how to manage the
              cookie settings.
            </p>

            <p className="mt-2">
              Cookies are small text files that are used to store small pieces
              of information. They are stored on your device when the website is
              loaded on your browser. These cookies help us make the website
              function properly, make it more secure, provide better user
              experience, and understand how the website performs and to analyze
              what works and where it needs improvement.
            </p>
          </div>

          <h2 className="mt-5 text-xl font-semibold text-gray-900">
            How do we use cookies?
          </h2>
          <div>
            <p className="mt-2">
              As most of the online services, our website uses first-party and
              third-party cookies for several purposes. First-party cookies are
              mostly necessary for the website to function the right way, and
              they do not collect any of your personally identifiable data.
            </p>

            <p className="mt-2">
              The third-party cookies used on our website are mainly for
              understanding how the website performs, how you interact with our
              website, keeping our services secure, providing advertisements
              that are relevant to you, and all in all providing you with a
              better and improved user experience and help speed up your future
              interactions with our website.
            </p>
          </div>

          <h2 className="mt-5 text-xl font-semibold text-gray-900">
            Types of Cookies we use
          </h2>
          <div className="cky-audit-table-element mt-2"></div>

          <h2 className="mt-5 text-xl font-semibold text-gray-900">
            Manage cookie preferences
          </h2>

          <a className="cky-banner-element bg-primary mt-2 block w-fit cursor-pointer rounded-md px-8 py-2 text-white">
            Cookie Settings
          </a>

          <div>
            <p className="mt-2">
              You can change your cookie preferences any time by clicking the
              above button. This will let you revisit the cookie consent banner
              and change your preferences or withdraw your consent right away.{" "}
            </p>

            <p className="mt-2">
              In addition to this, different browsers provide different methods
              to block and delete cookies used by websites. You can change the
              settings of your browser to block/delete the cookies. Listed below
              are the links to the support documents on how to manage and delete
              cookies from the major web browsers.
            </p>

            <p className="mt-2">
              Chrome:{" "}
              <Link
                className="text-primary"
                target="_blank"
                href="https://support.google.com/accounts/answer/32050"
              >
                https://support.google.com/accounts/answer/32050
              </Link>
            </p>

            <p className="mt-2">
              Safari:{" "}
              <Link
                className="text-primary"
                target="_blank"
                href="https://support.apple.com/en-in/guide/safari/sfri11471/mac"
              >
                https://support.apple.com/en-in/guide/safari/sfri11471/mac
              </Link>
            </p>

            <p className="mt-2">
              Firefox:{" "}
              <Link
                className="text-primary"
                target="_blank"
                href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&amp;redirectlocale=en-US"
              >
                https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&amp;redirectlocale=en-US
              </Link>
            </p>

            <p className="mt-2">
              Internet Explorer:{" "}
              <Link
                className="text-primary"
                target="_blank"
                href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc"
              >
                https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc
              </Link>
            </p>

            <p className="mt-2">
              If you are using any other web browser, please visit your
              browser’s official support documents.
            </p>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}

export default CookiePolicy;
