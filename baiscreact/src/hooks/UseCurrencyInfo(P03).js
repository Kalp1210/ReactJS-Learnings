import { useEffect, useState } from "react";
import React from "react";
// generally hooks ka naam starts with use

const UseCurrencyInfoP03 = (currency) => {
  const [data, setData] = useState({});
  useEffect(() => {
    console.log(
      "https://cdn.jsdelivr.net/npm/fawazahmed0/currency-api@1/latest/currencies/.json"
    );
    console.log(currency);
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
};

export default UseCurrencyInfoP03;
