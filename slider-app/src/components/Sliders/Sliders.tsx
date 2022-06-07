import React, { FormEvent, ChangeEvent, useEffect, useContext } from "react";
import useForm from "utilities/useForm";
import { calculateMonthlyCost } from "utilities/monthlyCostCalculation";
import MonthlyCostContext from "contexts/MonthlyCostContext";
import styles from "components/Sliders/sliders.module.scss";

interface RangeProps {
  min: number;
  max: number;
  initial: number;
  step: number;
}

const loanAmountPropValues: RangeProps = {
  min: 20000,
  max: 200000,
  initial: 20000,
  step: 10000,
};
const loanDurationtPropValues: RangeProps = {
  min: 2,
  max: 10,
  initial: 2,
  step: 1,
};

const Sliders: React.FC = () => {
  const {
    state,
    handleChange,
  }: {
    state: {} | any;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  } = useForm();

  const loanAmount: number = !isNaN(state.loanAmount)
    ? +state.loanAmount
    : +loanAmountPropValues.initial;
  const loanDuration: number = !isNaN(state.loanDuration)
    ? +state.loanDuration
    : +loanDurationtPropValues.initial;

  // Dispatch calculateMonthlyCost to context-API
  const { handleMonthlyCost } = useContext(MonthlyCostContext);

  useEffect(() => {
    let monthlyCost = calculateMonthlyCost(loanAmount, loanDuration);
    handleMonthlyCost(monthlyCost);
  }, [loanAmount, loanDuration]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    let url = `http://localhost:3000/?loanAmount=${loanAmount}&loanDuration=${loanDuration}`;
    console.log("URL", url);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.sliders}>
        <label className={styles.slider__container}>
          <h4>Lånebelopp</h4>
          <input
            type="range"
            name="loanAmount"
            min={loanAmountPropValues.min}
            max={loanAmountPropValues.max}
            step={loanAmountPropValues.step}
            value={loanAmount}
            onChange={handleChange}
            className={styles.slider__range}
          />
          <output>{loanAmount} kr</output>
          <output className={styles.slider__max}>
            {loanAmountPropValues.max} kr
          </output>
        </label>

        <label className={styles.slider__container}>
          <h4>Lånetid</h4>
          <input
            type="range"
            name="loanDuration"
            min={loanDurationtPropValues.min}
            max={loanDurationtPropValues.max}
            step={loanDurationtPropValues.step}
            value={loanDuration}
            onChange={handleChange}
            className={styles.slider__range}
          />
          <output>{loanDuration} år</output>
          <output className={styles.slider__max}>
            {loanDurationtPropValues.max} år
          </output>
        </label>
      </div>

      <div className={styles.sliders__submit}>
        <button type="submit">Till ansökan</button>
      </div>
    </form>
  );
};

export default Sliders;
