import React from "react";
import { useRouteData } from "@remix-run/react";

export default function TeamMember() {
  let user = useRouteData();
  console.log({user})
  if(!user){
    return null
  }
  return (
    <div>
      <h3>{user.name}</h3>
      <img src={user.avatar_url} width="50" />
      <p>{user.bio}</p>
      <dl>
        <dt>Company</dt>
        <dd>{user.company}</dd>
        <dt>Location</dt>
        <dd>{user.location}</dd>
      </dl>
    </div>
  );
}
