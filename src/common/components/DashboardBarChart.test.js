import React from "react";
import { shallow } from "enzyme";
import DashboardBarChart from './DashboardBarChart';

describe("DashboardBarChart.jsx suite", () => {
  it("renders correctly for empty", () => {
    expect(shallow(<DashboardBarChart />).debug()).toMatchSnapshot();
  });
  it("renders correctly", () => {
    const data = [
      { key: 'a', value: '1' },
      { key: 'a', value: '2' },
    ];
    const config = {
      title: "bar chart",
      valueField: 'value',
      argumentField: 'key',
    };
    expect(shallow(<DashboardBarChart data={data} config={config} />).debug()).toMatchSnapshot();
  });
});
