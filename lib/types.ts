export type SiteSettings = {
  id: number;
  tagline: string;
  motto: string;
  vision: string;
  mission: string;
  key_scripture_text: string;
  key_scripture_ref: string;
  address: string;
  phone: string | null;
  email: string | null;
  service_times: { label: string; value: string }[];
  social_links: { platform: string; url: string }[];
};

export type Leader = {
  id: number;
  name: string;
  role_title: string;
  quote: string | null;
  bio: string;
  photo_url: string | null;
  hometown: string | null;
  education: string | null;
  ordination_info: string | null;
  attributes: string[];
  sort_order: number;
};

export type HistorySection = {
  id: number;
  heading: string;
  subheading: string | null;
  body: string;
  image_url: string | null;
  sort_order: number;
};

export type Program = {
  id: number;
  title: string;
  icon_name: string | null;
  description: string;
  tag_label: string | null;
  sort_order: number;
};

export type ChurchEvent = {
  id: number;
  title: string;
  slug: string;
  description: string;
  starts_at: string;
  location: string | null;
  image_url: string | null;
  is_featured: boolean;
  donation_enabled: boolean;
  created_at: string;
};

export type Organization = {
  id: number;
  slug: string;
  name: string;
  short_description: string;
  motto: string | null;
  theme_scripture_text: string | null;
  theme_scripture_ref: string | null;
  vision: string;
  mission: string;
  logo_url: string | null;
  hero_image_url: string | null;
  sort_order: number;
};

export type OrganizationSection = {
  id: number;
  organization_id: number;
  part: string;
  heading: string;
  scripture_text: string | null;
  scripture_ref: string | null;
  body: string;
  image_url: string | null;
  sort_order: number;
};

export type ContactMessage = {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
};
