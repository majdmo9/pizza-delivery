import Image from "next/image";
import React from "react";

interface Props {
  width?: number;
  height?: number;
}

const MainLogo = ({ width, height }: Props) => {
  return <Image alt="main-logo" width={width ?? 70} height={height ?? 70} src="/assets/images/Logo.jpg" />;
};

export default MainLogo;
