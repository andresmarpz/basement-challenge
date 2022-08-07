import { Product } from '@/product/types';
import create from 'zustand';

export interface ItemEntry {
	product: Product;
	quantity: number;
}
interface Store {
	/**
	 * The products in the cart.
	 * key: product id
	 * @type Map<string, ItemEntry>
	 */
	cartItems: {
		[key: string]: ItemEntry
	};
	open: boolean;
	setOpen: (open: boolean) => void;
	addToCart: (product: Product) => void;
	removeFromCart: (product: Product) => void;
	incrementQuantity: (product: Product) => void;
	decrementQuantity: (product: Product) => void;
}

export const useStore = create<Store>((set, get) => ({
	cartItems: {},
	open: false,
	setOpen: (open: boolean) => set({ open }),
	addToCart: (product: Product) => {
		const cartItems = get().cartItems;
		set({
			cartItems: {
				...cartItems, [product.id]: {
					product, quantity: (cartItems[product.id]?.quantity ?? 0) + 1
				}
			}
		})
	},
	removeFromCart: (product: Product) => {
		const cartItems = get().cartItems;
		const { [product.id]: _, ...rest } = cartItems;
		set({ cartItems: rest });
	},
	incrementQuantity: (product: Product) => {
		const cartItems = get().cartItems;
		set({
			cartItems: {
				...cartItems, [product.id]: {
					product, quantity: cartItems[product.id].quantity + 1
				}
			}
		})
	},
	decrementQuantity: (product: Product) => {
		const cartItems = get().cartItems;
		set({
			cartItems: {
				...cartItems, [product.id]: {
					product, quantity: cartItems[product.id].quantity - 1
				}
			}
		})
	}
}));