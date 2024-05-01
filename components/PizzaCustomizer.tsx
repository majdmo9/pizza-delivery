"use client";
import Cheese from "@pizza/assets/BaseCheese.png";
import Base from "@pizza/assets/PizzaBase.png";
import Olive from "@pizza/assets/Olive.png";
import Pineapple from "@pizza/assets/Pineapple.png";
import Mushroom from "@pizza/assets/Mushroom.png";
import Basil from "@pizza/assets/Basil.png";
import Tomato from "@pizza/assets/Tomato.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Ingredients {
  [key: string]: boolean;
}

const Customize: React.FC = () => {
  const [ingredients, setIngredients] = useState<Ingredients>({
    basil: false,
    cheese: false,
    mushroom: false,
    olive: false,
    pineapple: false,
    tomato: false,
  });

  const onChange = (event: boolean, name: string) => {
    let newIngredients = { ...ingredients };
    newIngredients[name] = event;
    setIngredients(newIngredients);
    localStorage.setItem("ingredients", JSON.stringify(newIngredients));
  };

  useEffect(() => {
    const data = localStorage.getItem("ingredients");
    if (data) {
      setIngredients(JSON.parse(data));
    }
  }, []);

  return (
    <div className="flex bg-[rgb(0,0,0)]/50 rounded-lg text-white">
      <div className="flex-1 p-8">
        <div className="relative max-w-500 max-h-500">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients?.["basil"] ? 100 : -100,
              opacity: ingredients?.["basil"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
          >
            <Image src={Basil} alt="Pizza Base" className="h-full w-full" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients?.["olive"] ? 100 : -100,
              opacity: ingredients?.["olive"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
          >
            <Image src={Olive} alt="Pizza Base" className="h-full w-full" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients?.["pineapple"] ? 100 : -100,
              opacity: ingredients?.["pineapple"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z3"
          >
            <Image src={Pineapple} alt="Pizza Base" className="h-full w-full" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients?.["tomato"] ? 100 : -100,
              opacity: ingredients?.["tomato"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
          >
            <Image src={Tomato} alt="Tomato" className="h-full w-full" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: ingredients?.["cheese"] ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="cheese z1"
          >
            <Image src={Cheese} alt="Cheese" className="h-full w-full" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients?.["mushroom"] ? 100 : -100,
              opacity: ingredients?.["mushroom"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
          >
            <Image src={Mushroom} alt="Pizza Base" className="h-full w-full" />
          </motion.div>
          <motion.div transition={{ duration: 1 }} className="">
            <Image src={Base} alt="Pizza Base" className="h-full w-full" />
          </motion.div>
        </div>
      </div>
      <div className="flex-1 p-8">
        <label className="container-checkbox">
          Pineapple
          <input type="checkbox" checked={ingredients?.["pineapple"]} onChange={event => onChange(event.currentTarget.checked, "pineapple")} />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Basil
          <input type="checkbox" checked={ingredients?.["basil"]} onChange={event => onChange(event.currentTarget.checked, "basil")} />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Olive
          <input type="checkbox" checked={ingredients?.["olive"]} onChange={event => onChange(event.currentTarget.checked, "olive")} />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Tomato
          <input type="checkbox" checked={ingredients?.["tomato"]} onChange={event => onChange(event.currentTarget.checked, "tomato")} />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Mushroom
          <input type="checkbox" checked={ingredients?.["mushroom"]} onChange={event => onChange(event.currentTarget.checked, "mushroom")} />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Cheese
          <input type="checkbox" checked={ingredients?.["cheese"]} onChange={event => onChange(event.currentTarget.checked, "cheese")} />
          <span className="checkmark"></span>
        </label>
      </div>
    </div>
  );
};

export default Customize;
