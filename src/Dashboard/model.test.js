import { displayedContactList } from "./model";

describe("ContactList/model suite", () => {
  describe("displayedContactList() suite", () => {
    it("should return contactList from state", () => {
      const contactList = [];
      const stateMock = {
        DashboardReducer: {
          contactList,
        },
      };

      expect(displayedContactList(stateMock)).toBe(contactList);
    });
    it("should return dummy loading array when in loading state", () => {
      const stateMock = {
        DashboardReducer: {
          contactList: [],
          loading: true,
        },
      };

      const actual = displayedContactList(stateMock);

      expect(actual.length).toBe(7);
      actual.forEach((d) => expect(d.id).toBeDefined());
      actual.forEach((d) => expect(d.loading).toBeTruthy());
    });

    it("should return contactList array filtered by name prefix", () => {
      const contactList = [
        { name: "Alice" },
        { name: "Bob" },
        { name: " alex" },
      ];
      const stateMock = {
        DashboardReducer: {
          contactList,
          prefix: "a",
        },
      };
      const actual = displayedContactList(stateMock);

      expect(actual.length).toBe(2);
    });
  });
});
