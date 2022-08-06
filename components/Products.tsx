import Box from "@/components/Box";
import { Product } from "@/product/types";
import { styled } from "@/stitches.config";
import Image from "next/image";
import { useState } from "react";

import Worldwide from "@/public/assets/worldwide.png";

const Card = styled("div", {
	cursor: "pointer",
	flex: 1,
	width: "100%",
	minHeight: 300,
	position: "relative",
});

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
	const [hovered, setHovered] = useState<boolean>(false);

	return (
		<Card onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
			<Box
				css={{
					height: "100%",
					position: "relative",
					background: "linear-gradient(180deg, black 0%, $gray12 100%)",
					borderBottom: "2px solid white",
					marginBottom: 12,
					"&:hover": {
						background: "linear-gradient(180deg, black 0%, $gray14 100%)",
					},
				}}>
				<Image src={product.image} alt={`${product.name} product image`} objectFit="cover" layout="fill" />
			</Box>
			<Box
				css={{
					width: "100%",
					display: "flex",
					justifyContent: "space-between",
				}}>
				<span>{product.name}</span>
				<span>${product.price}</span>
			</Box>
			{hovered && (
				<Box
					css={{
						position: "absolute",
						left: " 50%",
						top: "50%",
						transform: "translate(-50%,-50%) scale(1.25)",
						pointerEvents: "none",
					}}>
					<Image src={Worldwide} alt="Add to card text with a globe behind" />
				</Box>
			)}
		</Card>
	);
};

const Products: React.FC<{ payload: Product[] }> = ({ payload }) => {
	return (
		<Box
			css={{
				margin: "5vh 12px 0",

				display: "flex",
				gap: 24,
				flexWrap: "wrap",
			}}>
			{payload.map((product, index) => (
				<ProductCard key={"prod" + index} product={product} />
			))}
		</Box>
	);
};

export default Products;