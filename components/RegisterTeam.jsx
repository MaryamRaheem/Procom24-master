"use client";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useFormik } from "formik";
import { registerSchema } from "@/app/schemas";

const initialValues = {
  teamName: "",
  instituteName: "",
  memberName: "",
  memberEmail: "",
  memberCnic: "",
  memberPhone: "",
};

const RegisterTeam = () => {
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: registerSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <div className="mx-32 my-32">
      <h1 className="text-white font-bold text-2xl md:text-4xl">
        Competition Registration
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-5 space-x-0 md:flex-row md:space-x-5 md:space-y-0 mt-10">
          <div className="relative w-full min-w-[200px] h-11">
            <div className="relative w-full min-w-[200px] h-11">
              <input
                type="text"
                name="teamName"
                value={values.teamName}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full h-full px-3 py-3 text-sm font-normal transition-all bg-transparent border rounded-md peer text-white outline outline-0 focus:outline-0 disabled:bg-white disabled:border-0 placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-blue-gray-200 focus:border-2 border-t-transparent focus:border-t-transparent border-blue-gray-200 focus:border-gray-900"
                placeholder=" "
              />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-white before:border-blue-gray-200 peer-focus:before:!border-white after:border-blue-gray-200 peer-focus:after:!border-white">
                Team Name
              </label>
            </div>
          </div>
          {errors.teamName && touched.teamName ? (
            <p>{errors.teamName}</p>
          ) : null}
          <div className="relative w-full min-w-[200px] h-11">
            <input
              type="text"
              value={values.instituteName}
              name="instituteName"
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full h-full px-3 py-3 text-sm font-normal transition-all bg-transparent border rounded-md peer text-white outline outline-0 focus:outline-0 disabled:bg-white disabled:border-0 placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-blue-gray-200 focus:border-2 border-t-transparent focus:border-t-transparent border-blue-gray-200 focus:border-gray-900"
              placeholder=" "
            />
            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-white before:border-blue-gray-200 peer-focus:before:!border-white after:border-blue-gray-200 peer-focus:after:!border-white">
              Institute Name
            </label>
          </div>

          {errors.instituteName && touched.instituteName ? (
            <p>{errors.instituteName}</p>
          ) : null}
        </div>
        <p className="mt-10">Members Details</p>
        <div className="flex flex-col space-y-5 space-x-0 md:flex-row md:space-x-5 md:space-y-0 mt-5">
          <div class="relative w-full min-w-[200px] h-11">
            <input
              type="text"
              value={values.memberName}
              name="memberName"
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full h-full px-3 py-3 text-sm font-normal transition-all bg-transparent border rounded-md peer text-white outline outline-0 focus:outline-0 disabled:bg-white disabled:border-0 placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-blue-gray-200 focus:border-2 border-t-transparent focus:border-t-transparent border-blue-gray-200 focus:border-gray-900"
              placeholder=" "
            />
            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-white before:border-blue-gray-200 peer-focus:before:!border-white after:border-blue-gray-200 peer-focus:after:!border-white">
              Member Name
            </label>
          </div>
          {errors.memberName && touched.memberName ? (
            <p>{errors.memberName}</p>
          ) : null}
          <div className="relative w-full min-w-[200px] h-11">
            <input
              type="email"
              value={values.memberEmail}
              name="memberEmail"
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full h-full px-3 py-3 text-sm font-normal transition-all bg-transparent border rounded-md peer text-white outline outline-0 focus:outline-0 disabled:bg-white disabled:border-0 placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-blue-gray-200 focus:border-2 border-t-transparent focus:border-t-transparent border-blue-gray-200 focus:border-gray-900"
              placeholder=" "
            />
            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-white before:border-blue-gray-200 peer-focus:before:!border-white after:border-blue-gray-200 peer-focus:after:!border-white">
              Member Email
            </label>
          </div>
          {errors.memberEmail && touched.memberEmail ? (
            <p>{errors.memberEmail}</p>
          ) : null}
        </div>
        <div className="flex flex-col space-y-5 space-x-0 md:flex-row md:space-x-5 md:space-y-0 mt-5">
          <div className="relative w-full min-w-[200px] h-11">
            <input
              type="text"
              value={values.memberCnic}
              name="memberCnic"
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full h-full px-3 py-3 text-sm font-normal transition-all bg-transparent border rounded-md peer text-white outline outline-0 focus:outline-0 disabled:bg-white disabled:border-0 placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-blue-gray-200 focus:border-2 border-t-transparent focus:border-t-transparent border-blue-gray-200 focus:border-gray-900"
              placeholder=" "
            />
            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-white before:border-blue-gray-200 peer-focus:before:!border-white after:border-blue-gray-200 peer-focus:after:!border-white">
              Member CNIC
            </label>
          </div>
          {errors.memberCnic && touched.memberCnic ? (
            <p>{errors.memberCnic}</p>
          ) : null}
          <div className="relative w-full min-w-[200px] h-11">
            <input
              type="phone"
              value={values.memberPhone}
              name="memberPhone"
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full h-full px-3 py-3 text-sm font-normal transition-all bg-transparent border rounded-md peer text-white outline outline-0 focus:outline-0 disabled:bg-white disabled:border-0 placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-blue-gray-200 focus:border-2 border-t-transparent focus:border-t-transparent border-blue-gray-200 focus:border-gray-900"
              placeholder=" "
            />
            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-white before:border-blue-gray-200 peer-focus:before:!border-white after:border-blue-gray-200 peer-focus:after:!border-white">
              Member Phone
            </label>
          </div>
          {errors.memberPhone && touched.memberPhone ? (
            <p>{errors.memberPhone}</p>
          ) : null}
        </div>
        <Button size="lg" type="submit" className="mt-10 bg-violet-500">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default RegisterTeam;
