import React from "react";
import { CircularProgressIndicator } from "../components";

function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <CircularProgressIndicator />
    </div>
  );
}

export default Loading;
