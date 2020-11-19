import React from "react";
import { useRouteData } from "@remix-run/react";

export default function TeamIndex() {
  let data = useRouteData();
  return (
    <div>
      <h3>Team</h3>
      <p>
        Here we could show cool stats about the team or recent activity, etc.
      </p>
    </div>
  );
}
