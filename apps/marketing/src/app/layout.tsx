import { type Metadata } from "next";
import dynamic from "next/dynamic";
import { Inter, Lexend } from "next/font/google";
import { cn } from "@repo/ui";
import "../styles/tailwind.css";
import { PHProvider } from "./posthog/client-side/provider";

export const metadata: Metadata = {
  title: {
    template: "%s - Deal Meridian",
    default: "Deal Meridian - Multi-family Leasing relationship management platform",
  },
  description:
    "Streamline multi-family leasing with our relationship management platform—enhance tenant interactions, boost efficiency, and simplify property management.",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

const PostHogPageView = dynamic(() => import("./posthog/client-side/pageview"), {
  ssr: false,
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const showCookieBanner = process.env.VERCEL_ENV === "production";

  return (
    <html
      lang="en"
      className={cn(
        "h-full scroll-smooth bg-white antialiased",
        inter.variable,
        lexend.variable
      )}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        {showCookieBanner && (
          <script
            id="cookieyes"
            type="text/javascript"
            src="https://cdn-cookieyes.com/client_data/0c118f9406f89266a6126853/script.js"
            async
          ></script>
        )}
      </head>
      <PHProvider>
        <body className="flex h-full flex-col">
          <PostHogPageView />
          {children}
        </body>
      </PHProvider>
    </html>
  );
}
