import axios from 'axios';
import authService from './auth.service';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface DonorFormData {
    bloodType: string;
    medicalConditions?: string;
    lastDonationDate?: string;
    phoneNumber: string;
    address: string;
}

export interface DonorForm extends DonorFormData {
    id: number;
    userId: number;
    submissionDate: string;
    isAvailable: boolean;
}

class DonorService {
    private getAuthHeader() {
        const token = authService.getToken();
        return {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
    }

    async submitDonorForm(data: DonorFormData) {
        const response = await axios.post(
            `${API_URL}/donor-forms`,
            data,
            this.getAuthHeader()
        );
        return response.data;
    }

    async getUserDonorForms(): Promise<DonorForm[]> {
        const response = await axios.get(
            `${API_URL}/donor-forms/user`,
            this.getAuthHeader()
        );
        return response.data;
    }
}

export default new DonorService(); 