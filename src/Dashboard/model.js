import uid from "uid";
import moment from 'moment';

const localState = (state) => state.DashboardReducer;

export const titleModel = (state) => localState(state).title;
export const dataModel = (state) => localState(state).data;
export const loadingModel = (state) => localState(state).loading;

export const impressionsModel = (state) => dataModel(state)
  .map(({impressions, timestamp}) => ({
    impressions,
    date: moment(timestamp).format('MMM DD'),
  }));

export const impressionsBarDef = () => ({
  title: "Website Impressions",
  valueField: 'impressions',
  argumentField: 'date'
});