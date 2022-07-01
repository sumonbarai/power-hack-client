import { useEffect, useState } from "react";

const useTotalAmount = () => {
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    const url = "http://localhost:5000/billing-list";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const store = data.map((val) => {
          const money = val.amount;
        });
        setAmount(data);
      });
  }, []);
  return amount;
};
export default useTotalAmount;
