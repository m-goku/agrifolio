// types/profile.ts

export interface Value {
  id: number;
  title: string;
  content: string;
}

export interface Services {
  serviceId: number;
  serviceTitle: string;
  serviceDescription: string;
  serviceCategory: string;
  location: string;
  priceRange: string;
  availability: string;
  image: string;
}

export interface AboutUs {
  whoWeAre: string;
  whoWeAreImage: string;
  whatWeDo: string;
  whatWeDoImage: string;
  historyAndMission: string;
  historyAndMissionImage: string;
  values: string;
  valuesImage: string;
  ourTeam: string;
  ourTeamImage: string;
}

export interface BusinessProfile {
  logo: string;
  name: string;
  heroText: string;
  heroDescription: string;
  heroImage: string;
  keyServices: Value[];
  aboutUs?: AboutUs;
  services: Services[];
}

export interface ContactInformation {
  country: string;
  region: string;
  city: string;
  email: string;
  phone: string;
  address: string;
  serviceAreas: string[];
  workingHours: string;
  additionalInfo: string;
}

export interface GalleryItem {
  data: { url: string; publicId: string }[];
}

export interface Profile {
  businessProfile: BusinessProfile;
  contactInformation: ContactInformation;
  gallery: GalleryItem[];
}
