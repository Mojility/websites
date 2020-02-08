import React from "react"
import DarkenedBackgroundImage from "theme/src/components/darkened-background-image"

const Hero = ({fluid, headlines}) => {
  let body = [];
  for (let {title, byline} of headlines) {
    body.push(
      <li>
        <h1>{title}</h1>
        <h2>{byline}</h2>
      </li>
    )
  }

  return (
    <DarkenedBackgroundImage fluid={fluid}>
      <ul className="slides">
        {body}
      </ul>
    </DarkenedBackgroundImage>
  )
}

export default Hero