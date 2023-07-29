import './Chart.css'
import ChartBar from './ChartBar';

export default function Chart (props) {
    return (
        <div>
            {props.dataPoints.map(dataPoint => <ChartBar value={dataPoint.value} />)}
        </div>
    )
}