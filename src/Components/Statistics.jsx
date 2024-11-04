import { PieChart, Pie, Tooltip } from "recharts";

const data = [
  { name: "Assignment-1", value: 29 },
  { name: "Assignment-2", value: 27 },
  { name: "Assignment-3", value: 30 },
  { name: "Assignment-4", value: 30 },
  { name: "Assignment-5", value: 30 },
  { name: "Assignment-6", value: 28 },
  { name: "Assignment-7", value: 30 },
  { name: "Assignment-8", value: 30 },
];
const Statistics = () => {
  return (
    <>
      <h1 className="text-center text-3xl font-bold">My Assignment marks</h1>
      <div className="flex justify-center">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={20}
            outerRadius={90}
            fill="#4C1D95"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    </>
  );
};

export default Statistics;
