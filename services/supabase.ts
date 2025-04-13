import { DonorFormData } from '@/types/donor';

// Initial fake data
const initialDonors = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    contact_number: "123-456-7890",
    blood_group: "O+",
    last_donation_date: "2024-02-15",
    created_at: "2024-02-15T10:00:00Z"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    contact_number: "098-765-4321",
    blood_group: "A+",
    last_donation_date: "2024-01-20",
    created_at: "2024-01-20T09:30:00Z"
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    contact_number: "555-555-5555",
    blood_group: "B-",
    last_donation_date: "2024-03-01",
    created_at: "2024-03-01T14:20:00Z"
  }
];

// Initialize localStorage with fake data if it doesn't exist
if (typeof window !== 'undefined' && !localStorage.getItem('donors')) {
  localStorage.setItem('donors', JSON.stringify(initialDonors));
}

export const getDonors = async () => {
  try {
    const donors = JSON.parse(localStorage.getItem('donors') || '[]');
    return { data: donors, error: null };
  } catch (error) {
    console.error('Error fetching donors:', error);
    return { data: [], error };
  }
};

export const saveDonorData = async (donorData: DonorFormData) => {
  try {
    // Get existing donors
    const existingDonors = JSON.parse(localStorage.getItem('donors') || '[]');
    
    const dbData = {
      id: Math.max(0, ...existingDonors.map((d: DonorFormData) => d.id)) + 1,
      name: donorData.name,
      email: donorData.email,
      contact_number: donorData.contact_number,
      blood_group: donorData.blood_group,
      last_donation_date: donorData.last_donation_date,
      created_at: new Date().toISOString()
    };
    
    // Add new donor at the beginning of the array
    const updatedDonors = [dbData, ...existingDonors];
    
    // Save back to localStorage
    localStorage.setItem('donors', JSON.stringify(updatedDonors));

    return { data: [dbData], error: null };
  } catch (error) {
    console.error('Error saving donor:', error);
    throw error;
  }
};

export const deleteDonor = async (id: number) => {
  try {
    // Get existing donors
    const existingDonors = JSON.parse(localStorage.getItem('donors') || '[]');
    
    // Filter out the donor with the given id
    const updatedDonors = existingDonors.filter((donor: DonorFormData) => donor.id !== id);
    
    // Save back to localStorage
    localStorage.setItem('donors', JSON.stringify(updatedDonors));

    return { error: null };
  } catch (error) {
    console.error('Error deleting donor:', error);
    return { error };
  }
}; 