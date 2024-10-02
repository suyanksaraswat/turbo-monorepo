import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { Button } from "@repo/ui";
import { Container } from "../..";

export interface CallToActionProps {
  backgroundImage: ImageProps["src"];
  title: string;
  subtitle: string;
  actionButtonText: string;
  actionButtonLink: string;
}

export function CallToAction(props: CallToActionProps) {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={props.backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            {props.title}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            {props.subtitle}
          </p>

          <Link href={props.actionButtonLink}>
            <Button className="mt-10 bg-white text-black hover:bg-white">
              {props.actionButtonText}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
