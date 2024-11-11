import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState, ChangeEvent } from 'react';

interface Option {
  value: string;
  label: string;
}

interface FormValues {
  businessType: string[];
  history: string;
  values: string;
  sustainabilityPractices: string[];
  agriculturalExpertise: string[];
  country: string;
  region: string;
  city: string;
  email: string;
  businessNumber: string;
  phoneNumber: string;
  serviceAreas: string;
}

interface InputFieldProps {
  label: string;
  id: keyof FormValues;
  type?: 'text' | 'email' | 'tel';
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface MultiSelectProps {
  label: string;
  id: keyof FormValues;
  options: Option[];
  values: string[];
  onChange: (field: keyof FormValues, value: string) => void;
}

interface OptionalSectionProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
}

const AgribusinessForm = () => {
  // State for optional sections
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [showValues, setShowValues] = useState<boolean>(false);
  const [showSustainability, setShowSustainability] = useState<boolean>(false);
  const [showExpertise, setShowExpertise] = useState<boolean>(false);

  // Options for dropdowns
  const businessTypes: Option[] = [
    { value: 'farming', label: 'Farming' },
    { value: 'agriculture_supply', label: 'Agriculture Supply' },
    { value: 'agrichemicals', label: 'Agrichemicals' },
    { value: 'agriculture_technology', label: 'Agriculture Technology' },
    { value: 'livestock', label: 'Livestock' },
    { value: 'food_delivery', label: 'Food Delivery' },
    { value: 'food_processing', label: 'Food Processing' },
  ];

  const sustainabilityOptions: Option[] = [
    { value: 'water_management', label: 'Water Management' },
    { value: 'agroforestry', label: 'Agroforestry' },
    { value: 'cover_crop', label: 'Cover Crop' },
    { value: 'organic_farming', label: 'Organic Farming' },
  ];

  const expertiseOptions: Option[] = [
    { value: 'value_chain', label: 'Value Chain' },
    { value: 'problem_solving', label: 'Problem Solving' },
    { value: 'team_work', label: 'Team Work' },
    { value: 'time_management', label: 'Time Management' },
    { value: 'leadership', label: 'Leadership' },
    { value: 'adaptability', label: 'Adaptability' },
  ];

  const validationSchema = Yup.object({
    businessType: Yup.array().min(1, 'Select at least one business type'),
    history: Yup.string().when([], {
      is: () => showHistory,
      then: () => Yup.string().required('History is required when section is enabled'),
    }),
    values: Yup.string().when([], {
      is: () => showValues,
      then: () => Yup.string().required('Values are required when section is enabled'),
    }),
    sustainabilityPractices: Yup.array().when([], {
      is: () => showSustainability,
      then: () => Yup.array().min(1, 'Select at least one sustainability practice'),
    }),
    agriculturalExpertise: Yup.array().when([], {
      is: () => showExpertise,
      then: () => Yup.array().min(1, 'Select at least one expertise'),
    }),
    country: Yup.string().required('Country is required'),
    region: Yup.string().required('Region is required'),
    city: Yup.string().required('City is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    businessNumber: Yup.string().required('Business number is required'),
    phoneNumber: Yup.string()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(10, 'Must be at least 10 digits')
      .required('Phone number is required'),
    serviceAreas: Yup.string().required('Service areas are required'),
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      businessType: [],
      history: '',
      values: '',
      sustainabilityPractices: [],
      agriculturalExpertise: [],
      country: '',
      region: '',
      city: '',
      email: '',
      businessNumber: '',
      phoneNumber: '',
      serviceAreas: '',
    },
    validationSchema,
    onSubmit: (values: FormValues) => {
      console.log(values);
    },
  });

  const handleMultiSelect = (field: keyof FormValues, value: string) => {
    const currentValues = formik.values[field] as string[];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    formik.setFieldValue(field, newValues);
  };

  const InputField: React.FC<InputFieldProps> = ({ label, id, type = 'text', ...props }) => (
    <div className="form-control w-full">
      <label className="label" htmlFor={id}>
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="input input-bordered w-full"
        {...props}
      />
      {formik.touched[id] && formik.errors[id] && (
        <label className="label">
          <span className="label-text-alt text-error">{formik.errors[id] as string}</span>
        </label>
      )}
    </div>
  );

  const MultiSelect: React.FC<MultiSelectProps> = ({ label, id, options, values, onChange }) => (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="input input-bordered w-full text-left">
          {values.length > 0 
            ? values.map(v => options.find(opt => opt.value === v)?.label).join(', ')
            : 'Select options'}
        </div>
        <div tabIndex={0} className="dropdown-content z-[1] card card-compact shadow bg-base-100 w-full mt-1">
          <div className="card-body">
            {options.map((option) => (
              <label key={option.value} className="cursor-pointer label justify-start gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  checked={values.includes(option.value)}
                  onChange={() => onChange(id, option.value)}
                />
                <span className="label-text">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      {formik.touched[id] && formik.errors[id] && (
        <label className="label">
          <span className="label-text-alt text-error">{formik.errors[id] as string}</span>
        </label>
      )}
    </div>
  );

  const OptionalSection: React.FC<OptionalSectionProps> = ({ id, label, checked, onChange, children }) => (
    <div className="form-control">
      <label className="cursor-pointer label justify-start gap-2">
        <input
          type="checkbox"
          className="checkbox checkbox-primary"
          checked={checked}
          onChange={onChange}
        />
        <span className="label-text">{label}</span>
      </label>
      {checked && <div className="mt-2">{children}</div>}
    </div>
  );

  // Rest of the component remains the same...
  return (
    // ... existing JSX
  );
};

export default AgribusinessForm;