export type WebsiteConfigProps = {
  // reviews?: [];
  name?: string;
  media?: {
    logo?: string;
    splash?: string[];
    cover?: string;
    gallery?: {
      url?: string;
      is_highlight?: boolean;
    }[];
  };
  social_links: {
    facebook?: string;
    google_plus?: string;
    instagram?: string;
    twitter?: string;
  };
  websiteUrl?: string;
  facilities?: {
    is_highlight: boolean;
    description: string;
    highlight_image: string;
    highlight_text: string;
    name: string;
    num: number;
    is_zero: boolean;
    gallery: string[];
    icon: string;
  }[];
  theme?: string;
  contact?: {
    phone?: string;
    email?: string;
  };
  rooms?: {
    id?: string;
    amenities?: [];
    gallery?: string[];
    name?: string;
    description?: string;
  }[];
  template?: {
    about_us_text?: string;
    about_us_image?: string;
  };
  address?: {
    city?: string;
    pin?: string;
    country?: string;
    line1?: string;
    currency?: string;
    state?: string;
    coords?: {
      lat?: string;
      long?: string;
    };
    location?: string;
    country_code?: string;
    timezone?: string;
    googleReviewLink?: string;
    shareLink?: string;
    currencySym?: string;
  };
  booking_engine?: string;
};
