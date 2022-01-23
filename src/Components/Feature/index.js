import React from "react";
import { featureData } from "./data";
import {
  FeatureContainer,
  FeatureWrapper,
  FeatureItem,
} from "./FeatureElements";

function Feature() {
  const featureList = featureData.map((feature) => {
    const Icon = feature.icon;
    return (
      <FeatureItem key={feature.id}>
        <Icon className="icon" />
        <h3>{feature.heading}</h3>
        <p>{feature.paragraph}</p>
      </FeatureItem>
    );
  });

  return (
    <FeatureContainer>
      <FeatureWrapper>{featureList}</FeatureWrapper>
    </FeatureContainer>
  );
}

export default Feature;
