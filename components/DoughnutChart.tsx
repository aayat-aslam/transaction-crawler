"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement,Tooltip,Legend);

const DoughnutChart = ({accounts}:DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [25684, 12304, 9842],
                backgroundColor: ['#747b6', '#2265d8', '#2f91fa']
            }
        ],
        labels: ['Axis', 'PNB', 'HDFC']
    }
    return (
        <Doughnut
            data={data}
            options={{
                cutout: '60%',
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }}
        />
    )
}

export default DoughnutChart;