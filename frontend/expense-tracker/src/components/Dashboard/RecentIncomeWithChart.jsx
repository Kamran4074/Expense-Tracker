import React, { useEffect, useState } from 'react';
import CustomPieChart from '../Charts/CustomPieChart';

const COLORS = ["#875CF5", "#FA2C37", "#FF6900", "#4f39f6"];

const RecentIncomeWithChart = ({ data }) => {
    console.log("Received income data:", data);
    const [chartData, setChartData] = useState([]);
    const [totalIncome, setTotalIncome] = useState(0);

    useEffect(() => {
        const dataArr = data?.map((item) => ({
            name: item?.source || "Unknown",
            amount: Number(item?.amount) || 0,
        })) || [];

        const total = dataArr.reduce((sum, item) => sum + item.amount, 0);
        console.log("💰 Total income calculated:", totalIncome);

        setChartData(dataArr);
        setTotalIncome(total);
    }, [data]);

    return (
        <div className="card">
            <div className="flex items-center justify-between">
                <h5 className="text-lg">Last 60 Days Income</h5>
            </div>

            {chartData.length > 0 ? (
                <CustomPieChart
                    data={chartData}
                    label="Total Income"
                    totalAmount={!isNaN(totalIncome) ? totalIncome : 0}
                    showTextAnchor
                    colors={COLORS}
                />
            ) : (
                <p className="text-gray-500 mt-4">No income data available.</p>
            )}
        </div>
    );
};

export default RecentIncomeWithChart;
