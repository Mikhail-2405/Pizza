import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton: React.FC = () => (
  <ContentLoader 
    className="form__pizza"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      
    >
      <circle cx="134" cy="135" r="125" /> 
      <rect x="0" y="284" rx="10" ry="10" width="277" height="25" /> 
      <rect x="0" y="423" rx="10" ry="10" width="95" height="30" /> 
      <rect x="0" y="317" rx="10" ry="10" width="277" height="88" /> 
      <rect x="126" y="413" rx="20" ry="20" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton;