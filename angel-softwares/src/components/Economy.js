import React from "react";
import styled from "styled-components";
import savings from "../assets/savings.jpg";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "80h Worked",
    Savings: 2000,
  },
  {
    name: "160h Worked",
    Savings: 4200,
  },
  {
    name: "320h Worked",
    Savings: 9000,
  },
];

const Economy = () => {
  return (
    <Wrapper>
      <Banner>
        <Description>
          <h2>
            Imagine a 500 hour project, the savings you would make with Angel
            Softwares would be
          </h2>
          <h1 style={{ fontSize: "3.5rem" }}>14 000$</h1>
          <h1>Economy vs Duration</h1>

          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Savings" fill="#8884d8" />
          </BarChart>
        </Description>
      </Banner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Banner = styled.div`
  width: 95%;
  height: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-image: url(${savings});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Description = styled.div`
  width: 50%;
  height: 90%;
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #a4d6cf;

  & h2 {
    text-align: center;
  }
  & h1 {
    font-size: 2.5rem;
  }
`;

export default Economy;
