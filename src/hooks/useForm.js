import { useState } from "react";

const handleOnChange = ({ e, form, setForm }) => {
  let { checked, name, value } = e.target;
  if (name === "status") {
    value = checked ? "active" : "inactive";
  }
  setForm({
    ...form,
    [name]: value,
  });
};

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);
  console.log(form);

  return {
    form,
    setForm,
    handleOnChange: (e) => handleOnChange({ e, form, setForm }),
  };
};
export default useForm;
