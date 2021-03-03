import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import React from 'react';

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Product category distribution",
    //subcaption: "For all users in 2017",
    showpercentvalues: "1",
    //defaultcenterlabel: "Product Distribution",
    aligncaptionwithcanvas: "0",
    captionpadding: "0",
    decimals: "1",
    plottooltext:
      "<b>$percentValue</b><b>$label</b>",
    //centerlabel: "Users: $value",
    theme: "fusion"
  },
  data: [
    {
      label: "Orthodontics",
      value: "1000"
    },
    {
      label: "Endodontic",
      value: "5300"
    },
    {
      label: "Preventive",
      value: "10500"
    },
    {
      label: "Dentistry",
      value: "18900"
    },
    {
      label: "Restorative",
      value: "17904"
    }
  ]
};

class Piechart extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="doughnut2d"
        width="100%"
        height="50%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

export default Piechart;
