import { ICheckboxProps } from "components/Checkbox/ICheckboxProps";

const Checkbox: React.FC<
  ICheckboxProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ label, checked, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </label>
  );
};

export default Checkbox;
