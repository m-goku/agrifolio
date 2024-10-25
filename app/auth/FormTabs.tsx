const FormTabs = ({
  formType,
  setFormType,
}: {
  formType: string;
  setFormType: any;
}) => {
  return (
    <div className="flex justify-center mb-6 space-x-4">
      <button
        onClick={() => setFormType("personal")}
        className={`px-4 py-2 ${
          formType === "personal"
            ? "border-b-2 border-blue-500 text-blue-500"
            : "text-gray-500"
        }`}
      >
        Personal
      </button>
      <button
        onClick={() => setFormType("business")}
        className={`px-4 py-2 ${
          formType === "business"
            ? "border-b-2 border-blue-500 text-blue-500"
            : "text-gray-500"
        }`}
      >
        Business
      </button>
    </div>
  );
};

export default FormTabs;
