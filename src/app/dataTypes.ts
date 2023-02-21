import React from "react";

export interface MenuCategory {
  id: number;
  name: string;
  items: [];
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  thumbnail?: string;
  tags?: string[]
  options?: []
}

export interface ExtraOptionsType {
  id: number;
  name: string;
  price: number;
  isChecked?: boolean
}

export interface ButtonType {
  name: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: string;
  price?: number | string;
  isLoading?: boolean;
}

export interface CartItem {
  item: MenuItem;
  extraOptions: [];
  quantity: number;
  extraInstructions?: string;
}