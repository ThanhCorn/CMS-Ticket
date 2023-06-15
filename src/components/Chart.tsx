import CanvasJSReact from '@canvasjs/react-charts';
import { DateContext } from '../context/DateContext';
import { useContext } from 'react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = () => {
  const { mode } = useContext(DateContext);

  var dataPoints = [
    { x: new Date(2023, 3, 26), y: 120 },
    { x: new Date(2023, 4, 5), y: 180 },
    { x: new Date(2023, 4, 12), y: 170 },
    { x: new Date(2023, 4, 19), y: 210 },
    { x: new Date(2023, 4, 26), y: 180 },
    { x: new Date(2023, 5, 3), y: 150 },
  ];

  var minValue = Math.min(...dataPoints.map((point) => point.y));
  var maxValue = Math.max(...dataPoints.map((point) => point.y));

  const options = {
    animationEnabled: true,
    height: 200,
    axisX: {
      interval: 1,
      valueFormatString: '',
      lineDashType: 'solid',
      labelFontFamily: 'Montserrat',
      labelFormatter: function (e: any) {
        if (mode === 'week') {
          return CanvasJS.formatDate(e.value, 'DD/MM');
        }
        const dayLabels = [
          'Thứ 2',
          'Thứ 3',
          'Thứ 4',
          'Thứ 5',
          'Thứ 6',
          'Thứ 7 ',
          'CN',
        ];
        return dayLabels.map((day) => day)[e.value.getDay()];
      },
      maxValue: 6,
    },
    axisY: {
      interval: 20,
      suffix: 'tr',
      minimum: 120,
      maximum: 260,
    },
    data: [
      {
        yValueFormatString: '###tr',
        xValueFormatString: 'DD/MM',
        lineColor: '#FAA05F',
        type: 'area',
        color: 'rgba(250, 160, 95, 0.26)',
        dataPoints: [
          { x: dataPoints[0].x, y: minValue },
          ...dataPoints,
          { x: dataPoints[dataPoints.length - 1].x, y: minValue },
        ],
      },
    ],
  };
  return <CanvasJSChart options={options} />;
};

export default Chart;
