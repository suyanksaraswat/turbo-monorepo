import React from "react";
import { Header, Footer, Container } from "../../../../../components";

function LoadingResoucePage() {
  return (
    <>
      <Header />
      <main className="mb-16 mt-32 animate-pulse">
        <Container>
          <div className="font-display mx-auto flex max-w-4xl flex-col">
            <div className="flex h-6 w-48 justify-start rounded-md bg-gray-200"></div>
            <div className="my-2 h-10 w-full rounded-md bg-gray-200 sm:h-14"></div>
            <div className="h-6 w-48 rounded-md bg-gray-200"></div>

            <div className="my-8 h-96 w-full rounded-md bg-gray-200"></div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-1">
                <div className="h-6 w-full rounded-md bg-gray-200"></div>
                <div className="h-6 w-full rounded-md bg-gray-200"></div>
                <div className="h-6 w-[80%] rounded-md bg-gray-200"></div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="h-6 w-full rounded-md bg-gray-200"></div>
                <div className="h-6 w-full rounded-md bg-gray-200"></div>
                <div className="h-6 w-[85%] rounded-md bg-gray-200"></div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default LoadingResoucePage;
