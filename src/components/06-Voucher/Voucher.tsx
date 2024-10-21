import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

import Notify from "simple-notify";
import "simple-notify/dist/simple-notify.css";

import "./Voucher.css";

export default function Voucher() {
  const { t } = useTranslation("global");

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    street: "",
    place: "",
    zip: "",
    order: "",
    tel: "",
    email: "",
    phone: "",
    payment: "",
    message: "",
    dateTime: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="voucher">
      <div className="contactUs">
        <div className="contactUsHeader mt-5 w-full md:w-10/12 mx-auto">
          <h3>{t("nav.voucher")}</h3>
          <div className="breadCrumb">
            <span>Home</span>
            <FaChevronRight />
            <p>{t("nav.voucher")}</p>
          </div>
        </div>
      </div>
      <div className="relative my-6 enquiryTxt">
        <h2>{t("voucher.voucherHeader")} </h2>
        <p className="w-full md:w-7/12 ">{t("voucher.voucherContOne")}</p>
        <p className="w-full md:w-7/12 ">{t("voucher.voucherContTwo")}</p>
      </div>
      <div className="voucherContents">
        <div className="emailContactForm mt-5 w-full md:w-10/12 mx-auto">
          <form
            className="emailFormContxt w-full md:w-5/12 mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="relative my-6 enquiryTxt">
              <h2>{t("voucher.bookApt")} </h2>
              <p>{t("voucher.bookAptCont")}</p>
            </div>
            {/* CALENDAR - DATE TIME */}
            <div className="relative my-6">
              <input
                type="datetime-local"
                id="datetime"
                name="dateTime"
                value={formData.dateTime}
                onChange={handleChange}
                placeholder="First Name"
                className="relative w-full h-10 px-10 pl-12 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="id-11"
                className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-2 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                {t("voucher.date")}
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-2.5 left-3 h-5 w-5 stroke-slate-400 peer-disabled:cursor-not-allowed"
                fill="none"
                aria-hidden="true"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
                aria-labelledby="title-3 description-3"
                role="graphics-symbol"
              >
                <title id="title-3">Check mark icon</title>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
                />
              </svg>
            </div>
            <div className="row">
              {/* FIRST NAME */}
              <div className="relative w-full md:w-6/12 mx-auto">
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="relative w-full h-10 px-8 pl-12 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="fname"
                  className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-4 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-2 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  {t("voucher.firstName")}
                </label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-2.5 left-6 h-5 w-5 stroke-slate-400 peer-disabled:cursor-not-allowed"
                  fill="none"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                  aria-labelledby="title-3 description-3"
                  role="graphics-symbol"
                >
                  <title id="title-3">Check mark icon</title>
                  <desc id="description-3">icon description here</desc>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              {/* LAST NAME */}
              <div className="relative w-full md:w-6/12 mx-auto">
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="relative w-full h-10 px-8 pl-12 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="lname"
                  className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-4 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-2 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  {t("voucher.lastName")}
                </label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-2.5 left-6 h-5 w-5 stroke-slate-400 peer-disabled:cursor-not-allowed"
                  fill="none"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                  aria-labelledby="title-3 description-3"
                  role="graphics-symbol"
                >
                  <title id="title-3">Check mark icon</title>
                  <desc id="description-3">icon description here</desc>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
            {/* STREET */}
            <div className="relative my-6">
              <input
                type="text"
                id="street"
                name="street"
                value={formData.street}
                onChange={handleChange}
                placeholder="First Name"
                className="relative w-full h-10 px-10 pl-12 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="street"
                className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-2 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                {t("voucher.street")}
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-2.5 left-3 h-5 w-5 stroke-slate-400 peer-disabled:cursor-not-allowed"
                fill="none"
                aria-hidden="true"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
                aria-labelledby="title-3 description-3"
                role="graphics-symbol"
              >
                <title id="title-3">Check mark icon</title>
                <desc id="description-3">icon description here</desc>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>

            <div className="row">
              {/* ZIP */}
              <div className="relative w-full md:w-6/12 mx-auto">
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="relative w-full h-10 px-8 pl-12 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="zip"
                  className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-4 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-2 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  {t("voucher.zip")}
                </label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-2.5 left-6 h-5 w-5 stroke-slate-400 peer-disabled:cursor-not-allowed"
                  fill="none"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                  aria-labelledby="title-3 description-3"
                  role="graphics-symbol"
                >
                  <title id="title-3">Check mark icon</title>
                  <desc id="description-3">icon description here</desc>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>

              {/* PLACE */}
              <div className="relative w-full md:w-6/12 mx-auto">
                <input
                  type="text"
                  id="place"
                  name="place"
                  value={formData.place}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="relative w-full h-10 px-8 pl-12 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="place"
                  className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-4 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-2 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  {t("voucher.place")}
                </label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-2.5 left-6 h-5 w-5 stroke-slate-400 peer-disabled:cursor-not-allowed"
                  fill="none"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                  aria-labelledby="title-3 description-3"
                  role="graphics-symbol"
                >
                  <title id="title-3">Check mark icon</title>
                  <desc id="description-3">icon description here</desc>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>

            {/* NOTE TO ORDER */}
            <div className="relative my-6">
              <input
                type="order"
                id="order"
                name="order"
                value={formData.order}
                onChange={handleChange}
                placeholder="Note to order"
                className="relative w-full h-10 px-10 pl-12 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="order"
                className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-2 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                {t("voucher.notes")}
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-2.5 left-3 h-5 w-5 stroke-slate-400 peer-disabled:cursor-not-allowed"
                fill="none"
                aria-hidden="true"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
                aria-labelledby="title-3 description-3"
                role="graphics-symbol"
              >
                <title id="title-3">Check mark icon</title>
                <desc id="description-3">icon description here</desc>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>

            {/* TEL */}
            <div className="relative my-6">
              <input
                type="tel"
                id="tel"
                name="tel"
                value={formData.tel}
                onChange={handleChange}
                placeholder="Telephone"
                className="relative w-full h-10 px-10 pl-12 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="tel"
                className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-2 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                {t("voucher.tel")}
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-2.5 left-3 h-5 w-5 stroke-slate-400 peer-disabled:cursor-not-allowed"
                fill="none"
                aria-hidden="true"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
                aria-labelledby="title-3 description-3"
                role="graphics-symbol"
              >
                <title id="title-3">Check mark icon</title>
                <desc id="description-3">icon description here</desc>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>

            {/* EMAIL */}
            <div className="relative my-6">
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="relative w-full h-10 px-10 pl-12 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="email"
                className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-2 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                {t("voucher.email")}
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-2.5 left-3 h-5 w-5 stroke-slate-400 peer-disabled:cursor-not-allowed"
                fill="none"
                aria-hidden="true"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
                aria-labelledby="title-3 description-3"
                role="graphics-symbol"
              >
                <title id="title-3">Check mark icon</title>
                <desc id="description-3">icon description here</desc>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </div>

            {/* MOBILE */}
            <div className="relative my-6">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="your phone"
                className="relative w-full h-10 px-10 pl-12 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="phone"
                className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-2 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                {t("voucher.phone")}
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-2.5 left-3 h-5 w-5 stroke-slate-400 peer-disabled:cursor-not-allowed"
                fill="none"
                aria-hidden="true"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
                aria-labelledby="title-3 description-3"
                role="graphics-symbol"
              >
                <title id="title-3">Check mark icon</title>
                <desc id="description-3">icon description here</desc>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </div>

            {/* PAYMENT - DROP DOWN */}
            <div className="relative my-6">
              <select
                id="payment"
                name="payment"
                className="relative w-full h-10 px-10 pl-12 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              >
                <option value="" disabled selected hidden>
                  {t("voucher.payment")}
                </option>
                <option value="payment1">Twint: +41 76 426 34 44</option>
                <option value="payment2">
                  ebanking: CH11 0483 5175 1551 7100 0
                </option>
                <option value="payment3">Pre Payment</option>
              </select>
              <label
                htmlFor="payment"
                className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-2 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                {t("voucher.payment")}
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-2.5 left-3 h-5 w-5 stroke-slate-400 peer-disabled:cursor-not-allowed"
                fill="none"
                aria-hidden="true"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
                aria-labelledby="title-3 description-3"
                role="graphics-symbol"
              >
                <title id="title-3">Check mark icon</title>
                <desc id="description-3">icon description here</desc>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>

            <div className="relative my-6">
              <textarea
                id="textarea"
                name="textarea"
                placeholder="your phone"
                className="relative w-full h-28 px-10 pl-12 pt-2 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="textarea"
                className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-2 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                {t("voucher.message")}
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-2.5 left-3 h-5 w-5 stroke-slate-400 peer-disabled:cursor-not-allowed"
                fill="none"
                aria-hidden="true"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
                aria-labelledby="title-3 description-3"
                role="graphics-symbol"
              >
                <title id="title-3">Check mark icon</title>
                <desc id="description-3">icon description here</desc>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
            </div>

            <div
              className="relative my-6 sendBtn"
              onClick={() => {
                new Notify({
                  status: "success",
                  title: "Message Success",
                  text: "Message Sent Successfully !",
                  effect: "fade",
                  speed: 200,
                  customClass: "",
                  customIcon: "",
                  showIcon: true,
                  showCloseButton: true,
                  autoclose: true,
                  autotimeout: 1500,
                  type: "outline",
                  position: "right top",
                  customWrapper: "",
                });
              }}
            >
              <button className="messageBtn">{t("voucher.sendMsg")}</button>
            </div>
          </form>
          <div className="emailFormContxt w-full md:w-5/12 mx-auto">
            <form className="emailFormContxt" onSubmit={handleSubmit}>
              <div className="relative my-6 enquiryTxt">
                <h2>{t("voucher.noble")} </h2>
                <p></p>
              </div>
              {/* CALENDAR - DATE TIME */}
              <div className="relative my-6">
                <select
                  id="voucher"
                  name="voucher"
                  className="relative w-full h-10 px-10 pl-12 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                >
                  <option value="" disabled selected hidden>
                    {t("voucher.voucherValue")}
                  </option>
                  <option value="payment1">50</option>
                  <option value="payment2">100</option>
                  <option value="payment3">150</option>
                  <option value="payment4">200</option>
                </select>
                <label
                  htmlFor="voucher"
                  className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-2 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  {t("voucher.voucherValue")}
                </label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-2.5 left-3 h-5 w-5 stroke-slate-400 peer-disabled:cursor-not-allowed"
                  fill="none"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                  aria-labelledby="title-3 description-3"
                  role="graphics-symbol"
                >
                  <title id="title-3">Check mark icon</title>
                  <desc id="description-3">icon description here</desc>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              {/* FIRST NAME */}
              <div className="relative my-6">
                <input
                  type="text"
                  id="greeting"
                  name="greeting"
                  placeholder="First Name"
                  className="relative w-full h-10 px-8 pl-12 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="greeting"
                  className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-4 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-2 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  {t("voucher.personal")}
                </label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-2.5 left-4 h-5 w-5 stroke-slate-400 peer-disabled:cursor-not-allowed"
                  fill="none"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                  aria-labelledby="title-3 description-3"
                  role="graphics-symbol"
                >
                  <title id="title-3">Check mark icon</title>
                  <desc id="description-3">icon description here</desc>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
