import CanvasJSReact from '@canvasjs/react-charts';
import { DataChart } from '../DataChart';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const options = {
  animationEnabled: true,
  axisX: {
    valueFormatString: 'MMM',
  },
  axisY: {
    suffix: 'tr',
  },
  data: [
    {
      yValueFormatString: '###tr',
      xValueFormatString: 'DD/MM',
      lineColor: '#FAA05F',
      type: 'spline',
      dataPoints: [
        { x: new Date(2023, 0, 22), y: 140 },
        { x: new Date(2023, 0, 29), y: 150 },
        { x: new Date(2023, 1, 5), y: 140 },
        { x: new Date(2023, 1, 12), y: 160 },
      ],
    },
  ],
};

const Chart = () => {
  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default Chart;
