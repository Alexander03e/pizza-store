import React from "react";
import ContentLoader from "react-content-loader";

export const PizzaItemSkeleton: React.FC<any> = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="130" cy="130" r="130" />
    <rect x="0" y="277" rx="0" ry="0" width="264" height="28" />
    <rect x="0" y="318" rx="0" ry="0" width="264" height="77" />
    <rect x="0" y="413" rx="8" ry="8" width="86" height="36" />
    <rect x="115" y="407" rx="27" ry="27" width="150" height="45" />
  </ContentLoader>
);
