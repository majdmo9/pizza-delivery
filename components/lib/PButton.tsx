import { Button, ButtonProps } from "@mui/material";

const PButton = ({ children, ...rest }: ButtonProps) => (
  <Button
    {...rest}
    className="inline-flex items-center justify-center rounded-md bg-[#bd3d3e] text-white px-6 py-3 font-medium hover:bg-gray-200 transition-colors"
  >
    {children}
  </Button>
);

export default PButton;
