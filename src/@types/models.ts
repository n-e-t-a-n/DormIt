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

export type UserDetail = {
  // Required
  email: string;
  first_name: string;
  last_name: string;
  gender: string;
  phone_number: number;
  emergency_contact: number | string;
  address: string;
  // Optional
  educational_institution?: string;
  max_budget?: number;
  rating?: number;
};
