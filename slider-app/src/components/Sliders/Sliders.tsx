import React, { ChangeEvent } from "react";
import useForm from "components/utilities/useForm";

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
  const loanAmount: number = +state.loanAmount;
  const loanDuration: number = +state.loanDuration;

  return (
    <form action="">
      <label>
        <h4>Lånebelopp</h4>
        <input
          type="range"
          name="loanAmount"
          min={loanAmountPropValues.min}
          max={loanAmountPropValues.max}
          step={loanAmountPropValues.initial}
          value={loanAmount || ""}
          onChange={handleChange}
        />
        <output>{loanAmount || ""} kr</output>
        <output>{loanAmountPropValues.max} kr</output>
      </label>

      <label>
        <h4>Lånetid</h4>
        <input
          type="range"
          name="loanDuration"
          min={loanDurationtPropValues.min}
          max={loanDurationtPropValues.max}
          step={loanDurationtPropValues.step}
          value={loanDuration || ""}
          onChange={handleChange}
        />
        <output>{loanDuration || ""} år</output>
        <output>{loanDurationtPropValues.max} år</output>
      </label>

      <button>Till ansökan</button>
    </form>
  );
};

export default Sliders;
