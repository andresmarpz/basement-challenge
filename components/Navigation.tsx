import { styled } from "@/stitches.config";

const Circle = () => {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M11.7812 11.9999H22.9715C22.9715 18.0637 17.9613 22.9796 11.7812 22.9796V11.9999Z" fill="white" />
			<path d="M11.7811 1.02026V12H0.59082C0.59082 5.93621 5.60106 1.02026 11.7811 1.02026Z" fill="white" />
			<path
				d="M11.7811 22.9797C17.9614 22.9797 22.9714 18.0639 22.9714 12C22.9714 5.93605 17.9614 1.02026 11.7811 1.02026C5.60089 1.02026 0.59082 5.93605 0.59082 12C0.59082 18.0639 5.60089 22.9797 11.7811 22.9797Z"
				stroke="white"
				strokeMiterlimit="10"
			/>
		</svg>
	);
};

const Eye = () => {
	return (
		<svg width="84" height="22" viewBox="0 0 84 22" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M42.4136 21.029C65.0723 21.029 83.4408 16.5388 83.4408 11C83.4408 5.46114 65.0723 0.971008 42.4136 0.971008C19.7549 0.971008 1.38635 5.46114 1.38635 11C1.38635 16.5388 19.7549 21.029 42.4136 21.029Z"
				stroke="white"
				strokeMiterlimit="10"
			/>
			<path
				d="M42.4136 21.029C48.0587 21.029 52.635 16.5388 52.635 11C52.635 5.46114 48.0587 0.971008 42.4136 0.971008C36.7685 0.971008 32.1923 5.46114 32.1923 11C32.1923 16.5388 36.7685 21.029 42.4136 21.029Z"
				stroke="white"
				strokeMiterlimit="10"
			/>
			<path
				d="M42.4136 12.8435C43.4512 12.8435 44.2924 12.0181 44.2924 11C44.2924 9.98185 43.4512 9.15649 42.4136 9.15649C41.3759 9.15649 40.5347 9.98185 40.5347 11C40.5347 12.0181 41.3759 12.8435 42.4136 12.8435Z"
				fill="white"
			/>
		</svg>
	);
};

const FourK = () => {
	return (
		<svg width="43" height="24" viewBox="0 0 43 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M40.2327 24H2.63237C1.29709 24 0.209961 22.9333 0.209961 21.6232V2.37681C0.209961 1.06667 1.29709 0 2.63237 0H40.2327C41.568 0 42.6551 1.06667 42.6551 2.37681V21.6116C42.667 22.9333 41.5798 24 40.2327 24Z"
				fill="white"
			/>
			<path
				d="M7.25266 15.0029V12.9623L14.5789 7.14203H18.2539V13.1362H20.3218V15.0029H18.2539V17.171H15.3234V15.0029H7.25266V15.0029ZM15.3116 9.29855H15.2407L10.5259 13.0667V13.1478H15.3234V9.29855H15.3116Z"
				fill="black"
			/>
			<path
				d="M35.8134 17.171H31.9848L27.7544 12.1855L24.8948 14.2493V17.171H21.8698V6.91016H24.8948V11.4087L30.9686 6.91016H35.0571L30.0705 10.516L35.8134 17.171Z"
				fill="black"
			/>
		</svg>
	);
};

const HighDefinition = () => {
	return (
		<svg width="43" height="24" viewBox="0 0 43 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M40.4312 24H2.83077C1.49549 24 0.40836 22.9333 0.40836 21.6232V2.37681C0.396543 1.06667 1.48367 0 2.83077 0H40.4312C41.7664 0 42.8536 1.06667 42.8536 2.37681V21.6116C42.8536 22.9333 41.7664 24 40.4312 24Z"
				fill="white"
			/>
			<path
				d="M20.6029 6.91016V17.171H17.5779V13.0087H10.2279V17.171H7.20288V6.91016H10.2279V10.829H17.5779V6.91016H20.6029Z"
				fill="black"
			/>
			<path
				d="M36.4726 12.0464C36.4726 15.7333 34.2274 17.171 30.1744 17.171H22.8126V6.91016H30.1744C34.2156 6.91016 36.4726 8.35943 36.4726 12.0464ZM25.8377 9.05508V15.0261H29.5126C31.8169 15.0261 33.1403 14.1797 33.1403 12.0348C33.1403 9.88987 31.8169 9.04349 29.5126 9.04349H25.8377V9.05508Z"
				fill="black"
			/>
		</svg>
	);
};

