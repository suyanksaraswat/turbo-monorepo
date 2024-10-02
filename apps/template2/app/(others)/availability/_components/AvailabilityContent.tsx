"use client";

import React, { useEffect } from "react";

interface Props {
  data: any;
}

const AvailabilityContent = ({ data }: Props) => {
  useEffect(() => {
    const iframes = document.getElementsByTagName("iframe");
    const iframe = iframes?.[0];

    if (iframe) {
      iframe.style.width = "100%";
      iframe.style.height = "1024px";
    }
  }, [document]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Availability</h1>

      {data?.availability && (
        <div dangerouslySetInnerHTML={{ __html: data?.availability }} />
      )}
    </div>
  );
};

export default AvailabilityContent;
