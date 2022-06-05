import React from "react";
import Sliders from "components/Sliders/Sliders";

const LoanCalculator: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Lånekalkyl</h1>
      </header>
      <div>
        <h4>Exempel på månadskostnad</h4>
        <h3>{"Hi"} 0000 SEK / mån</h3>
      </div>
      <Sliders />
    </div>
  );
};

export default LoanCalculator;
