export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email); 
};

export const getinitials=(name)=>{
    if(!name) return "";

    const words=name.split(" ");
    let initials="";

    for(let i=0;i<Math.min(words.length,2); i++){
        initials+=words[i][0];
    }
    return initials.toUpperCase();
}

export const addThousandsSeparator = (num) => {
    if (num == null || isNaN(num)) return "";

    const [integerPart, fractionalPart] = num.toString().split(".");
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return fractionalPart ? `${formattedInteger}.${fractionalPart}` : formattedInteger;
};

export const prepareExpenseBarChartData = (data = []) => {
  const chartData = data.map((item) => {
    const date = new Date(item?.date);
    const month = date.toLocaleString("default", { month: "short" }); // e.g., "May"
    return {
      month, // for X-axis
      amount: item?.amount || 0,
      category: item?.category || "Unknown",
    };
  });

  return chartData;
};
