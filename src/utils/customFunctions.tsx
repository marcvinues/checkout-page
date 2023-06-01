import { v4 as uuidv4 } from "uuid";

export const calculationPrice = (price: number, number: number) => {
  const total = price * number;
  return total;
};

export const breakLine = (txt: string) => {
  return txt.split("\n").map((str) => <p key={str}>{str}</p>);
};

export const getDataFromStorage = () => {
  if (!localStorage["@form"]) {
    localStorage["@form"] = JSON.stringify([]);
  }
  let visaData = JSON.parse(localStorage["@form"]);
  return visaData;
};

export const addVisaData = (data) => {
  const visa = getDataFromStorage();
  visa.push({ id: uuidv4(), ...data });
  localStorage["@form"] = JSON.stringify(visa);
  window.location.reload();
};
