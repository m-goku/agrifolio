'use client'

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { State, Action } from './types';

// Safe check for browser environment
const isBrowser = typeof window !== 'undefined';

// Retrieve initial state from localStorage or use default
const getInitialState = (): State => {
    if (isBrowser) {
        const storedState = localStorage.getItem('businessState');
        if (storedState) {
            return JSON.parse(storedState);
        }
    }
    return {
        businessProfile: {
            logo: '',
            name: '',
            businessTypes: [],
            businessTypesDetails: '',
            historyAndMission: '',
            values: [],
            valuesDetails: '',
            sustainabilityPractices: [],
            sustainabilityDetails: '',
            agriculturalExpertise: [],
            expertiseDetails: '',
        },
        contactInformation: {
            location: {
                country: '',
                region: '',
                city: '',
                address: '',
            },
            contact: {
                email: '',
                phone: '',
            },
            serviceAreas: [],
        },
        gallery: [],
    };
};

// Reducer
const businessReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_BUSINESS_PROFILE':
            return { ...state, businessProfile: action.payload };
        case 'SET_CONTACT_INFORMATION':
            return { ...state, contactInformation: action.payload };
        case 'SET_GALLERY':
            return { ...state, gallery: action.payload };
        case 'RESET_STATE':
            return getInitialState(); // Reset to the default or stored state
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

// Context
interface BusinessContextProps {
    state: State;
    dispatch: React.Dispatch<Action>;
}

const BusinessContext = createContext<BusinessContextProps | undefined>(undefined);

// Provider
export const BusinessProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(businessReducer, getInitialState());

    // Persist state to localStorage whenever it changes
    useEffect(() => {
        if (isBrowser) {
            localStorage.setItem('businessState', JSON.stringify(state));
        }
    }, [state]);

    return (
        <BusinessContext.Provider value={{ state, dispatch }}>
            {children}
        </BusinessContext.Provider>
    );
};

// Custom Hook
export const useBusinessContext = (): BusinessContextProps => {
    const context = useContext(BusinessContext);
    if (!context) {
        throw new Error('useBusinessContext must be used within a BusinessProvider');
    }
    return context;
};
