import React, { useState } from "react";
import { StyledFieldset, Legend, CheckboxLabel, Price } from "./styles";
import { Ul, Label } from "/src/components/elements";
import Checkbox from "/src/components/ui/checkbox/checkbox";
import TextInput from "/src/components/ui/text-input/text-input";
import Button from "/src/components/ui/button/button";

function BuyForm({ products, selectedValues, onChange }) {
  const [userAddress, setUserAddress] = useState("");

  const getPrice = (productsList, ids) => {
    const items = [];
    ids.forEach((id) => {
      productsList.forEach((product) => {
        product.id === id && items.push(product);
      });
    });

    let price = 0;
    price = items.reduce(
      (accumulator, item) => accumulator + item.price,
      price
    );

    return price;
  };

  const buyButtonHandler = () => {
    alert(`
    Спасибо за заказ!
    Стоимость покупок: ${getPrice(products, selectedValues)} рублей,
    адрес доставки: ${userAddress}`);
  };

  return (
    <form>
      <StyledFieldset $marginBottom={18}>
        <Legend $bottom={12}>Выберите продукты</Legend>
        <Ul>
          {products && products.length
            ? products.map((product) => (
                <li key={product.id}>
                  <Checkbox
                    labelComponent={CheckboxLabel}
                    name="product"
                    value={product.id}
                    text={product.name}
                    selectedValues={selectedValues}
                    onChange={() => onChange(product.id)}
                  />
                </li>
              ))
            : null}
        </Ul>
      </StyledFieldset>
      <StyledFieldset>
        <Legend>Сделать заказ</Legend>
        <TextInput
          name="address"
          value={userAddress}
          placeholder="Введите адрес доставки"
          onChange={(evt) => {
            setUserAddress(evt.target.value);
          }}
        />
        <Label $small $bottom={8}>
          Цена
        </Label>
        <Price>{getPrice(products, selectedValues)} руб.</Price>
        <Button
          maxWidth
          type="submit"
          disabled={!(selectedValues.length && userAddress)}
          onClick={() => buyButtonHandler()}
        >
          Купить
        </Button>
      </StyledFieldset>
    </form>
  );
}

export default BuyForm;
