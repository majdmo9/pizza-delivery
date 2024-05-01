import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import Image from "next/image";
import PButton from "./PButton";
import { currency } from "../../utils/currency";

interface Props {
  imageUrl: string;
  price: number;
  title: string;
  description: string;
}

const MenuCard = ({ imageUrl, price, title, description }: Props) => {
  return (
    <Card>
      <CardMedia component="img" height={225} alt={imageUrl} src={imageUrl} />
      <CardContent>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-500 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-[#bd3d3e] font-bold">{currency(price)}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuCard;
