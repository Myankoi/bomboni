"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/data/products";

export interface CartItem {
    product: Product;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    isOpen: boolean;
    isCheckoutOpen: boolean;

    // Actions
    addItem: (product: Product) => void;
    addItemWithQuantity: (product: Product, quantity: number) => void;
    removeItem: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    toggleCart: () => void;
    openCart: () => void;
    closeCart: () => void;
    openCheckout: () => void;
    closeCheckout: () => void;

    // Computed
    totalItems: () => number;
    subtotal: () => number;
}

export const useCart = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            isOpen: false,
            isCheckoutOpen: false,

            addItem: (product: Product) => {
                const items = get().items;
                const existingItem = items.find((item) => item.product.id === product.id);

                if (existingItem) {
                    set({
                        items: items.map((item) =>
                            item.product.id === product.id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        ),
                    });
                } else {
                    set({ items: [...items, { product, quantity: 1 }] });
                }
            },

            addItemWithQuantity: (product: Product, quantity: number) => {
                const items = get().items;
                const existingItem = items.find((item) => item.product.id === product.id);

                if (existingItem) {
                    set({
                        items: items.map((item) =>
                            item.product.id === product.id
                                ? { ...item, quantity: item.quantity + quantity }
                                : item
                        ),
                    });
                } else {
                    set({ items: [...items, { product, quantity }] });
                }
            },

            removeItem: (productId: string) => {
                set({ items: get().items.filter((item) => item.product.id !== productId) });
            },

            updateQuantity: (productId: string, quantity: number) => {
                if (quantity <= 0) {
                    get().removeItem(productId);
                    return;
                }
                set({
                    items: get().items.map((item) =>
                        item.product.id === productId ? { ...item, quantity } : item
                    ),
                });
            },

            clearCart: () => set({ items: [] }),
            toggleCart: () => set({ isOpen: !get().isOpen }),
            openCart: () => set({ isOpen: true }),
            closeCart: () => set({ isOpen: false }),
            openCheckout: () => set({ isCheckoutOpen: true, isOpen: false }),
            closeCheckout: () => set({ isCheckoutOpen: false }),

            totalItems: () => get().items.reduce((acc, item) => acc + item.quantity, 0),
            subtotal: () =>
                get().items.reduce(
                    (acc, item) => acc + item.product.price * item.quantity,
                    0
                ),
        }),
        {
            name: "bomboni-cart",
            partialize: (state) => ({ items: state.items }),
        }
    )
);
