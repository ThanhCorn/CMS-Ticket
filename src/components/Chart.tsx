import CanvasJSReact from '@canvasjs/react-charts';
import { DateContext } from '../context/DateContext';
import { useContext } from 'react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = () => {
  const { mode } = useContext(DateContext);

  const options = {
    animationEnabled: true,
    axisX: {
      valueFormatString: '',
      lineThickness: 1,
      lineDashType: 'solid',
      labelFontFamily: 'Montserrat',
      labelFormatter: function (e: any) {
        if (mode === 'week') {
          return CanvasJS.formatDate(e.value, 'DD/MM');
        }
        return CanvasJS.formatDate(e.value, 'DD');
      },
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
          { x: new Date(2023, 3, 29), y: 140 },
          { x: new Date(2023, 4, 5), y: 150 },
          { x: new Date(2023, 4, 12), y: 140 },
          { x: new Date(2023, 4, 19), y: 160 },
          { x: new Date(2023, 4, 26), y: 190 },
        ],
      },
    ],
  };
  return <CanvasJSChart options={options} className="h-[250px]" />;
};

export default Chart;
