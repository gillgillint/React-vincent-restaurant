import styled from "styled-components";
import FeatureBg from "../../Asset/img/FeatureBg.jpg";

export const FeatureContainer = styled.section`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${FeatureBg});
  height: 50vh;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 0 1rem;

  @media screen and (max-width: 1200px) {
    height: max-content;
  }
`;
export const FeatureWrapper = styled.div`
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const FeatureItem = styled.div`
  margin: 2rem 2rem;
  width: 300px;


  .icon {
    font-size: 3rem;
    margin-bottom: 2rem;
    transition: 0.1s ease-out;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    transition: 0.1s ease-out;
  }
  p {
    font-size: 15px;
    transition: 0.1s ease-out;
    
  }

  &:hover {
    h3,
    p,
    .icon {
      color: #fdc500;
    }
  }

  @media screen and (max-width: 400px) {
    margin: 2rem 0;
    
  }
`;
