export interface ServiceItem {
  title: string;
  description: string;
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  type: 'video' | 'image';
  thumbnail: string;
  mediaUrl: string;
  tags: string[];
}

export interface BrandBenefit {
  title: string;
  description: string;
  iconName: string;
}

export interface ProfileData {
  name: string;
  role: string;
  headline: string;
  subheadline: string;
  stats: Array<{ value: string; label: string }>;
  image: string;
  socials: {
    email: string;
    instagram: string;
    instagramHandle: string;
  };
}

export interface WhyMeData {
  benefits: BrandBenefit[];
  image: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}