import Image from "next/image";
import Link from "next/link";
import { Button } from "@repo/ui";
import { Container } from "../..";

export interface HeroProps {
  title: string;
  subtitle: string;
  primaryActionButtonText: string;
  primaryActionButtonLink: string;
  secondaryActionButtonText: string;
  secondaryActionButtonLink: string;
  secondaryActionButtonIcon?: string;
  trustStatementText: string;
  clients: ClientInfo[][];
}

export interface ClientInfo {
  name: string;
  logoUrl: string;
}

export function Hero(props: HeroProps) {
  return (
    <Container className="pb-16 pt-20 text-center lg:pt-32">
      <h1 className="font-display mx-auto max-w-4xl text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        {props.title}
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        {props.subtitle}
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Link href={props.primaryActionButtonLink}>
          <Button className="bg-black">{props.primaryActionButtonText}</Button>
        </Link>

        <Link href={props.secondaryActionButtonLink}>
          <Button variant="outline">
            {props.secondaryActionButtonIcon && (
              <Image
                aria-hidden="true"
                className="mr-3 h-3 w-3"
                src={props.secondaryActionButtonIcon}
                alt=""
                width={5}
                height={5}
              />
            )}
            <span className="">{props.secondaryActionButtonText}</span>
          </Button>
        </Link>
      </div>
      <div className="mt-36 lg:mt-44">
        <p className="font-display text-base text-slate-900">
          {props.trustStatementText}
        </p>
        <ul className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0">
          {props.clients.map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <Image
                      className="object-contain"
                      src={company.logoUrl}
                      alt={company.name}
                      width={130}
                      height={100}
                      unoptimized
                    />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
