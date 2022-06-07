import { createContext, useState } from "react";

const defaultValue = { monthlyCost: 100000 };

const MonthlyCostContext = createContext<any>(defaultValue);

export function MonthlyCostProvider({ children }: { children: any }) {
  const [item, setItem] = useState(defaultValue);

  const handleMonthlyCost = (monthlyCost: number) => {
    setItem((prevState) => ({ ...prevState, monthlyCost: monthlyCost }));
  };
  return (
    <MonthlyCostContext.Provider value={{ item, handleMonthlyCost }}>
      {children}
    </MonthlyCostContext.Provider>
  );
}

export default MonthlyCostContext;
