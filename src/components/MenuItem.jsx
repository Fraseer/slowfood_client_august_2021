import React from "react";
import { List, Image } from "semantic-ui-react";
import { useSelector } from "react-redux";

const MenuItem = ({ item, addToCart }) => {
  const { authenticated } = useSelector((state) => state);

  return (
    <List.Item data-cy={`item-${item.id}`}>
      <Image data-cy="image" src={item.image} size="mini" floated="right" />
      <List.Content floated="left">
        <List.Header data-cy="name" className="menu-item-name">
          {item.name}
        </List.Header>
        <List.Description data-cy="description">
          {item.description}
        </List.Description>
        <List.Item data-cy="price">{item.price} kr</List.Item>
      </List.Content>
      {!authenticated ? (
        <div></div>
      ) : (
        <List.Icon
          onClick={() => addToCart(item.id)}
          floated="right"
          name="cart"
          link
          data-cy={`add-to-basket-${item.id}`}
        ></List.Icon>
      )}
    </List.Item>
  );
};

export default MenuItem;