const Warning = () => {
	return (
		<svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M24.7046 21.516C16.7047 21.516 8.71669 21.516 0.71685 21.516C0.705033 21.5044 0.693218 21.5044 0.681401 21.4928C0.551419 21.4464 0.468701 21.3536 0.421435 21.2261C0.409618 21.2029 0.40962 21.1913 0.385986 21.1681C0.385986 21.1102 0.385986 21.0638 0.385986 21.0058C0.397803 20.9942 0.409625 20.971 0.409625 20.9594C0.433258 20.9131 0.456888 20.8667 0.480521 20.8203C0.811386 20.2522 1.14226 19.6841 1.48494 19.1275C1.91034 18.3971 2.33574 17.6783 2.76113 16.9478C3.31652 15.9971 3.88371 15.0464 4.43909 14.0957C4.97084 13.1913 5.50258 12.2986 6.02251 11.3942C6.57789 10.4435 7.1451 9.48117 7.71229 8.53044C8.22041 7.67247 8.72851 6.8145 9.23663 5.94494C9.80382 4.99421 10.3592 4.03189 10.9264 3.08117C11.3872 2.29276 11.8481 1.51595 12.309 0.727546C12.3799 0.611604 12.4744 0.51885 12.6044 0.484067C12.6162 0.484067 12.6162 0.472473 12.628 0.472473C12.6871 0.472473 12.7462 0.472473 12.8052 0.472473C12.8171 0.484067 12.8407 0.484067 12.8525 0.495662C12.9589 0.530444 13.0298 0.600009 13.0888 0.692763C13.1006 0.715951 13.1243 0.73914 13.1361 0.773922C13.4552 1.31885 13.7742 1.85218 14.0933 2.39711C14.7195 3.47537 15.3576 4.54204 15.9839 5.6203C16.8938 7.16233 17.8037 8.71595 18.7135 10.258C19.5525 11.6841 20.4033 13.1217 21.2423 14.5478C21.8922 15.6609 22.5539 16.7739 23.2039 17.887C23.7829 18.8609 24.3619 19.8464 24.9291 20.8203C24.9527 20.8667 24.9882 20.9246 25 20.971C25 21.0522 25 21.1217 25 21.2029C24.9527 21.342 24.87 21.4348 24.74 21.4928C24.7282 21.5044 24.7164 21.5044 24.7046 21.516ZM12.7107 7.18552C11.9899 7.18552 11.2809 7.18552 10.5601 7.18552C10.5246 7.18552 10.501 7.18552 10.4655 7.18552C10.4183 7.18552 10.4065 7.2087 10.4065 7.25508C10.4065 7.26668 10.4065 7.27827 10.4065 7.28986C10.4183 7.4174 10.4183 7.55653 10.4301 7.69566C10.4419 7.8232 10.4537 7.95073 10.4537 8.07827C10.4656 8.19421 10.4656 8.31015 10.4774 8.43769C10.4892 8.64639 10.5128 8.84349 10.5246 9.05218C10.5364 9.26088 10.5483 9.48117 10.5601 9.68986C10.5601 9.78262 10.5719 9.87537 10.5837 9.96813C10.5955 10.0841 10.6074 10.2 10.6074 10.3275C10.6192 10.4551 10.6192 10.5826 10.631 10.7102C10.631 10.8029 10.6428 10.8957 10.6546 10.9884C10.6664 11.116 10.6783 11.2319 10.6783 11.3594C10.6901 11.4754 10.6901 11.6029 10.7019 11.7189C10.7019 11.8116 10.7137 11.9044 10.7255 11.9971C10.7373 12.1246 10.7492 12.2522 10.7492 12.3797C10.761 12.4957 10.761 12.6232 10.7728 12.7391C10.7728 12.8319 10.7846 12.9246 10.7964 13.0174C10.8082 13.1449 10.82 13.2725 10.82 13.4C10.8319 13.516 10.8319 13.6435 10.8437 13.7594C10.8437 13.8522 10.8555 13.9449 10.8673 14.0377C10.8791 14.1768 10.8909 14.316 10.8909 14.4551C10.9028 14.5594 10.9028 14.571 11.0091 14.571C12.1435 14.571 13.2661 14.571 14.4005 14.571C14.4241 14.571 14.4477 14.571 14.4714 14.571C14.5068 14.571 14.5186 14.5478 14.5305 14.5246C14.5305 14.5015 14.5305 14.4783 14.5423 14.4551C14.5541 14.3391 14.5541 14.2232 14.5659 14.0957C14.5777 13.9797 14.5777 13.8638 14.5895 13.7362C14.6014 13.6203 14.6014 13.5044 14.6132 13.4C14.625 13.2145 14.6368 13.0174 14.6604 12.8319C14.6723 12.6348 14.6841 12.4377 14.6959 12.229C14.6959 12.1362 14.7077 12.0551 14.7195 11.9623C14.7313 11.858 14.7314 11.742 14.7432 11.6377C14.755 11.5217 14.755 11.4058 14.7668 11.2783C14.7668 11.1855 14.7786 11.1044 14.7904 11.0116C14.8022 10.8957 14.8141 10.7797 14.8141 10.6522C14.8259 10.5362 14.8259 10.4203 14.8377 10.316C14.8495 10.2232 14.8495 10.142 14.8613 10.0493C14.8731 9.93334 14.8731 9.82899 14.885 9.71305C14.8968 9.59711 14.8968 9.48117 14.9086 9.36523C14.9086 9.28407 14.9204 9.20291 14.9322 9.11015C14.9441 8.99421 14.944 8.87827 14.9559 8.75073C14.9677 8.63479 14.9677 8.51885 14.9795 8.4145C14.9795 8.33334 14.9913 8.24059 15.0031 8.15943C15.015 8.04349 15.0149 7.92755 15.0268 7.8116C15.0386 7.67247 15.0504 7.54494 15.0504 7.40581C15.0504 7.34784 15.0622 7.30146 15.0622 7.24349C15.0622 7.2087 15.0504 7.18552 15.0031 7.18552C14.9677 7.18552 14.944 7.18552 14.9086 7.18552C14.1405 7.18552 13.4197 7.18552 12.7107 7.18552ZM12.7107 15.4406C12.0135 15.4406 11.3045 15.4406 10.6074 15.4406C10.5837 15.4406 10.5483 15.4406 10.5246 15.4406C10.4892 15.4406 10.4655 15.4638 10.4655 15.4986C10.4655 15.5333 10.4655 15.5565 10.4655 15.5913C10.4655 16.1594 10.4655 16.7275 10.4655 17.2957C10.4655 17.887 10.4655 18.4783 10.4655 19.058C10.4655 19.0928 10.4655 19.1275 10.4655 19.1507C10.4655 19.1855 10.4892 19.1971 10.5128 19.1971C10.5483 19.1971 10.5837 19.1971 10.6074 19.1971C11.8599 19.1971 13.1243 19.1971 14.3769 19.1971C14.5187 19.1971 14.6723 19.1971 14.8141 19.1971C14.8377 19.1971 14.8613 19.1971 14.885 19.1971C14.9086 19.1971 14.9322 19.1739 14.9322 19.1507C14.9322 19.1159 14.9322 19.0812 14.9322 19.058C14.9322 18.4319 14.9322 17.7942 14.9322 17.1681C14.9322 16.6464 14.9322 16.1131 14.9322 15.5913C14.9322 15.5565 14.9322 15.5333 14.9322 15.4986C14.9322 15.4638 14.9086 15.4406 14.8732 15.4406C14.8495 15.4406 14.8141 15.4406 14.7904 15.4406C14.1051 15.4406 13.4079 15.4406 12.7107 15.4406Z"
				fill="white"
			/>
		</svg>
	);
};

const StyledNavigation = styled("nav", {
	display: "grid",
	gridTemplateColumns: "1fr 1fr 1fr",
	margin: "12px 4vw 0",
});

const StyledLogo = styled("h1", {
	color: "white",
	fontSize: "2rem",
});

const StyledFlex = styled("span", {
	display: "flex",
	alignItems: "center",
});

const Navigation = () => {
	return (
		<StyledNavigation>
			<StyledFlex>
				<StyledLogo>basement</StyledLogo>
			</StyledFlex>
			<StyledFlex
				css={{
					justifyContent: "center",
					gap: 16,
				}}>
				<Circle />
				<HighDefinition />
				<Eye />
				<FourK />
				<Warning />
			</StyledFlex>
			<StyledFlex
				css={{
					justifyContent: "flex-end",
				}}>
				<button>Cart</button>
			</StyledFlex>
		</StyledNavigation>
	);
};

export default Navigation;
