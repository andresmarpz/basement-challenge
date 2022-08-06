import Box from "@/components/Box";
import { Product } from "@/product/types";
import { styled } from "@/stitches.config";
import Image from "next/image";

const Card = styled("div", {
	flex: 1,
	width: "100%",
	minHeight: 300,
	position: "relative",
});

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
	return (
		<Card>
			<Image src={product.image} alt={`${product.name} product image`} objectFit="cover" layout="fill" />
		</Card>
	);
};

const Products: React.FC<{ payload: Product[] }> = ({ payload }) => {
	return (
		<Box
			css={{
				marginTop: "5vh",

				display: "flex",
				flexWrap: "wrap",
			}}>
			{payload.map((product, index) => (
				<ProductCard key={"prod" + index} product={product} />
			))}
		</Box>
	);
};

export default Products;
