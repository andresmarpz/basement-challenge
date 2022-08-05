import { styled } from "@/stitches.config";
import type { NextPage } from "next";

const Container = styled("main", {
	color: "white",
	backgroundColor: "$gray12",
	minHeight: "100vh",
	height: "100%",
});

const Home: NextPage = () => {
	return <Container>Basement</Container>;
};

export default Home;
