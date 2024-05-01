import { InputHTMLAttributes } from "react";

const Input = ({ ...rest }: InputHTMLAttributes<HTMLInputElement>) => (
  <input className="border border-1 rounded-md border-grey-600 w-full pl-1 h-10" {...rest} />
);

export default Input;
