export const currency = (price: number) => price.toLocaleString("he-IL", { style: "currency", currency: "ILS" });
