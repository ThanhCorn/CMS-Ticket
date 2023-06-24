import CanvasJSReact from '@canvasjs/react-charts';
import { PieChartType } from '../@types/myTypes';
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

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
        innerRadius: '60%',
        indexLabelBackgroundColor: 'white',
        indexLabelMaxWidth: 70,
        indexLabelFont: '12px Montserrat',
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
      <style>{`
        .canvasjs-chart-container .canvasjs-index-label {
          padding: 10px;
        }
      `}</style>
    </div>
  );
};

export default PieChart;
