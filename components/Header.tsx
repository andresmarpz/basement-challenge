import Box from "@/components/Box";
import { styled } from "@/stitches.config";

const StyledHeader = styled("div", {
	marginTop: 24,
	textAlign: "center",
});

const StyledTitle = styled("p", {
	fontSize: "14vw",
	lineHeight: 0.9,
	margin: 0,
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
			<StyledTitle>BASEMENT</StyledTitle>
			<Box
				css={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					gap: "1vw",
				}}>
				<Ellipsis>EST</Ellipsis>
				<StyledTitle
					css={{
						color: "black",
						textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white",
					}}>
					SUPPLY
				</StyledTitle>
				<Ellipsis>2K22</Ellipsis>
			</Box>
		</StyledHeader>
	);
};

export default Header;
