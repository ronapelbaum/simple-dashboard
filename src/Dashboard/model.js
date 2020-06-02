import uid from "uid";

const localState = (state) => state.DashboardReducer;

export const titleModel = (state) => localState(state).title;
export const dataModel = (state) => localState(state).data;
export const loadingModel = (state) => localState(state).loading;

export const displayedContactList = (state) => {
  const { contactList, prefix, loading } = localState(state);
  if (loading) {
    return Array.from(new Array(7)).map(() => ({
      id: uid(),
      loading,
    }));
  }
  if (!prefix) {
    return contactList;
  }
  return contactList.filter((contact) =>
    contact.name.trim().toLowerCase().startsWith(prefix.toLowerCase())
  );
};
