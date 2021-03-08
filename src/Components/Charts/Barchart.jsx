import React, { useState, useEffect } from 'react';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
function Barchart(props) {
  const [prevYearData, setPrevYearData] = useState([])
  const [currentYearData, setCurrentYearData] = useState([])

 // STEP 2- Define the categories representing the labels on the X-axis
const categories =  [
  {
    "category": [
      { "label": "Januray" },
      { "label": "February" },
      { "label": "March" },
      { "label": "April" },
      { "label": "May" },
      { "label": "June" },
      { "label": "July" },
      { "label": "August" },
      { "label": "September" },
      { "label": "October" },
      { "label": "November" },
      { "label": "December" }
    ]
  }
]
useEffect(() => {
  if(props.chartValue=="2019"){
    setPrevYearData([
      { "value": "12000" },
      { "value": "24000" },
      { "value": "8000" },
      { "value": "7000" },
      { "value": "12000" },
      { "value": "24000" },
      { "value": "8000" },
      { "value": "7000" },
      { "value": "12000" },
      { "value": "24000" },
      { "value": "8000" },
      { "value": "7000" }
    ])
    
    setCurrentYearData([
      { "value": "24400" },
      { "value": "9000" },
      { "value": "7000" },
      { "value": "36000" },
      { "value": "24400" },
      { "value": "9000" },
      { "value": "7000" },
      { "value": "36000" },
      { "value": "24400" },
      { "value": "9000" },
      { "value": "7000" },
      { "value": "36000" }
    ]);
  }
  else if(props.chartValue=="2020"){
    setPrevYearData([
      { "value": "14000" },
      { "value": "10500" },
      { "value": "16000" },
      { "value": "12700" },
      { "value": "24400" },
      { "value": "9000" },
      { "value": "7000" },
      { "value": "36000" },
      { "value": "24400" },
      { "value": "9000" },
      { "value": "7000" },
      { "value": "36000" }
    ])
    
    setCurrentYearData([
      { "value": "30000" },
      { "value": "29800" },
      { "value": "27600" },
      { "value": "8600" },
      { "value": "24400" },
      { "value": "9000" },
      { "value": "7000" },
      { "value": "36000" },
      { "value": "24400" },
      { "value": "9000" },
      { "value": "7000" },
      { "value": "36000" }
    ]);
  }
  else{
      setPrevYearData([
        { "value": "12000" },
        { "value": "10500" },
        { "value": "23500" },
        { "value": "16000" },
        { "value": "12000" },
        { "value": "10500" },
        { "value": "23500" },
        { "value": "16000" },
        { "value": "12000" },
        { "value": "10500" },
        { "value": "23500" },
        { "value": "16000" }
      ])
      
      setCurrentYearData([
        { "value": "24400" },
        { "value": "29800" },
        { "value": "20800" },
        { "value": "26800" },
        { "value": "12000" },
        { "value": "10500" },
        { "value": "23500" },
        { "value": "16000" },
        { "value": "12000" },
        { "value": "10500" },
        { "value": "23500" },
        { "value": "16000" }
      ]);
  }
}, [props.chartValue])
// STEP 3- Construct the dataset comprising multiple series


const dataset = [
  {
    "seriesname": "Fixed Price",
    "data": prevYearData
  },
  {
    "seriesname": "Variable Price",
    "data": currentYearData
  }
]


const chartConfigs = {
  type: 'mscolumn2d',// The chart type
  width: '700', // Width of the chart
  height: '400', // Height of the chart
  dataFormat: 'json', // Data type
   dataSource: {
  //Chart Configurations
    "chart": {
      "theme": "fusion",
      "caption": "Comparison of Quarterly Revenue",
      "xAxisname": "Months",
      "yAxisName": "Revenues (In USD)",
      "numberPrefix": "$",
      "plotFillAlpha": "80",
      "divLineIsDashed": "1",
      "divLineDashLen": "1",
      "divLineGapLen": "1"
    },
    "categories": categories,
    "dataset": dataset,
  }
}
  return(
    <div>
      <ReactFC {...chartConfigs} 
       width="100%"
       height="100%"
      />
    </div>
  )

}

export default Barchart;


