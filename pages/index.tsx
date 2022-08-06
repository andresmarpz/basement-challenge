import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import Navigation from "@/components/Navigation";
import Products from "@/components/Products";
import { Product } from "@/product/types";
import { styled } from "@/stitches.config";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import Footer from "@/components/Footer";

const Container = styled("div", {
	maxWidth: "",
	margin: "0 auto",
});

const Main = styled("main", {
	color: "white",
	minHeight: "100vh",
	height: "100%",
});

export const getStaticProps: GetStaticProps = async () => {
	const products = await import("@/product/mock.json").then((m) => m.default);

	return {
		props: { products },
	};
};

interface Props {
	products: Product[];
}

const Home: NextPage<Props> = ({ products }) => {
	return (
		<>
			<Head>
				<title>Basement Supply</title>
			</Head>
			<Container>
				<Navigation />
				<Main>
					<Header />
					<Marquee />
					<Products payload={products} />
					<Footer />
				</Main>
			</Container>
		</>
	);
};

export default Home;
