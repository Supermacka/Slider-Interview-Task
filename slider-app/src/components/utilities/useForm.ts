import { ChangeEvent, useState } from "react";

const useForm = () => {
  const [state, setState] = useState({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Spread current props... set "loandAmount": value
    setState((current) => ({ ...current, [name]: value }));
  };

  return { state, handleChange };
};

export default useForm;
