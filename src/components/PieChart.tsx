import CanvasJSReact from '@canvasjs/react-charts';
import { PieChartType } from '../@types/myTypes';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const PieChart = ({ label, pointX, pointY }: PieChartType) => {
  const options = {
    theme: 'light1',
    animationEnabled: true,
    title: {
      text: label,
      fontSize: 24,
      fontStyle: 'normal',
      fontColor: '#1E0D03',
      fontWeight: 'bold',
      fontFamily: 'Montserrat',
    },
    data: [
      {
        type: 'doughnut',
        showInLegend: true,
        legendText: '{label}',
        percentFormatString: '#####',
        toolTipContent: '{label}: {y} (#percent%)',
        indexLabel: '{y}',
        indexLabelPlacement: 'inside',
        innerRadius: '50%',
        dataPoints: [
          { y: pointX, color: '#FF8A48' },
          { y: pointY, color: '#4F75FF' },
        ],
      },
    ],
  };
  return (
    <div className="mb-5">
      <CanvasJSChart options={options} />
    </div>
  );
};

export default PieChart;
