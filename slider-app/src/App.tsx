import React from "react";
import "components/App.scss";
import LoanCalculator from "components/LoanCalculator/LoanCalculator";
import { MonthlyCostProvider } from "contexts/MonthlyCostContext";

function App() {
  return (
    <div className="main__container">
      <MonthlyCostProvider>
        <LoanCalculator />
      </MonthlyCostProvider>
    </div>
  );
}

export default App;
