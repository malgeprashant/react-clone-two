import React from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  font-weight: 700;
  font-size: 7px;
  display: flex;
  margin: 30px;
  gap: 20px;
  display: flex;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

// const ul  = styled.div`
// display: flex
// `

const Select = styled.select`
  padding: 5px;
  margin-left: 10px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const Searchtitle = () => {
  return (
    <Container>
      <FilterContainer>
        <Filter>
         <h1>ALL</h1>
         <h1>LIVE</h1>
         <h1>DRAFT</h1>
         <h1>ARCHIEVED</h1>
        </Filter>
        <Filter>
          <Select>
            <Option selected>SELECT TEAM</Option>
            <Option>INDIA</Option>
            <Option>KARNATAKA</Option>
          </Select>
        </Filter>
      </FilterContainer>
    </Container>
  );
};

export default Searchtitle;
