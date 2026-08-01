export type PageId = 'home' | 'about' | 'services' | 'why-choose-us' | 'process' | 'faq' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  imageUrl: string;
  benefits: string[];
  processSteps: string[];
  suitableFor: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  serviceUsed: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'pricing' | 'packing' | 'insurance' | 'office' | 'villa' | 'furniture' | 'booking' | 'moving-day' | 'storage' | 'international' | 'general';
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  movingFrom: string;
  movingTo: string;
  propertyType: string;
  serviceRequired: string;
  preferredDate: string;
  needPacking: boolean;
  needStorage: boolean;
  needDisassembly: boolean;
  additionalNotes: string;
}

export interface EmirateInfo {
  name: string;
  tagline: string;
  popularAreas: string[];
  activeFleetCount: number;
}

export const COMPANY_CONTACT = {
  name: 'Best Route Relocation Services',
  phone: '+971 58 140 1608',
  phoneFormatted: '+971581401608',
  whatsapp: '+971 58 140 1608',
  whatsappLink: 'https://wa.me/971581401608?text=Hello%20Best%20Route%20Relocation%20Services%2C%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20my%20move.',
  email: 'adnansamiakhtars@gmail.com',
  workingHours: '24/7 Available across all UAE',
  coverageEmirates: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain'],
};
