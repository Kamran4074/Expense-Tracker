import React from 'react';
import { LuArrowRight } from "react-icons/lu";
import * as FaIcons from 'react-icons/fa';  
import TransactionInfoCard from '../Cards/TransactionInfoCard';
import moment from 'moment';

const RecentIncome = ({ transactions, onSeeMore }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Income</h5>
        <button className="card-btn" onClick={onSeeMore}>
          See All <LuArrowRight className="text-base" />
        </button>
      </div>

      <div className="mt-6">
        {transactions?.slice(0, 5).map((item) => {
          const IconComponent = FaIcons[item.icon] || FaIcons.FaWallet; 
          return (
            <TransactionInfoCard
              key={item._id}
              title={item.source}
              icon={<IconComponent />}  
              date={moment(item.date).isValid() ? moment(item.date).format("Do MMM YYYY") : "Invalid date"}
              amount={item.amount}
              type="income"
              hideDeleteBtn
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecentIncome;
