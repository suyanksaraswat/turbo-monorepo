import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black w-full px-20 py-12 flex flex-col items-center gap-6">
      <div className="flex justify-center items-center gap-8">
        <Link className="text-white underline" href={'#'}>
          Terms and Conditions
        </Link>

        <Link className="text-white underline" href={'#'}>
          Privacy Policy
        </Link>

        <Link className="text-white underline" href={'#'}>
          Contact Us
        </Link>

        <Link className="text-white underline" href={'#'}>
          Accessibility Policy
        </Link>
      </div>

      <div className="flex justify-center items-center gap-8">
        <Link className="text-white underline" href={'#'}>
          Residents’ Rights to Reasonable Accommodations for Persons with
          Disabilities
        </Link>
      </div>

      <div className="flex justify-center items-center text-white gap-8">
        Pinnacle_ADA © 2024 Cushman & Wakefield All Rights Reserved. | Powered
        by RentCafe (© 2024 Yardi Systems, Inc. All Rights Reserved.)
      </div>
    </footer>
  );
}
