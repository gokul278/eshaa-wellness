import { useTranslation } from "react-i18next";
import { useState } from "react";
import de from "../../assets/language/de.svg";
import en from "../../assets/language/en.svg";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo9.jpg";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("global");
  const [menuStatus, setMenuStatus] = useState(false);

  const currentLang = i18n.language;

  const languageIcon = currentLang === "en" ? de : en;

  const handleNavigation = (path: string) => {
    navigate(path);
    setMenuStatus(false);
  };
  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div className="w-full fixed top-0 left-0 z-50 bg-white">
        <div
          className={`w-full flex ${
            menuStatus ? "fixed z-50" : ""
          } justify-center items-center h-[80px] bg-white`}
        >
          <div className="w-[80%] h-[10vh] lg:w-[93%] flex justify-evenly items-center">
            <div className="w-[50%] lg:w-[30%] flex justify-start">
              <img src={logo} className="w-[250px]" alt="log" />
              {/* <h2 className="companyName mt-2">Eshaa Ayurveda</h2> */}
            </div>
            <div className="hidden lg:flex w-[90%] justify-center gap-x-10">
              <div
                className="text-[20px] cursor-pointer mt-2 font-semibold underline-animation"
                onClick={() => {
                  handleNavigation("/");
                }}
              >
                {t("nav.home")}
              </div>
              <div
                className="text-[20px] cursor-pointer  mt-2 font-semibold underline-animation"
                onClick={() => {
                  handleNavigation("/about");
                }}
              >
                {t("nav.about")}
              </div>
              <div
                className="text-[20px] cursor-pointer  mt-2 font-semibold underline-animation"
                onClick={() => {
                  handleNavigation("/treatments");
                }}
              >
                {t("nav.treatment")}
              </div>
              <div
                className="text-[20px] cursor-pointer  mt-2 font-semibold underline-animation"
                onClick={() => {
                  handleNavigation("/price");
                }}
              >
                {t("nav.price")}
              </div>
              <div
                className="text-[20px] cursor-pointer  mt-2 font-semibold underline-animation"
                onClick={() => {
                  handleNavigation("/appointments");
                }}
              >
                {t("nav.appointment")}
              </div>
              <div
                className="text-[20px] cursor-pointer  mt-2 font-semibold underline-animation"
                onClick={() => {
                  handleNavigation("/voucher");
                }}
              >
                {t("nav.voucher")}
              </div>
              <div
                className="text-[20px] cursor-pointer  mt-2 font-semibold underline-animation"
                onClick={() => {
                  handleNavigation("/gallery");
                }}
              >
                {t("nav.gallery")}
              </div>
              <div
                className="text-[20px] cursor-pointer  mt-2 font-semibold underline-animation"
                onClick={() => {
                  handleNavigation("/contact");
                }}
              >
                {t("nav.contact")}
              </div>
            </div>
            <div className="w-[50%] lg:w-[10%] flex justify-end">
              <p
                className=""
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.preventDefault();
                  const newLang = currentLang === "en" ? "de" : "en";
                  handleChangeLang(newLang);
                }}
              >
                <img
                  src={languageIcon}
                  alt="translate"
                  height={30}
                  width={30}
                />
              </p>{" "}
            </div>
            <div className="w-[0%] ml-14 flex lg:hidden justify-center items-center">
              <button
                className={`relative order-10 block self-center lg:hidden ${
                  menuStatus
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                    : ""
                }`}
                onClick={() => setMenuStatus(!menuStatus)}
                aria-expanded={menuStatus ? true : false}
                aria-label="Toggle navigation"
              >
                <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                  ></span>
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                  ></span>
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Fullscreen Menu for Mobile */}
        <div
          className={`w-full h-[90vh] overflow-y-auto z-50 mt-[10vh] fixed top-0 left-0 transition-all duration-500 ease-in-out bg-white           transform ${
            menuStatus
              ? "translate-x-0 opacity-100 visible"
              : "-translate-x-full opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col items-center justify-start h-full">
            <div className="w-[80%] mt-10">
              <div
                className="text-[20px] cursor-pointer py-3 font-semibold"
                onClick={() => {
                  handleNavigation("/");
                }}
              >
                {t("nav.home")}
              </div>
              <div
                className="text-[20px] cursor-pointer  py-3 font-semibold"
                onClick={() => {
                  handleNavigation("/about");
                }}
              >
                {t("nav.about")}
              </div>
              <div
                className="text-[20px] cursor-pointer  py-3 font-semibold"
                onClick={() => {
                  handleNavigation("/treatments");
                }}
              >
                {t("nav.treatment")}
              </div>
              <div
                className="text-[20px] cursor-pointer  py-3 font-semibold"
                onClick={() => {
                  handleNavigation("/price");
                }}
              >
                {t("nav.price")}
              </div>
              <div
                className="text-[20px] cursor-pointer  py-3 font-semibold"
                onClick={() => {
                  handleNavigation("/appointments");
                }}
              >
                {t("nav.appointment")}
              </div>
              <div
                className="text-[20px] cursor-pointer  py-3 font-semibold"
                onClick={() => {
                  handleNavigation("/voucher");
                }}
              >
                {t("nav.voucher")}
              </div>
              <div
                className="text-[20px] cursor-pointer  py-3 font-semibold"
                onClick={() => {
                  handleNavigation("/gallery");
                }}
              >
                {t("nav.gallery")}
              </div>
              <div
                className="text-[20px] cursor-pointer  py-3 font-semibold"
                onClick={() => {
                  handleNavigation("/contact");
                }}
              >
                {t("nav.contact")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
