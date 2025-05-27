import React, { useState } from "react";
import Image from "next/image";
import { Formik } from "formik";
import { useProfileStore } from "../context/store";
export default function AboutUsPage({
  divide,
  button,
  aboutData,
}: {
  divide?: boolean;
  button?: boolean;
  aboutData?: any;
}) {
  const [isOpen, setIsOpen] = useState<any>(null);
  const closeModal = () => setIsOpen(null);

  const { globalStore, setGlobalStore, setBusinessProfile } = useProfileStore();

  function ModalExample({ title, children }: { title: string; children: any }) {
    return (
      <div className="flex justify-center items-center bg-gray-100">
        {/* Modal Overlay */}

        <div className="fixed overflow-y-hidden inset-0 z-50 flex lg:items-center justify-center bg-black bg-opacity-40 h-screen">
          {/* Modal Content */}
          <div className="bg-white lg:rounded-lg shadow-md max-w-3xl w-full max-h-screen  lg:mx-4  lg:h-4/4">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b pb-2 p-6">
              <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <span className="absolute w-5 h-1 bg-gray-600 transform rotate-45"></span>
                  <span className="absolute w-5 h-1 bg-gray-600 transform -rotate-45"></span>
                </div>
              </button>
            </div>

            {/* Modal Body */}
            <main className="flex-1 py-6 overflow-y-auto  lg:max-h-[600px] h-full">
              {children}
            </main>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans text-gray-800">
      {/* PAGE HEADER */}
      <section className="text-center py-16 bg-gray-50">
        <h1 className="text-4xl font-bold">About Us</h1>
      </section>

      {/* WHO WE ARE MODAl */}
      {isOpen === "WhoWeAre" && (
        <ModalExample title="Who We Are">
          <>
            <Formik
              initialValues={{
                whoWeAre: aboutData.whoWeAre,
                whoWeAreImage: aboutData.whoWeAreImage,
              }}
              onSubmit={(values) => {
                closeModal();

                setBusinessProfile({
                  aboutUs: {
                    whoWeAre: values.whoWeAre,
                    whoWeAreImage: values.whoWeAreImage,
                    whatWeDo: aboutData.whatWeDo,
                    whatWeDoImage: aboutData.whatWeDoImage,
                    historyAndMission: aboutData.historyAndMission,
                    historyAndMissionImage: aboutData.historyAndMissionImage,
                    values: aboutData.values,
                    valuesImage: aboutData.valuesImage,
                    ourTeam: aboutData.ourTeam,
                    ourTeamImage: aboutData.ourTeamImage,
                  },
                });
              }}
            >
              {({ getFieldProps, handleSubmit }) => (
                <form onSubmit={handleSubmit} className="p-6">
                  {/* Who We Are */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      What is your business about?
                    </label>
                    <textarea
                      {...getFieldProps("whoWeAre")}
                      rows={6}
                      id="whoWeAre"
                      className="w-full border border-gray-300 rounded-md p-2"
                      placeholder="What is your business about?"
                    />
                  </div>
                  {/* Who We Are Image */}
                  <div>
                    <img
                      //onClick={}
                      src={aboutData.whoWeAreImage}
                      alt="Who We Are"
                      className="rounded-md shadow-sm"
                    />
                  </div>

                  {/* Submit Button */}

                  <div className="mt-20 flex justify-end space-x-2">
                    <button
                      onClick={closeModal}
                      className="px-4 py-2 bg-red-300 text-white rounded hover:bg-red-400"
                    >
                      Discard
                    </button>
                    <button
                      type="submit"
                      onClick={() => handleSubmit}
                      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                      Save
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </>
        </ModalExample>
      )}

      {/* WHAT WE DO */}
      {isOpen === "WhatWeDo" && (
        <ModalExample title="What We Do">
          <>
            <Formik
              initialValues={{
                whatWeDo: aboutData.whatWeDo,
                whatWeDoImage: aboutData.whatWeDoImage,
              }}
              onSubmit={(values) => {
                closeModal();

                setBusinessProfile({
                  aboutUs: {
                    whoWeAre: aboutData.whoWeAre,
                    whoWeAreImage: aboutData.whoWeAreImage,
                    whatWeDo: values.whatWeDo,
                    whatWeDoImage: values.whatWeDoImage,
                    historyAndMission: aboutData.historyAndMission,
                    historyAndMissionImage: aboutData.historyAndMissionImage,
                    values: aboutData.values,
                    valuesImage: aboutData.valuesImage,
                    ourTeam: aboutData.ourTeam,
                    ourTeamImage: aboutData.ourTeamImage,
                  },
                });
              }}
            >
              {({ getFieldProps, handleSubmit }) => (
                <form onSubmit={handleSubmit} className="p-6">
                  {/* What We  Do */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      What is your business about?
                    </label>
                    <textarea
                      {...getFieldProps("whatWeDo")}
                      rows={6}
                      id="whatWeDo"
                      className="w-full border border-gray-300 rounded-md p-2"
                      placeholder="What is your business about?"
                    />
                  </div>
                  {/* What We Do Image */}
                  <div>
                    <img
                      //onClick={}
                      src={aboutData.whatWeDoImage}
                      alt="What We Do"
                      className="rounded-md shadow-sm"
                    />
                  </div>

                  {/* Submit Button */}

                  <div className="mt-20 flex justify-end space-x-2">
                    <button
                      onClick={closeModal}
                      className="px-4 py-2 bg-red-300 text-white rounded hover:bg-red-400"
                    >
                      Discard
                    </button>
                    <button
                      type="submit"
                      onClick={() => handleSubmit}
                      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                      Save
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </>
        </ModalExample>
      )}

      {/* OUR HISTORY */}
      {isOpen === "History" && (
        <ModalExample title="Our History & Mission">
          <>
            <Formik
              initialValues={{
                history: aboutData.historyAndMission,
                historyImage: aboutData.historyAndMissionImage,
              }}
              onSubmit={(values) => {
                closeModal();

                setBusinessProfile({
                  aboutUs: {
                    whoWeAre: aboutData.whoWeAre,
                    whoWeAreImage: aboutData.whoWeAreImage,
                    whatWeDo: aboutData.whatWeDo,
                    whatWeDoImage: aboutData.whatWeDoImage,
                    historyAndMission: values.history,
                    historyAndMissionImage: values.historyImage,
                    values: aboutData.values,
                    valuesImage: aboutData.valuesImage,
                    ourTeam: aboutData.ourTeam,
                    ourTeamImage: aboutData.ourTeamImage,
                  },
                });
              }}
            >
              {({ getFieldProps, handleSubmit }) => (
                <form onSubmit={handleSubmit} className="p-6">
                  {/* Our History & Mission */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Whats the history behind your business?
                    </label>
                    <textarea
                      {...getFieldProps("history")}
                      rows={6}
                      id="history"
                      className="w-full border border-gray-300 rounded-md p-2"
                      placeholder="Whats the history behind your business?"
                    />
                  </div>
                  {/* Our History & Mission Image */}
                  <div>
                    <img
                      //onClick={}
                      src={aboutData.historyAndMissionImage}
                      alt="History & Mission"
                      className="rounded-md shadow-sm"
                    />
                  </div>

                  {/* Submit Button */}

                  <div className="mt-20 flex justify-end space-x-2">
                    <button
                      onClick={closeModal}
                      className="px-4 py-2 bg-red-300 text-white rounded hover:bg-red-400"
                    >
                      Discard
                    </button>
                    <button
                      type="submit"
                      onClick={() => handleSubmit}
                      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                      Save
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </>
        </ModalExample>
      )}

      {/* VALUES MODAL */}
      {isOpen === "Values" && (
        <ModalExample title="Our Values">
          <>
            <Formik
              initialValues={{
                values: aboutData.values,
                valuesImage: aboutData.valuesImage,
              }}
              onSubmit={(values) => {
                closeModal();
                setBusinessProfile({
                  aboutUs: {
                    whoWeAre: aboutData.whoWeAre,
                    whoWeAreImage: aboutData.whoWeAreImage,
                    whatWeDo: aboutData.whatWeDo,
                    whatWeDoImage: aboutData.whatWeDoImage,
                    historyAndMission: aboutData.historyAndMission,
                    historyAndMissionImage: aboutData.historyAndMissionImage,
                    values: values.values,
                    valuesImage: values.valuesImage,
                    ourTeam: aboutData.ourTeam,
                    ourTeamImage: aboutData.ourTeamImage,
                  },
                });
              }}
            >
              {({ getFieldProps, handleSubmit }) => (
                <form onSubmit={handleSubmit} className="p-6">
                  {/* Our Values */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      What are your core values as a business?
                    </label>
                    <textarea
                      {...getFieldProps("values")}
                      rows={6}
                      id="values"
                      className="w-full border border-gray-300 rounded-md p-2"
                      placeholder="What are your core values as a business?"
                    />
                  </div>
                  {/* Our Values Image */}
                  <div>
                    <img
                      //onClick={}
                      src={aboutData.valuesImage}
                      alt="Our Values"
                      className="rounded-md shadow-sm"
                    />
                  </div>

                  {/* Submit Button */}

                  <div className="mt-20 flex justify-end space-x-2">
                    <button
                      onClick={closeModal}
                      className="px-4 py-2 bg-red-300 text-white rounded hover:bg-red-400"
                    >
                      Discard
                    </button>
                    <button
                      type="submit"
                      onClick={() => handleSubmit}
                      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                      Save
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </>
        </ModalExample>
      )}

      {/* OUR TEAM MODAL */}
      {isOpen === "Team" && (
        <ModalExample title="Our Team">
          <>
            <Formik
              initialValues={{
                ourTeam: aboutData.ourTeam,
                ourTeamImage: aboutData.ourTeamImage,
              }}
              onSubmit={(values) => {
                closeModal();
                setBusinessProfile({
                  aboutUs: {
                    whoWeAre: aboutData.whoWeAre,
                    whoWeAreImage: aboutData.whoWeAreImage,
                    whatWeDo: aboutData.whatWeDo,
                    whatWeDoImage: aboutData.whatWeDoImage,
                    historyAndMission: aboutData.historyAndMission,
                    historyAndMissionImage: aboutData.historyAndMissionImage,
                    values: aboutData.values,
                    valuesImage: aboutData.valuesImage,
                    ourTeam: values.ourTeam,
                    ourTeamImage: values.ourTeamImage,
                  },
                });
              }}
            >
              {({ getFieldProps, handleSubmit }) => (
                <form onSubmit={handleSubmit} className="p-6">
                  {/* Sustainability Practices */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Talk about your team
                    </label>
                    <textarea
                      {...getFieldProps("sustainability")}
                      rows={6}
                      id="sustainability"
                      className="w-full border border-gray-300 rounded-md p-2"
                      placeholder=" Talk about your team"
                    />
                  </div>
                  {/* Sustainability Practices Image */}
                  <div>
                    <img
                      //onClick={}
                      src={aboutData.ourTeamImage}
                      alt="Our Team"
                      className="rounded-md shadow-sm"
                    />
                  </div>

                  {/* Submit Button */}

                  <div className="mt-20 flex justify-end space-x-2">
                    <button
                      onClick={closeModal}
                      className="px-4 py-2 bg-red-300 text-white rounded hover:bg-red-400"
                    >
                      Discard
                    </button>
                    <button
                      type="submit"
                      onClick={() => handleSubmit}
                      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                      Save
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </>
        </ModalExample>
      )}

      {divide && <div className="divider divider-neutral bg-slate-50 "></div>}

      {/* *********** WHO WE ARE ********* */}
      {button && (
        <div className="flex w-full justify-end px-4 ">
          <button
            onClick={() => setIsOpen("WhoWeAre")}
            type="submit"
            className="btn bg-white text-blue-500 px-4 py-2 rounded shadow-md transition-all"
          >
            Edit
          </button>
        </div>
      )}

      <section className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
            {aboutData.whoWeAre}
          </p>
        </div>
        <div>
          <img
            src={aboutData.whoWeAreImage}
            alt="Who We Are Image"
            className="rounded-md shadow-sm"
            height={400}
            width={600}
          />
        </div>
      </section>

      {divide && <div className="divider divider-neutral bg-slate-50 "></div>}

      {/*  ************* WHAT WE DO ************** */}
      {button && (
        <div className="flex w-full justify-end px-4 ">
          <button
            onClick={() => setIsOpen("WhatWeDo")}
            type="submit"
            className="btn bg-white text-blue-500 px-4 py-2 rounded shadow-md transition-all"
          >
            Edit
          </button>
        </div>
      )}

      <section className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <img
            src={aboutData.whatWeDoImage}
            alt="What We Do Image"
            className="rounded-md shadow-sm"
            height={400}
            width={600}
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-bold mb-4">What We Do</h2>
          <p className="text-gray-600 leading-relaxed">{aboutData.whatWeDo}</p>
        </div>
      </section>

      {divide && <div className="divider divider-neutral bg-slate-50 "></div>}

      {/*  ************* OUR HISTORY ************** */}
      {button && (
        <div className="flex w-full justify-end px-4 ">
          <button
            onClick={() => setIsOpen("History")}
            type="submit"
            className="btn bg-white text-blue-500 px-4 py-2 rounded shadow-md transition-all"
          >
            Edit
          </button>
        </div>
      )}

      <section className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our History & Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            {aboutData.historyAndMission}
          </p>
        </div>
        <div>
          <img
            src={aboutData.historyAndMissionImage}
            alt="history And Mission Image"
            className="rounded-md shadow-sm"
            height={400}
            width={600}
          />
        </div>
      </section>

      {divide && <div className="divider divider-neutral bg-slate-50 "></div>}

      {/*  ************* OUR VALUES ************** */}
      {button && (
        <div className="flex w-full justify-end px-4 ">
          <button
            onClick={() => setIsOpen("Values")}
            type="submit"
            className="btn bg-white text-blue-500 px-4 py-2 rounded shadow-md transition-all"
          >
            Edit
          </button>
        </div>
      )}

      <section className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <img
            src={aboutData.valuesImage}
            alt="Our Values Image"
            className="rounded-md shadow-sm"
            height={400}
            width={600}
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-gray-600 leading-relaxed">{aboutData.values}</p>
        </div>
      </section>

      {divide && <div className="divider divider-neutral bg-slate-50 "></div>}

      {/*  ************* OUR TEAM ************** */}
      {button && (
        <div className="flex w-full justify-end px-4 ">
          <button
            onClick={() => setIsOpen("Team")}
            type="submit"
            className="btn bg-white text-blue-500 px-4 py-2 rounded shadow-md transition-all"
          >
            Edit
          </button>
        </div>
      )}

      <section className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-600 leading-relaxed">{aboutData.ourTeam}</p>
        </div>
        <div>
          <img
            src={aboutData.ourTeamImage}
            alt="Our Team Image"
            className="rounded-md shadow-sm"
            height={400}
            width={600}
          />
        </div>
      </section>
    </div>
  );
}
