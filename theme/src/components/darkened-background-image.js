import React from "react"
import BackgroundImage from "gatsby-background-image"

const DarkenedBackgroundImage = ({fluid, amount, children}) => (
  <BackgroundImage fluid={fluid}>
    <div className="background-effect" style={{ background: `rgba(0,0,0,${amount})` }}>
      <h1>
        {children}
      </h1>
    </div>
  </BackgroundImage>
);

DarkenedBackgroundImage.defaultProps = {
  amount: 0.4,
};

export default DarkenedBackgroundImage;