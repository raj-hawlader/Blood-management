'use client';

import { useEffect, useState } from 'react';
import { DonorFormData } from '@/types/donor';
import { getDonors } from '@/services/supabase';

export default function PatientsView() {
  const [donors, setDonors] = useState<DonorFormData[]>([]);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState<string>('');
  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  useEffect(() => {
    fetchDonors();
  }, []);

  const fetchDonors = async () => {
    try {
      const { data, error } = await getDonors();
      if (error) {
        console.error('Error fetching donors:', error);
        return;
      }
      setDonors(data || []);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const filteredDonors = selectedBloodGroup
    ? donors.filter((donor) => donor.blood_group === selectedBloodGroup)
    : donors;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Available Blood Donors</h1>
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-700">Filter by Blood Group:</label>
            <select
              value={selectedBloodGroup}
              onChange={(e) => setSelectedBloodGroup(e.target.value)}
              className="mt-1 block w-48 rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            >
              <option value="">All Blood Groups</option>
              {bloodGroups.map((group) => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredDonors.map((donor, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200">
                  <div className="text-lg font-semibold text-red-600 mb-2">
                    {donor.blood_group}
                  </div>
                  <div className="text-sm text-gray-600">
                    <p className="mb-1">
                      <span className="font-medium">Contact:</span> {donor.contact_number}
                    </p>
                    <p>
                      <span className="font-medium">Last Donation:</span>{' '}
                      {new Date(donor.last_donation_date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 