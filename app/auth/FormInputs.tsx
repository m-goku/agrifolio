const FormInputs = ({ formik, formType }: any) => {
  return (
    <>
      {formType === "personal" ? (
        <>
          {/* Personal Form Inputs */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...formik.getFieldProps("email")}
              className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:ring-blue-500 focus:border-blue-500`}
              placeholder="name@example.com"
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            ) : null}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...formik.getFieldProps("password")}
              className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:ring-blue-500 focus:border-blue-500`}
              placeholder="Create your password"
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            ) : null}
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...formik.getFieldProps("confirmPassword")}
              className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm ${
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:ring-blue-500 focus:border-blue-500`}
              placeholder="Confirm your password"
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <p className="text-red-500 text-sm">
                {formik.errors.confirmPassword}
              </p>
            ) : null}
          </div>
        </>
      ) : (
        <>
          {/* Business Form Inputs */}
          <div className="mb-4">
            <label
              htmlFor="businessName"
              className="block text-sm font-medium text-gray-700"
            >
              Business Name
            </label>
            <input
              type="text"
              id="businessName"
              {...formik.getFieldProps("businessName")}
              className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm ${
                formik.touched.businessName && formik.errors.businessName
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:ring-blue-500 focus:border-blue-500`}
              placeholder="Your business name"
            />
            {formik.touched.businessName && formik.errors.businessName ? (
              <p className="text-red-500 text-sm">
                {formik.errors.businessName}
              </p>
            ) : null}
          </div>

          <div className="mb-4">
            <label
              htmlFor="businessEmail"
              className="block text-sm font-medium text-gray-700"
            >
              Business Email
            </label>
            <input
              type="email"
              id="businessEmail"
              {...formik.getFieldProps("businessEmail")}
              className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm ${
                formik.touched.businessEmail && formik.errors.businessEmail
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:ring-blue-500 focus:border-blue-500`}
              placeholder="business@example.com"
            />
            {formik.touched.businessEmail && formik.errors.businessEmail ? (
              <p className="text-red-500 text-sm">
                {formik.errors.businessEmail}
              </p>
            ) : null}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...formik.getFieldProps("password")}
              className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:ring-blue-500 focus:border-blue-500`}
              placeholder="Create your password"
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            ) : null}
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...formik.getFieldProps("confirmPassword")}
              className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm ${
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:ring-blue-500 focus:border-blue-500`}
              placeholder="Confirm your password"
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <p className="text-red-500 text-sm">
                {formik.errors.confirmPassword}
              </p>
            ) : null}
          </div>
        </>
      )}
    </>
  );
};

export default FormInputs;
