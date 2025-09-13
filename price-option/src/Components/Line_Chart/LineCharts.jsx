

const LineCharts = () => {
  const data = [
    { name: 'Student 1', marks: 85 },
    { name: 'Student 2', marks: 92 },
    { name: 'Student 3', marks: 78 },
    { name: 'Student 4', marks: 88 },
    { name: 'Student 5', marks: 95 },
    { name: 'Student 6', marks: 70 },
    { name: 'Student 7', marks: 82 },
    { name: 'Student 8', marks: 90 },
    { name: 'Student 9', marks: 76 },
    { name: 'Student 10', marks: 89 },
  ];

  return (
    <div>
      <RechartsLineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="marks" stroke="#8884d8" />
      </RechartsLineChart>
    </div>
  );
};

export default MathLineChart;
