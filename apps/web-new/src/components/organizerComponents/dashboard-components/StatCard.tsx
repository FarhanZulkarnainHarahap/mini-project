// components/StatCard.tsx
import React from "react";

interface StatCardProps {
  title: string;
  value: number;
  color?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  color = "bg-blue-500",
}) => {
  return (
    <div className="rounded-2xl shadow-md p-6 w-full md:w-1/3">
      <div
        className={`text-white text-xl font-semibold p-4 rounded-lg ${color}`}
      >
        {title}
      </div>
      <div className="text-3xl font-bold mt-4">{value}</div>
    </div>
  );
};

export default StatCard;
