import * as React from "react";
import type { V2_MetaFunction } from "@remix-run/deno";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Find your best music!</h1>
      
    </div>
  );
}
