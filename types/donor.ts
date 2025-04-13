export interface DonorFormData {
  id: number;
  name: string;
  email: string;
  contact_number: string;
  blood_group: string;
  last_donation_date: string;
  address?: string;
  city?: string;
  created_at?: string;
}

export type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'; 