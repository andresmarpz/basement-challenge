import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import Navigation from "@/components/Navigation";
import { styled } from "@/stitches.config";
import type { NextPage } from "next";
import Head from "next/head";

const Container = styled("div", {
	maxWidth: "",
	margin: "0 auto",
});

const Main = styled("main", {
	color: "white",
	minHeight: "100vh",
	height: "100%",
});

const Home: NextPage = () => {
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
				</Main>
			</Container>
		</>
	);
};

export default Home;
