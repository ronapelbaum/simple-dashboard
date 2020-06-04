import { impressionsModel, costPerClickModel } from "./model";

describe("Dashboard/model suite", () => {
  const data = [{
    "timestamp": "2019-07-10 22:35:22",
    "impressions": 37691,
    "clicks": 266,
    "cost": 9.99,
    "conversions": 35
  },
  {
    "timestamp": "2019-07-11 07:52:44",
    "impressions": 20093,
    "clicks": 1855,
    "cost": 74.38,
    "conversions": 11
  },
];
  const stateMock = {
    DashboardReducer: {
      data,
    },
  };
   describe("impressionsModel() suite", () => {
    
    it("should return impressionsModel with number of entries as data", () => {
      const actual = impressionsModel(stateMock);
      expect(actual.length).toBe(data.length);
    });
    it("should return impressionsModel with impression and date", () => {
      const actual = impressionsModel(stateMock);
      expect(actual[0].impressions).toBeDefined();
      expect(actual[0].date).toBeDefined();
    });
  });
   describe("costPerClickModel() suite", () => {
    it("should return costPerClickModel with number of entries as data", () => {
      const actual = costPerClickModel(stateMock);
      expect(actual.length).toBe(data.length);
    });
    it("should return costPerClickModel with costPerClick and date", () => {
      const actual = costPerClickModel(stateMock);
      expect(actual[0].costPerClick).toEqual(data[0].cost / data[0].clicks);
      expect(actual[0].date).toBeDefined();
    });
  });
});
