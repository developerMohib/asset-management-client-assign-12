import {
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import useAuth from "../../../../Hooks/useAuth";
import Spinner from "../../../../Component/Spinner/Spinner" ;
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const COLORS = ["#0088FE", "#00C49F", ];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


const MyPieChart = () => {
  const {loading} = useAuth();
  const axiosSecure = useAxiosSecure();
  const {data: requestData = [], isLoading} = useQuery({
    queryKey: ['product'],
    queryFn: async ()=>{
      const res = await axiosSecure.get(`/requ-product`);
            return res.data ;
    }
  })
  const nonReturnable = requestData.filter(item => item.assetType === 'Non-Returnable');
  const returnable = requestData.filter(item => item.assetType === 'Returnable');

  const data = [
  { name: "Non Returnable", value: nonReturnable.length },
  { name: "Returnable", value: returnable.length },
];

  
  if (loading || isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend></Legend>
    </PieChart>
  );
};

export default MyPieChart;
