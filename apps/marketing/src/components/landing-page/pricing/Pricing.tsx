import Link from "next/link";
import { Button } from "../../../../../../packages/ui/src/components/button";
import { cn } from "../../../../../../packages/ui/src/utils/classes";
import { Container } from "../..";

export interface PricingProps {
  title: string;
  subtitle: string;
  ctaBasePath: string;
  plans: PricingPlanInfo[];
}

export interface PricingPlanInfo {
  isHighlighted?: boolean;
  name: string;
  price: string;
  description: string;
  featuresOffered: string[];
}

function CheckIcon({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      aria-hidden="true"
      className={cn("h-6 w-6 flex-none fill-current stroke-current", className)}
      {...props}
    >
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        strokeWidth={0}
      />
      <circle
        cx={12}
        cy={12}
        r={8.25}
        fill="none"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Plan({
  name,
  price,
  description,
  href,
  featuresOffered,
  featured = false,
}: {
  name: string;
  price: string;
  description: string;
  href: string;
  featuresOffered: Array<string>;
  featured?: boolean;
}) {
  return (
    <section
      className={cn(
        "flex flex-col rounded-3xl px-6 sm:px-8",
        featured ? "order-first bg-blue-600 py-8 lg:order-none" : "lg:py-8"
      )}
    >
      <h3 className="font-display mt-5 text-lg text-white">{name}</h3>
      <p
        className={cn(
          "mt-2 text-base",
          featured ? "text-white" : "text-slate-400"
        )}
      >
        {description}
      </p>
      <p className="font-display order-first text-5xl font-light tracking-tight text-white">
        {price}
      </p>
      <ul
        className={cn(
          "order-last mt-10 flex flex-col gap-y-3 text-sm",
          featured ? "text-white" : "text-slate-200"
        )}
      >
        {featuresOffered.map((feature) => (
          <li key={feature} className="flex">
            <CheckIcon className={featured ? "text-white" : "text-slate-400"} />
            <span className="ml-4">{feature}</span>
          </li>
        ))}
      </ul>
      {/* <Button
        href={href}
        variant={featured ? "solid" : "outline"}
        color="white"
        className="mt-8"
        aria-label={`Get started with the ${name} plan for ${price}`}
      >
        Get started
      </Button> */}

      <Link href={href}>
        <Button
          variant={"outline"}
          className={cn(
            "mt-8 w-full",
            featured ? "" : "bg-transparent text-white"
          )}
          aria-label={`Get started with the ${name} plan for ${price}`}
        >
          Get started
        </Button>
      </Link>
    </section>
  );
}

export function Pricing(props: PricingProps) {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="bg-slate-900 py-20 sm:py-32"
    >
      <Container>
        <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            {props.title}
          </h2>
          <p className="mt-4 text-lg text-slate-400">{props.subtitle}</p>
        </div>
        <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
          {props.plans.map((plan, index) => (
            <Plan
              key={index}
              featured={index % 2 === 1}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              href={props.ctaBasePath}
              featuresOffered={plan.featuresOffered}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
