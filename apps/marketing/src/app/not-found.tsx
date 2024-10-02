import Link from "next/link";
import { Logo, SlimLayout } from "../components";
import backgroundImage from "../images/background-auth.jpg";

export default function NotFound() {
  return (
    <SlimLayout backgroundImage={backgroundImage}>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <p className="mt-20 text-sm font-medium text-gray-700">404</p>
      <h1 className="mt-3 text-lg font-semibold text-gray-900">Page not found</h1>
      <p className="mt-3 text-sm text-gray-700">
        Sorry, we couldn’t find the page you’re looking for.
      </p>

      <div className="mt-10">
        <Link href="/">
          <p className="text-md">Go back home</p>
        </Link>
      </div>
    </SlimLayout>
  );
}
