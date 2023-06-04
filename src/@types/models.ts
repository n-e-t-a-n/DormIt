import { User } from "firebase/auth";

export type DormListing = {
  address: string;
  available_slots: string;
  description: string;
  dorm_name: string;
  price: string;
  user_id: string;
};

export type Dorm = {
  id: number;
  dormName: string;
  dormOwner?: string;
  location: string;
  image: string[] | string;
  description?: string;
  price?: string;
  contactInfo?: string;
};

export interface RoleResolverProps {
  user: User;
};

