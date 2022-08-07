import { keyframes, styled } from '@/stitches.config';

import { useStore } from '@/state/Store';

import { Product } from '@/product/types';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import Box from '../Box';
import Text from '../commons/Text';
import SizeSelector from './SizeSelector';
import QuantityControl from './QuantityControl';

const overlayShow = keyframes({
	'0%': { opacity: 0 },
	'100%': { opacity: 1 },
});

const contentShow = keyframes({
	'0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
	'100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const slideLeft = keyframes({
	'0%': {
		transform: 'translateX(350px)',
	},
	'100%': {
		transform: 'translateX(0)'
	}
})

const StyledTrigger = styled(Dialog.Trigger, {
	all: 'unset',

	display: 'flex',
	alignItems: 'center',

	lineHeight: 1,
	color: 'white',
	cursor: 'pointer',
	padding: '12px 24px',
	border: '2px solid white',
	borderRadius: 24
});

const StyledOverlay = styled(Dialog.Overlay, {
	all: 'unset',

	position: 'fixed',
	inset: 0,
	zIndex: 99,
	backgroundColor: 'rgba(0, 0, 0, 0.5)',
	'@media (prefers-reduced-motion: no-preference)': {
		animation: `${overlayShow} 350ms cubic-bezier(0.16, 1, 0.3, 1)`,
	},
});
const StyledContent = styled(Dialog.Content, {
	display: 'flex',
	flexDirection: 'column',

	color: 'white',
	backgroundColor: 'black',
	width: '100%',
	height: '100%',
	position: 'fixed',
	top: 0,
	right: 0,
	zIndex: 100,

	'@sm2': {
		width: 600,
		height: '60%',
		borderLeft: '1px solid $gray9',
		borderBottom: '1px solid $gray9',
	},
	'@media (prefers-reduced-motion: no-preference)': {
		animation: `${slideLeft} 350ms cubic-bezier(0.16, 1, 0.3, 1)`,
	},
});

const StyledClose = styled(Dialog.Close, {
	all: 'unset',

	cursor: 'pointer',
	color: 'white',
	margin: 12,
	padding: '6px 10px'
});

const StyledCheckout = styled('button', {
	all: 'unset',

	cursor: 'pointer',
	width: '100%',
	height: '100%',
	textAlign: 'center',
	flexBasis: '33%'
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
				display: 'flex',
				border: '1px solid $gray8',
				padding: 10,
				width: '100%',
				minWidth: 300,
				height: 200,
				overflow: 'hidden',
			}}>
			<Box
				css={{
					aspectRatio: '1 / 1',
					position: 'relative',
					height: '100%',
					width: '30%',
					background: 'linear-gradient(180deg, black 0%, $gray12 100%)',

					'@sm2': {
						minWidth: 200,
					}
				}}>
				<Image src={product.image} alt={`${product.name}`} objectFit="contain" layout="fill" />
			</Box>
			<Box
				css={{
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					marginLeft: 12
				}}>
				<Box>
					<Text
						css={{
							fontSize: '1.5rem',
							textTransform: 'uppercase'
						}}>
						{product.name}
					</Text>
					<br />
					<Text
						css={{
							marginTop: 4,
							color: '$gray10'
						}}>
						{product.description}
					</Text>
				</Box>
				<Box>
					<Box css={{
						display: 'flex',
						alignItems: 'center',
						paddingY: 6
					}}>QUANTITY: <QuantityControl product={product} quantity={quantity} /></Box>
					<Box
						css={{
							display: 'flex',
							flexDirection: 'column',
							gap: 12,

							'@sm2': {
								flexDirection: 'row',
								justifyContent: 'space-between',
							}
						}}>
						<Box css={{
							display: 'flex',
							alignItems: 'center',
						}}>SIZE: <SizeSelector /></Box>
						<Text css={{
							fontSize: '1.5rem',
						}}>${product.price}</Text>
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
							display: 'flex',
							justifyContent: 'flex-end'
						}}>
						<Close>→ CLOSE</Close>
					</Box>
					<Box
						css={{
							textAlign: 'center'
						}}>
						<Text
							css={{
								fontSize: '5rem'
							}}>
							YOUR
						</Text>
						<Text
							css={{
								fontSize: '5rem',
								marginLeft: 16
							}}
							fill={false}>
							CART
						</Text>
					</Box>
					<Box
						css={{
							padding: 16,
							display: 'flex',
							flexDirection: 'column',
							gap: 16,
							flexGrow: 1,
							overflowY: 'scroll'
						}}>
						{Object.keys(items).length ? (
							Object.values(items).map(({ product, quantity }) => (
								<ProductEntry product={product} quantity={quantity} key={product.id} />
							))
						) : (
							<Box
								css={{
									textAlign: 'center'
								}}>
								<Text
									css={{
										fontSize: '3rem'
									}}>
									IS
								</Text>
								<Text
									fill={false}
									css={{
										marginLeft: 16,
										fontSize: '3rem'
									}}>
									EMPTY
								</Text>
							</Box>
						)}
					</Box>
					<Box
						css={{
							display: 'flex',
							flexDirection: 'column',

							'@sm2': {
								flexDirection: 'row',
								borderTop: '1px solid $gray9'
							}
						}}>
						<Box css={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',

							marginX: 16,
							flexBasis: '66%',
							borderBottom: '1px solid white',
							"@sm2": {
								borderRight: '1px solid $gray9',
								justifyContent: 'initial',
								borderBottom: 'none'
							}
						}}>
							<Text
								css={{
									fontSize: '2rem',

									'@sm2': {
										padding: 16,
									}
								}}>
								TOTAL:
							</Text>
							<Text css={{
								padding: 16,
								fontSize: '2rem',
							}}>
								${Object.values(items).reduce((total, item) => total + item.product.price * item.quantity, 0)}
							</Text>
						</Box>
						<StyledCheckout>
							<Text
								css={{
									fontSize: '12vw',
									padding: 16,

									'@sm2': {
										fontSize: '2rem'
									}
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
