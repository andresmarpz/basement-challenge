import { styled } from "@/stitches.config";
import React from "react";

export const StyledTrigger = styled("button", {
	all: "unset",

	display: "flex",
	alignItems: "center",

	lineHeight: 1,
	color: "white",
	cursor: "pointer",
	padding: "12px 24px",
	border: "1px solid white",
	borderRadius: 24,
});

export const CartTrigger = ({ children }: React.PropsWithChildren) => {
	return <StyledTrigger>CART (0)</StyledTrigger>;
};

const Cart = () => {};

export default Cart;
