import { Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link as RouterLink } from "react-router-dom";
import useCartContext from "../hooks/useCartContext";

const WidgetStyle = styled(RouterLink)(({ theme }) => ({
  zIndex: 999,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  right: "20px",
  top: "100px",
  height: "40px",
  width: "40px",
  padding: "8px",
  backgroundColor: "#fff",
  color: theme.palette.text.primary,
  borderRadius: "50%",
  cursor: "pointer",
  border: "1px solid #333",
}));

function CartWidget() {
  const { cartProducts } = useCartContext();
  const totalItem = cartProducts.reduce(
    (acc, product) => acc + product.quantity,
    0
  );
  return (
    <WidgetStyle to="/checkout">
      <Badge badgeContent={totalItem} color="primary">
        <ShoppingCartIcon />
      </Badge>
    </WidgetStyle>
  );
}

export default CartWidget;
