import React from "react";
import styled from "styled-components";

const MainDescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  width: 680px;
  height:150px;
  padding-top:0.5rem;
  margin-top:0.10rem;
  padding-bottom:0.25rem;
  
`;

const MainDescriptionBox = styled.div`
  width: 100%;
  border: 0.25px solid #d9d9d9;
  border-radius: 8px;
  margin-bottom:0.5rem;
  padding:0.20rem 1rem;
`;

const DescriptionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 0.1rem;
  margin-top: 0.1rem;
  padding-top: 0rem;

  .label {
    color: #000;
    margin-bottom: 0.1rem;
    margin-top: 0.1rem;
    padding-top: 0.1rem;
    margin-bottom: 0.1rem;
    font-size: 14px;
  }

  .value {
    font-size: 14px;
    color: #333;
    padding: 0.1rem 0.75rem;
    background-color: #d9d9d9;
    border-radius: 4px;
    width: 100px;
  }
`;

export default function MainDescription({
  age,
  gender,
  blood,
  height,
  weight,
  bmi,
}) {
  return (
    <div className="col-md-6 col-md-6-right">
      <MainDescriptionContainer>
        <MainDescriptionBox>
          <div className="row">
            <div className="col-4">
              <DescriptionItem>
                <span className="label">Age</span>
                <span className="value">{age}</span>
              </DescriptionItem>
            </div>
            <div className="col-4">
              <DescriptionItem>
                <span className="label">Gender</span>
                <span className="value">{gender}</span>
              </DescriptionItem>
            </div>
            <div className="col-4">
              <DescriptionItem>
                <span className="label">Blood Group</span>
                <span className="value">{blood}</span>
              </DescriptionItem>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <DescriptionItem>
                <span className="label">Height</span>
                <span className="value">{height}</span>
              </DescriptionItem>
            </div>
            <div className="col-4">
              <DescriptionItem>
                <span className="label">Weight</span>
                <span className="value">{weight}</span>
              </DescriptionItem>
            </div>
            <div className="col-4">
              <DescriptionItem>
                <span className="label">BMI</span>
                <span className="value">{bmi}</span>
              </DescriptionItem>
            </div>
          </div>
        </MainDescriptionBox>
      </MainDescriptionContainer>
    </div>
  );
}
