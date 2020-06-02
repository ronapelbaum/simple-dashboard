import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Header.jsx suite", () => {
  it("renders correctly", () => {
    expect(shallow(<Header />).debug()).toMatchSnapshot();
  });
});
