"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import type { Product } from "@/app/models/interfaces";

type CartContextType = {
  cart: Product[];
  addToCart: (p: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);
  const [loaded, setLoaded] = useState(false); 

  
  useEffect(() => {
    try {
      const raw = localStorage.getItem("deisi_cart");
      if (raw) {
        const parsed: Product[] = JSON.parse(raw);
        if (Array.isArray(parsed)) setCart(parsed);
      }
    } catch (e) {
      console.error("Erro ao ler cart do localStorage", e);
    } finally {
      setLoaded(true);
    }
  }, []);

 
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem("deisi_cart", JSON.stringify(cart));
    } catch (e) {
      console.error("Erro ao gravar cart no localStorage", e);
    }
  }, [cart, loaded]);

  const addToCart = (p: Product) => {
   
    setCart(prev => {
      const exists = prev.find(item => item.id === p.id);
      if (exists) return prev; 
      return [...prev, p];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((s, p) => s + Number(p.price || 0), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
