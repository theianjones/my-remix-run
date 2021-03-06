import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useRouteData } from "@remix-run/react";

export default function Team() {
  let data = useRouteData()
  return (
    <div>
      <h2>Team</h2>
      <ul>
        {data.map((member: any) => (
          <li key={member.id}>
            <Link to={member.login}>{member.login}</Link>
          </li>
        ))}
      </ul>
      <hr/>
      <Outlet/>
    </div>
  )
}
