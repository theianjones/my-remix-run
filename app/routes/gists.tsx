import React from "react"
import {useRouteData} from "@remix-run/react"

export function headers({loaderHeaders}) {
  return {
    "cache-control": loaderHeaders.get("cache-control")
  }
}

export function meta({data}) {
  return {
    title: "Public Gists",
    description: `View the latest ${data.length} gists from the public`
  }
}

export default function Gists() {
  let data = useRouteData()
  console.log(data)
  return (
      <div>
      <h2>Public Gists</h2>
      <ul>
        {data.map((gist) => (
          <li key={gist.id}>
            <a href={gist.html_url}>{Object.keys(gist.files)[0]}</a>
          </li>))}
      </ul>
    </div>
  )
}
