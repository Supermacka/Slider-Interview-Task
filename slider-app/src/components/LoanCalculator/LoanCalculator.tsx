import React, { useContext } from "react";
import Sliders from "components/Sliders/Sliders";
import MonthlyCostContext from "contexts/MonthlyCostContext";

const LoanCalculator: React.FC = () => {
  const { item } = useContext(MonthlyCostContext);

  return (
    <div>
      <header>
        <h1>Lånekalkyl</h1>
      </header>
      <div>
        <h4>Exempel på månadskostnad</h4>
        <h3>{item.monthlyCost} SEK / mån</h3>
      </div>
      <Sliders />
    </div>
  );
};

export default LoanCalculator;
