import React, { useContext } from "react";
import Sliders from "components/Sliders/Sliders";
import MonthlyCostContext from "contexts/MonthlyCostContext";
import styles from "components/LoanCalculator/loanCalculator.module.scss";

const LoanCalculator: React.FC = () => {
  const { item } = useContext(MonthlyCostContext);

  return (
    <div className={styles.calculator__container}>
      <header className={styles.calculator__header}>
        <h1>Lånekalkyl</h1>
      </header>
      <div className={styles.calculator__result}>
        <h4>Exempel på månadskostnad</h4>
        <h3>{item.monthlyCost} SEK / mån</h3>
      </div>
      <Sliders />
    </div>
  );
};

export default LoanCalculator;
