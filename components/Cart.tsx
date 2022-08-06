import { styled } from "@/stitches.config";
import React from "react";

import * as Dialog from "@radix-ui/react-dialog";

export const StyledTrigger = styled("button", {
	all: "unset",

	display: "flex",
	alignItems: "center",

	lineHeight: 1,
	color: "white",
	cursor: "pointer",
	padding: "12px 24px",
	border: "2px solid white",
	borderRadius: 24,
});

export const CartTrigger = ({ children }: React.PropsWithChildren) => {
	return <StyledTrigger>CART (0)</StyledTrigger>;
};

const Cart = () => {};

export default Cart;
