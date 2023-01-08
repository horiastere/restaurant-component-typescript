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