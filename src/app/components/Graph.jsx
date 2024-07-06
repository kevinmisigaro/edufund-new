import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";

const data = [
  { name: "Donated", value: 0 },
  { name: "Remaining", value: 1000000 },
];

const renderActiveShape = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
  payload,
  percent,
  value,
}) => {
  const RADIAN = Math.PI / 180;

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  function formatMoney(value) {
    function roundup(value) {
        if (value < 1000) {
            return Math.ceil(value / 10) * 10;
        } else if (value < 1000000) {
            return Math.ceil(value / 1000) * 1000;
        } else {
            return Math.ceil(value / 1000000) * 1000000;
        }
    }

    // Round up the value
    const roundedValue = roundup(value);

    // Format the rounded value
    if (roundedValue >= 1000000) {
        // To avoid showing .00 for whole millions
        const millionValue = (roundedValue / 1000000);
        return Number.isInteger(millionValue) ? millionValue + 'M' : millionValue.toFixed(2) + 'M';
    } else if (roundedValue >= 1000) {
        return (roundedValue / 1000).toFixed(0) + 'K';
    } else {
        return roundedValue.toString();
    }
}

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#e6e6e6"
      >{`£ ${formatMoney(value)}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#0076ff"
      >
        {/* {`(Rate ${(percent * 100).toFixed(2)}%)`} */}
      </text>
    </g>
  );
};

export default function Graph() {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <PieChart width={320} height={400}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data}
        cx={155}
        cy={200}
        innerRadius={50}
        outerRadius={60}
        fill="#fff"
        dataKey="value"
        onMouseEnter={onPieEnter}
      />
    </PieChart>
  );
}
