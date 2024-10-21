import { useTranslation } from "react-i18next";

import massage from "../../assets/home/massage.png";
import specialBath from "../../assets/home/bath.png";
import facial from "../../assets/home/facial.png";
import hydro from "../../assets/home/hydro.png";
import group from "../../assets/home/group.png";

import TreatmentCard from "../../pages/TreatmentCard";
import "./Home.css";
import homeBg from "../../assets/home/homeIntro.png";
import pricelist from "../../assets/home/pricelist.png";
import logo from "../../assets/logo/logo8.jpg";

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

// import pointer from "../../assets/contact/ayurveda.svg";

interface Treatment {
  image: string;
  title: string;
}

interface TreatmentList {
  name: string;
  duration: string;
  price: string;
}

export default function Home() {
  const { t } = useTranslation("global");
  const treatments: Treatment[] = [
    { image: massage, title: t("home.treatment1") },
    { image: specialBath, title: t("home.treatment2") },
    { image: facial, title: t("home.treatment3") },
    { image: hydro, title: t("home.treatment4") },
    { image: group, title: t("home.treatment5") },
    // { image: reflxology, title: "Reflexology" },
  ];

  const treatmentData: TreatmentList[] = [
    {
      name: t("services.serv1Header"),
      duration: t("services.serv1Duration"),
      price: t("services.serv1Price"),
    },
    {
      name: t("services.serv2Header"),
      duration: t("services.serv2Duration"),
      price: t("services.serv2Price"),
    },
    {
      name: t("services.serv3Header"),
      duration: t("services.serv3Duration"),
      price: t("services.serv3Price"),
    },
    {
      name: t("services.serv4Header"),
      duration: t("services.serv4Duration"),
      price: t("services.serv4Price"),
    },
    {
      name: t("services.serv5Header"),
      duration: t("services.serv5Duration"),
      price: t("services.serv5Price"),
    },
    {
      name: t("services.serv6Header"),
      duration: t("services.serv6Duration"),
      price: t("services.serv6Price"),
    },
  ];

  return (
    <div>
      <div className="homePageContents">
        <div className="homePageWelcomeCont col-lg-7 md-12">
          <div className="text-xl font-bold mb-4 flex justify-center">
            <img className="w-[250px]" src={logo} alt="logo" />
          </div>
          <p className="text-lg mb-4"> {t("home.head1")}</p>
          <h2 className="text-4xl font-bold text-green-600 mb-4">
            Eshaa Wellness
          </h2>
          <h3 className="text-2xl mt-4 font-medium text-gray-700">
            {t("home.headQuote1")}
          </h3>
          <button>{t("home.bookApp")}</button>
        </div>
      </div>
      <div className="treatments">
        <div className="homeTreatments mt-12 col-lg-10">
          <h3 className="text-3xl font-bold text-center mb-8">
            {t("home.exploreTreatment")}
          </h3>
          <div className="grid grid-cols-1 mainCardGrids md:grid-cols-2 lg:grid-cols-5 gap-2 justify-items-center">
            {treatments.map((treatment, index) => (
              <TreatmentCard
                key={index}
                image={treatment.image}
                title={treatment.title}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="homeWelcomeContents row pb-5">
        <div className="homeContOne col-lg-5 col-md-10">
          <div className="welcomeEshaa">
            <h3>{t("home.welcomeHeader")} </h3>
            <p style={{ textIndent: "2em" }}>{t("home.welcomeHeaderCont")}</p>
          </div>
          <img style={{}} className="mt-3 mb-3 homeContOneImg" src={homeBg} />
        </div>
        <div className="homeContTwo col-lg-5 col-md-10">
          <img style={{}} className="mt-3 mb-3 homeContTwoImg" src={homeBg} />

          <div className="aboutEshaa">
            <h3>{t("home.aboutHeader")}</h3>
            <p style={{ textIndent: "2em" }}>{t("home.aboutContOne")}</p>
            <p style={{ textIndent: "2em" }}>{t("home.aboutContTwo")}</p>
            <p>
              <strong>{t("home.aboutContTitle1")} </strong>
              {t("home.abouCont1")}
            </p>
            <p>
              <strong>{t("home.aboutContTitle2")} </strong>
              {t("home.aboutCont2")}
            </p>
            <p>
              <strong>{t("home.aboutContTitle3")} </strong>
              {t("home.aboutCont3")}
            </p>
            <p>
              <strong>{t("home.aboutContTitle4")} </strong>
              {t("home.aboutCont4")}
            </p>
          </div>
        </div>
      </div>

      <div className="divider w-full md:w-8/12 mx-auto"></div>
      <div className="ourTreatments ">
        <h2>{t("home.ourTreatments")}</h2>
        <p className="w-full">{t("home.treatmentConts")}</p>
        <div className="treatmentOne p-28 flex justify-center items-start  treatments">
          <h3 className="text-[30px] lg:text-[50px]">
            {t("home.treatmentOne")}
          </h3>
          <div className="w-[100%]">
            <p>{t("home.treatmentOneCont")}</p>
          </div>
        </div>

        <div className="treatmentTwo p-28 flex justify-center items-start  treatments">
          <h3 className="text-[30px] lg:text-[50px]">
            {t("home.treatmentTwo")}
          </h3>
          <div className="w-[100%]">
            <p>{t("home.treatmentTwoCont")}</p>
          </div>
        </div>

        <div className="treatmentThree p-28 flex justify-center items-start  treatments">
          <h3 className="text-[30px] lg:text-[50px]">
            {t("home.treatmentThree")}
          </h3>
          <div className="w-[100%]">
            <p>{t("home.treatmentThreeCont")}</p>
          </div>
        </div>

        {/* <div className="treatmentThree p-28 flex justify-center items-start  treatments">
          <h3 className="text-[30px] lg:text-[50px]">
            {t("home.treatmentThree")}
          </h3>
          <div className="w-[100%]">
            <p>{t("home.treatmentThreeCont")}</p>
          </div>
        </div>
         */}
      </div>

      <div className="galleryPreview w-full md:w-10/12 mx-auto">
        <h2>Gallery</h2>
        <h5>For your Ayurveda course program and your health</h5>
        <p>
          {" "}
          ABHYANGA &nbsp;&nbsp; / &nbsp;&nbsp; PRISTHABYANGA &nbsp;&nbsp; /
          &nbsp;&nbsp; PINDASVEDA &nbsp;&nbsp; / &nbsp;&nbsp;SAMPLE &nbsp;&nbsp;
          / &nbsp;&nbsp;SHIRO VASTHI
        </p>
        <ShuffleGrid />
      </div>

      <div className="divider w-full md:w-8/12 mx-auto"></div>

      <div className="priceList">
        <h4>{t("services.header")}</h4>
        <h2>{t("services.serviceQuote")} </h2>
        <div className="emailContactForm mt-5 w-full md:w-10/12 mx-auto">
          <div className="emailFormContxt w-full md:w-5/12 mx-auto">
            <img
              src={pricelist}
              alt="#"
              className="h-[400px] w-[100%] lg:h-[80%] lg:w-[100%] mt-2"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="emailFormContxt mt-5 w-full md:w-6/12 mx-auto">
            <div className="treatmentList">
              {treatmentData.map((treatment, index) => (
                <React.Fragment key={index}>
                  <div className="treatmentContents">
                    <div className="treatContOne">
                      <h3>{treatment.name}</h3>
                      <h5>{treatment.duration}</h5>
                    </div>
                    <div className="treatContTwo">
                      <div className="horizontalDivider me-5"></div>
                      <h5>{treatment.price}</h5>
                    </div>
                  </div>
                  <div className="dividers w-full md:w-12/12 mx-auto"></div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT FORM */}
      <div className="emailContactForm mt-5 w-full md:w-10/12 mx-auto">
        <div className="emailFormContxt w-full md:w-5/12 mx-auto">
          <div className="relative my-6 enquiryTxt">
            <h2>{t("contact.formHeader")} </h2>
            <p>{t("contact.formQuote")}</p>
          </div>
          <div className="relative my-6">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="First Name"
              className="relative w-full h-10 px-10 pl-12 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="name"
              className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-2 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              {t("contact.name")}
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
          <div className="relative my-6">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              className="relative w-full h-10 px-10 pl-12 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="email"
              className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-2 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              {t("contact.emailUr")}
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
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <div className="relative my-6">
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="your phone"
              className="relative w-full h-10 px-10 pl-12 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="phone"
              className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-2 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              {t("contact.mobile")}
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
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
          </div>
          <div className="relative my-6">
            <textarea
              id="message"
              name="message"
              placeholder="your phone"
              className="relative w-full h-28 px-10 pt-2 pl-12 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="message"
              className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-2 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              {t("contact.comment")}
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
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
          </div>
          <div className="relative my-6 sendBtn">
            <button className="messageBtn">{t("contact.send")}</button>
          </div>
        </div>
        <div className="emailFormContxt w-full md:w-5/12 mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11005.563681434174!2d8.51296182084741!3d47.37031708870288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a1846221b1b%3A0xebb6caa1a55e4987!2sMeerhaa%20Ayurveda%20Gesundheitspraxis!5e1!3m2!1sen!2sin!4v1728620904904!5m2!1sen!2sin"
            width="100%"
            className="h-[300px] lg:h-[90%] mt-4"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "http://meerhaaayurveda.ch/uploads/common/202205041649177533624c73bd04e8f.jpg",
  },
  {
    id: 2,
    src: "http://meerhaaayurveda.ch/uploads/common/202205041649177575624c73e7eefd7.jpg",
  },
  {
    id: 3,
    src: "http://meerhaaayurveda.ch/uploads/common/202205041649177599624c73ff81107.jpg",
  },
  {
    id: 4,
    src: "http://meerhaaayurveda.ch/uploads/common/202205041649177620624c7414df207.jpg",
  },
  {
    id: 5,
    src: "http://meerhaaayurveda.ch/uploads/common/202205041649177638624c7426b2f4e.jpg",
  },
  {
    id: 6,
    src: "http://meerhaaayurveda.ch/uploads/common/202205041649177657624c7439bc653.jpg",
  },
  {
    id: 7,
    src: "http://meerhaaayurveda.ch/uploads/common/202205041649177678624c744e971b1.jpg",
  },
  {
    id: 8,
    src: "http://meerhaaayurveda.ch/uploads/common/202205041649177694624c745e388ec.jpg",
  },
  {
    id: 9,
    src: "https://meerhaaayurveda.ch/uploads/common/20220602164416414261fff42e22090.jpg",
  },
  {
    id: 10,
    src: "https://i.pinimg.com/564x/de/f1/2c/def12ce67e42ffb86cfc664abe8ba666.jpg",
  },
  {
    id: 11,
    src: "https://i.pinimg.com/564x/04/66/81/046681c5f6d1e3873b32748713082ff5.jpg",
  },
  {
    id: 12,
    src: "https://i.pinimg.com/564x/5b/ed/89/5bed89933c9b37f241d225876f35a208.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current!);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[950px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};
