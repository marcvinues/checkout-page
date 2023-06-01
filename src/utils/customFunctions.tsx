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

export const getVisaFromId = (id) => {
  const visas = getDataFromStorage();
  const visa = visas.find((v) => v.id === id);
  return visa;
};

export const addVisaData = (data) => {
  let visa = getDataFromStorage();
  visa.push({ id: uuidv4(), ...data });
  localStorage["@form"] = JSON.stringify(visa);
  window.location.reload();
};

export const editVisa = (id: number, newVisa: any) => {
  let visa = getDataFromStorage();
  visa = visa.filter((v) => v.id !== id);
  visa.push(newVisa);
  localStorage["@form"] = JSON.stringify(visa);
  window.history.go(-1);
};

export const deleteVisa = (id: number) => {
  let visa = getDataFromStorage();
  visa = visa.filter((v) => v.id !== id);
  localStorage["@form"] = JSON.stringify(visa);
};
