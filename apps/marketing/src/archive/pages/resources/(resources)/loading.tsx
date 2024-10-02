import React from "react";
import {
  Header,
  Footer,
  ResourceCardSkeleton,
  Container,
} from "../../../../components";

function LoadingResources() {
  return (
    <>
      <Header />
      <main className="mb-16 mt-32">
        <Container>
          <div className="flex animate-pulse items-baseline justify-between border-b border-gray-200 pb-6">
            <h2 className="h-14 w-48 rounded-md bg-gray-200 sm:w-60"></h2>
            <div className="h-8 w-20 rounded-md bg-gray-200"></div>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <ResourceCardSkeleton />
            <ResourceCardSkeleton />
            <ResourceCardSkeleton />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default LoadingResources;
