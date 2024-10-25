import FormTabs from "./FormTabs";
import FormInputs from "./FormInputs";

const FormSection = ({ formType, setFormType, formik }: any) => {
  return (
    <div className="w-full lg:w-1/2 bg-slate-50 flex flex-col justify-center items-center p-6 lg:p-20">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Create an account
      </h2>

      {/* Form Tabs */}
      <FormTabs formType={formType} setFormType={setFormType} />

      {/* Form */}
      <form onSubmit={formik.handleSubmit} className="w-full max-w-md">
        <FormInputs formik={formik} formType={formType} />

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Next →
        </button>
      </form>

      {/* Existing User Link */}
      <p className="mt-6 text-sm text-center">
        Existing user?{" "}
        <a href="/auth/login" className="text-blue-500 underline">
          Sign in
        </a>
      </p>
    </div>
  );
};

export default FormSection;
