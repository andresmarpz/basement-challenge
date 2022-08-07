import { styled } from "@/stitches.config";

import { useStore } from "@/state/Store";

import { Product } from "@/product/types";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import Box from "./Box";
import Text from "./commons/Text";

const StyledTrigger = styled(Dialog.Trigger, {
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

const StyledOverlay = styled(Dialog.Overlay, {
	all: "unset",

	position: "fixed",
	inset: 0,
	zIndex: 99,
	backgroundColor: "rgba(0, 0, 0, 0.5)",
});
const StyledContent = styled(Dialog.Content, {
	display: "flex",
	flexDirection: "column",

	color: "white",
	backgroundColor: "black",
	minWidth: 600,
	height: "60%",
	position: "fixed",
	top: 0,
	right: 0,
	zIndex: 100,
	borderLeft: "1px solid $gray9",
	borderBottom: "1px solid $gray9",
});

const StyledClose = styled(Dialog.Close, {
	all: "unset",

	cursor: "pointer",
	color: "white",
	margin: 12,
	padding: "6px 10px",
});

const StyledCheckout = styled("button", {
	all: "unset",

	cursor: "pointer",
	width: "100%",
	height: "100%",
	textAlign: "center",
	flexBasis: "33%",
});

const Root = Dialog.Root;
const Trigger = StyledTrigger;
const Portal = Dialog.Portal;
const Overlay = StyledOverlay;
const Content = StyledContent;
const Close = StyledClose;

const ProductEntry: React.FC<{ product: Product; quantity: number }> = ({ product, quantity }) => {
	return (
		<Box
			css={{
				display: "flex",
				border: "1px solid $gray8",
				padding: 10,
				width: "100%",
				height: 200,
			}}>
			<Box
				css={{
					aspectRatio: "1 / 1",
					position: "relative",
					minWidth: 200,
					height: "100%",
					background: "linear-gradient(180deg, black 0%, $gray12 100%)",
				}}>
				<Image src={product.image} alt={`${product.name}`} objectFit="contain" layout="fill" />
			</Box>
			<Box
				css={{
					width: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					marginLeft: 12,
				}}>
				<Box>
					<Text
						css={{
							fontSize: "1.5rem",
							textTransform: "uppercase",
						}}>
						{product.name}
					</Text>
					<br />
					<Text
						css={{
							marginTop: 4,
							color: "$gray10",
						}}>
						{product.description}
					</Text>
				</Box>
				<Box>
					<Box>QUANTITY</Box>
					<Box
						css={{
							display: "flex",
							justifyContent: "space-between",
						}}>
						<span>SIZE</span>
						<span>${product.price}</span>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

const Cart = () => {
	const items = useStore((state) => state.cartItems);

	return (
		<Root>
			<Trigger>Cart ({Object.values(items).reduce((amount, item) => amount + item.quantity, 0)})</Trigger>
			<Portal>
				<Overlay />
				<Content>
					<Box
						css={{
							display: "flex",
							justifyContent: "flex-end",
						}}>
						<Close>→ CLOSE</Close>
					</Box>
					<Box
						css={{
							textAlign: "center",
						}}>
						<Text
							css={{
								fontSize: "5rem",
							}}>
							YOUR
						</Text>
						<Text
							css={{
								fontSize: "5rem",
								marginLeft: 16,
							}}
							fill={false}>
							CART
						</Text>
					</Box>
					<Box
						css={{
							padding: 16,
							display: "flex",
							flexDirection: "column",
							gap: 16,
							flexGrow: 1,
							overflowY: "scroll",
						}}>
						{Object.keys(items).length ? (
							Object.values(items).map(({ product, quantity }) => (
								<ProductEntry product={product} quantity={quantity} key={product.id} />
							))
						) : (
							<Box
								css={{
									textAlign: "center",
								}}>
								<Text
									css={{
										fontSize: "3rem",
									}}>
									IS
								</Text>
								<Text
									fill={false}
									css={{
										marginLeft: 16,
										fontSize: "3rem",
									}}>
									EMPTY
								</Text>
							</Box>
						)}
					</Box>
					<Box
						css={{
							display: "flex",
							borderTop: "1px solid $gray9",
						}}>
						<Text
							css={{
								flexBasis: "66%",
								borderRight: "1px solid $gray9",
								fontSize: "2rem",
								padding: 16,
							}}>
							TOTAL: $
							{Object.values(items).reduce(
								(total, item) => total + item.product.price * item.quantity,
								0
							)}
						</Text>
						<StyledCheckout>
							<Text
								css={{
									fontSize: "2rem",
									padding: 16,
								}}
								fill={false}>
								CHECKOUT
							</Text>
						</StyledCheckout>
					</Box>
				</Content>
			</Portal>
		</Root>
	);
};

export default Cart;
