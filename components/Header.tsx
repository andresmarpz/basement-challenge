import Box from "@/components/Box";
import { styled } from "@/stitches.config";

const StyledHeader = styled("div", {
	textAlign: "center",
	marginTop: 24,
});

const Title = styled("p", {
	fontSize: "14.5vw",
	lineHeight: 0.9,
	margin: 0,
});

const StrokeTitle = styled("p", {
	fontSize: "14.5vw",
	lineHeight: 0.9,
	margin: 0,
	color: "black",
	textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white",
});

const Ellipsis = ({ children }: { children?: React.ReactNode }) => {
	return (
		<Box
			css={{
				outline: "1px solid white",
				borderRadius: "50%",
				padding: "1.5vw",
				width: "10vw",
				minWidth: 36,
				fontSize: "1.5vw",
			}}>
			{children}
		</Box>
	);
};

const Header = () => {
	return (
		<StyledHeader>
			<Title>BASEMENT</Title>
			<Box
				css={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					gap: "1vw",
				}}>
				<Ellipsis>EST</Ellipsis>
				<StrokeTitle>SUPPLY</StrokeTitle>
				<Ellipsis>2K22</Ellipsis>
			</Box>
		</StyledHeader>
	);
};

export default Header;
