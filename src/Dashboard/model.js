import uid from "uid";
import moment from 'moment';

const localState = (state) => state.DashboardReducer;

export const titleModel = (state) => localState(state).title;
export const dataModel = (state) => localState(state).data;
export const loadingModel = (state) => localState(state).loading;

export const impressionsModel = (state) => dataModel(state)
  .map(({ impressions, timestamp }) => ({
    impressions,
    date: moment(timestamp).format('DD/MM'),
  }));

export const impressionsBarDef = () => ({
  title: "Website Impressions",
  valueField: 'impressions',
  argumentField: 'date'
});

export const costPerClickModel = (state) => dataModel(state)
  .map((d) => ({
    costPerClick: d.cost / d.clicks,
    date: new Date(d.timestamp) || moment(d.timestamp).format('MMM DD YY'),
  }));

export const costPerClickConfig = () => ({
  title: "Cost per Click",
  valueField: 'costPerClick',
  argumentField: 'date'
});

export const conversionModel = (state) => {
  const data = dataModel(state)
    .map((d) => ({
      ...d,
      date: moment(d.timestamp).format('MMM YY'),
    }))
    .reduce((acc, cur) => {
      const tmp = acc[cur.date] || {};
      tmp.impressions = (tmp.impressions || 0) + cur.impressions;
      tmp.clicks = (tmp.clicks || 0) + cur.clicks;
      tmp.conversions = (tmp.conversions || 0) + cur.conversions;
      return {
        ...acc,
        [cur.date]: tmp,
      };
    }, {});
  return Object.keys(data).map((date) => ({
    date,
    ...data[date],
  }));
};

export const conversionChartConfig = () => ({
  title: "Conversion",
  bars: [
    // {
    //   name: "Impressions",
    //   valueField: "impressions",
    //   argumentField: "date",
    // },
    {
      name: "Clicks",
      valueField: "clicks",
      argumentField: "date",
    },
    {
      name: "Conversions",
      valueField: "conversions",
      argumentField: "date",
    },
  ],
});
