import { keyframes, styled } from '@/stitches.config';

import { ItemEntry, useStore } from '@/state/Store';

import { Product } from '@/product/types';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import Box from '../commons/Box';
import Text from '../commons/Text';
import SizeSelector from './SizeSelector';
import QuantityControl from './QuantityControl';
import Flex from '../commons/Flex';

const overlayShow = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 1 }
});

const slideLeft = keyframes({
    '0%': {
        transform: 'translateX(350px)'
    },
    '100%': {
        transform: 'translateX(0)'
    }
});

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
        animation: `${overlayShow} 350ms cubic-bezier(0.16, 1, 0.3, 1)`
    }
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
        borderBottom: '1px solid $gray9'
    },
    '@media (prefers-reduced-motion: no-preference)': {
        animation: `${slideLeft} 350ms cubic-bezier(0.16, 1, 0.3, 1)`
    }
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

const ProductList = styled('div', {
    flexGrow: 1,
    padding: 16,
    overflowY: 'auto'
});

const ProductContainer = styled('div', {
    display: 'flex',
    gap: 16,
    height: 150,
    border: '1px solid $gray9',
    padding: 8,
    marginTop: 16,
    overflow: 'hidden',

    '@sm2': {
        height: 200
    }
});

const ProductEntry: React.FC<{
    item: ItemEntry;
}> = ({ item: { product, quantity } }) => {
    return (
        <ProductContainer>
            {/* Image span */}
            <Box
                as="span"
                css={{
                    aspectRatio: '1 / 1',
                    width: '30%',
                    height: '100%',
                    position: 'relative',
                    background: 'linear-gradient(180deg, black 0%, $gray12 100%)'
                }}>
                <Image src={product.image} alt={product.name} layout="fill" objectFit="contain" />
            </Box>
            {/* Information span */}
            <Box
                as="span"
                css={{
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    '@sm2': {
                        justifyContent: 'space-between'
                    }
                }}>
                {/* Upper section */}
                <Box>
                    <Text css={{ display: 'block', textTransform: 'uppercase', '@sm2': { fontSize: '1.6rem' } }}>
                        {product.name}
                    </Text>
                    <Text css={{ marginTop: 4, color: '$gray9' }}>{product.description}</Text>
                </Box>
                {/* Lower section */}
                <Box>
                    <Flex css={{ alignItems: 'center', fontSize: '0.75rem', '@sm2': { fontSize: '1rem' } }}>
                        QUANTITY: <QuantityControl product={product} quantity={quantity} />
                    </Flex>
                    <Flex
                        css={{
                            marginTop: 4,
                            gap: 8,
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap'
                        }}>
                        <Flex css={{ alignItems: 'center', fontSize: '0.75rem', '@sm2': { fontSize: '1rem' } }}>
                            SIZE: <SizeSelector option={product.options[0]} />
                        </Flex>
                        <Text css={{ fontSize: '1rem', '@sm2': { fontSize: '1.5rem' } }}>${product.price}</Text>
                    </Flex>
                </Box>
            </Box>
        </ProductContainer>
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
                    {/* First line, close button */}
                    <Box
                        css={{
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}>
                        <Close>→ CLOSE</Close>
                    </Box>
                    {/* Second line, YOUR CART */}
                    <Box
                        css={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: 16,
                            textAlign: 'center'
                        }}>
                        <Text size="5.5rem">YOUR </Text>
                        <Text size="5.5rem" fill={false}>
                            CART
                        </Text>
                    </Box>
                    {/* Third line, cart items */}
                    <ProductList>
                        {Object.keys(items).length ? (
                            Object.values(items).map((item) => (
                                <ProductEntry key={'cartcard' + item.product.id} item={item} />
                            ))
                        ) : (
                            <Box css={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
                                <Text size="3rem">IS</Text>
                                <Text size="3rem" fill={false}>
                                    EMPTY
                                </Text>
                            </Box>
                        )}
                    </ProductList>
                    {/* Fourth line, total & checkout button */}
                    <Box
                        css={{
                            display: 'flex',
                            flexDirection: 'column',
                            '@sm2': { borderTop: '1px solid $gray9', flexDirection: 'row' }
                        }}>
                        <Text
                            css={{
                                margin: 16,
                                paddingY: 16,
                                flexGrow: 1,
                                display: 'flex',
                                justifyContent: 'space-between',
                                borderBottom: '1px solid $gray9',
                                '@sm2': {
                                    padding: 16,
                                    margin: 0,
                                    borderRight: '1px solid $gray9',
                                    borderBottom: 0,
                                    gap: 16,
                                    justifyContent: 'initial'
                                }
                            }}
                            size="1.5rem">
                            TOTAL:
                            <span>
                                $
                                {Object.values(items).reduce(
                                    (total, item) => total + item.product.price * item.quantity,
                                    0
                                )}
                            </span>
                        </Text>
                        <Text
                            fill={false}
                            css={{
                                textAlign: 'center',
                                padding: 16,
                                fontSize: '3rem',
                                '@sm2': { fontSize: '1.5rem' }
                            }}>
                            CHECKOUT
                        </Text>
                    </Box>
                </Content>
            </Portal>
        </Root>
    );
};

export default Cart;
