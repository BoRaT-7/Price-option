import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const Grap = () => {
 const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, ...];
    return (
        <div>
              <LineChart width={600} height={300} data={data}>
    <CartesianGrid />
    <Line dataKey="uv" />
    <XAxis dataKey="name" />
    <YAxis />
    <Legend />
  </LineChart>
        </div>
    );
};

export default Grap;