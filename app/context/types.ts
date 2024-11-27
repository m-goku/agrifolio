export interface BusinessProfile {
    logo: string;
    name: string;
    businessTypes: string[];
    businessTypesDetails: string;
    historyAndMission: string;
    values: string[];
    valuesDetails: string;
    sustainabilityPractices: string[];
    sustainabilityDetails: string;
    agriculturalExpertise: string[];
    expertiseDetails: string;
}

export interface ContactInformation {
    location: {
        country: string;
        region: string;
        city: string;
        address: string;
    };
    contact: {
        email: string;
        phone: string;
    };
    serviceAreas: string[];
}

export interface GalleryItem {
    url: string;
    publicId: string;
}

export interface State {
    businessProfile: BusinessProfile;
    contactInformation: ContactInformation;
    gallery: GalleryItem[];
}

export type Action =
    | { type: 'SET_BUSINESS_PROFILE'; payload: BusinessProfile }
    | { type: 'SET_CONTACT_INFORMATION'; payload: ContactInformation }
    | { type: 'SET_GALLERY'; payload: GalleryItem[] }
    | { type: 'RESET_STATE' }
    | any;
