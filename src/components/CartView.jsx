import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import axios from "axios";

const CartView = ({ cart }) => {
  const [finalizeOrder, setFinalizeOrder] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  let cartTotal = 0;

  const closeOrder = async () => {
    await axios
      .put(`https://slowfood2021.heroku.com/api/carts?=125&finalized=true`)
      .then((response) => {
        setFinalizeOrder(response.data.cart.finalized);
        setResponseMessage(response.data.message);
      });
  };

  const cartProducts = cart?.products.map((product) => {
    return (
      <div key={product.id}>
        <h2>{product.name}</h2>
      </div>
    );
  });

  cart.products.map((product) => {
    return (cartTotal += parseInt(product.price));
  });

  return (
    <>
      <div data-cy="cart-details">
        <div data-cy="cart-status">
          Status: {finalizeOrder ? "closed" : "open"}
        </div>
        <div data-cy="cart-products">{cartProducts}</div>
        <div data-cy="cart-total">
          {" "}
          {responseMessage ? "Paid" : "To pay"}
          {`: ${cartTotal}kr`}
        </div>
      </div>
      <div>
        {" "}
        {responseMessage ? (
          ""
        ) : (
          <Button data-cy="finalize-order" onClick={() => closeOrder()}>
            Finalize Order
          </Button>
        )}
      </div>

      <h3 data-cy="finalize-response-message">{`${responseMessage}`}</h3>
    </>
  );
};

export default CartView;
