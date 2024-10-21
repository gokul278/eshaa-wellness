import { useEffect } from "react";

import { FaChevronRight } from "react-icons/fa6";
// import { useTranslation } from "react-i18next";
import about1 from "../../assets/about/about1.png";
import about2 from "../../assets/about/about2.png";

import Glide from "@glidejs/glide";

import comp1 from "../../assets/about/comp1.png";
import comp2 from "../../assets/about/comp2.png";
import comp3 from "../../assets/about/comp3.png";
import comp4 from "../../assets/about/comp4.png";
import comp5 from "../../assets/about/comp5.png";
import comp6 from "../../assets/about/comp6.png";
import comp7 from "../../assets/about/comp7.png";
import comp8 from "../../assets/about/comp8.png";
import comp9 from "../../assets/about/comp9.png";

import vision from "../../assets/about/vision.png";
import mission from "../../assets/about/mission.png";

import "./About.css";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation("global");

  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 4500,
      animationTimingFunc: "linear",
      perView: 3,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
          gap: 36,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div>
      <div className="contactUs">
        <div className="contactUsHeader mt-5 w-full md:w-10/12 mx-auto">
          <h3>{t("nav.about")}</h3>
          <div className="breadCrumb">
            <span>{t("nav.home")}</span>
            <FaChevronRight />
            <p>{t("nav.about")}</p>
          </div>
        </div>
        <div className="aboutUsContents">
          <div className="w-full md:w-6/12 mx-auto"></div>
          <div className="w-full md:w-6/12 mx-auto"></div>
        </div>
      </div>
      <div className="homeWelcomeContents row pb-5">
        <div className="homeContOne col-lg-5 col-md-10">
          <div className="welcomeEshaa">
            <h4 style={{ fontSize: "20px" }}>{t("nav.about")}</h4>
            <h3>
            {t("about.head1")}
            </h3>
            <p style={{ textIndent: "2em" }}>
            {t("about.content1")}
            </p>
          </div>
          <img style={{}} className="mt-3 mb-3 homeContOneImg" src={about2} />
        </div>
        <div className="homeContTwo col-lg-5 col-md-10">
          <img style={{}} className="mt-3 mb-3 homeContTwoImg" src={about1} />

          <div className="aboutEshaa">
            <h3>O{t("about.head2")}</h3>
            <p style={{ textIndent: "2em" }}>
            {t("about.content2")}
            </p>
            <p>
              <strong>{t("about.pointqs1")} : </strong>
              {t("about.pointans1")}
            </p>
            <p>
              <strong>{t("about.pointqs2")} : </strong>
              {t("about.pointans2")}
            </p>
            <p>
              <strong>{t("about.pointqs3")} : </strong>
              {t("about.pointans3")}
            </p>
            <p>
              <strong>{t("about.pointqs4")} : </strong>
              {t("about.pointans4")}
            </p>
            <p>
              <strong>{t("about.pointqs5")} : </strong>
              {t("about.pointans5")}
            </p>
          </div>
        </div>
      </div>

      <div className="emailContactForm mt-5 w-full md:w-10/12 mx-auto">
        <div className="emailFormContxt w-full md:w-5/12 mx-auto">
          <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
            <figure className="flex-1 visImg">
              <img
                src={vision}
                alt="card image"
                className="object-cover aspect-auto"
              />
            </figure>
            <div className="flex-1 p-6 sm:mx-6 sm:px-0">
              <header className="flex gap-4 mb-4">
                <div>
                  <h3 className="text-3xl font-bold text-slate-700">
                  {t("about.vision")}
                  </h3>
                </div>
              </header>
              <p>
              {t("about.visioncontent")}
              </p>
            </div>
          </div>
        </div>
        <div className="emailFormContxt w-full md:w-5/12 mx-auto">
          <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
            <figure className="flex-1 visImg">
              <img
                src={mission}
                alt="card image"
                className="object-cover aspect-auto"
              />
            </figure>
            <div className="flex-1 p-6 sm:mx-6 sm:px-0">
              <header className="flex gap-4 mb-4">
                <div>
                  <h3 className="text-3xl font-bold text-slate-700">
                  {t("about.mission")}
                  </h3>
                </div>
              </header>
              <p>
              {t("about.missioncontent")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="glidesCont"
        style={{ overflow: "hidden", padding: "50px 10px" }}
      >
        <h2>{t("about.sponser")}</h2>
        <div className="glide-09 relative w-full">
          {/* <!-- Slides --> */}
          <div data-glide-el="track">
            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
              <li>
                <img
                  src={comp1}
                  className="m-auto h-20 max-h-full w-auto max-w-full"
                />
              </li>
              <li>
                <img
                  src={comp2}
                  className="m-auto h-20 max-h-full w-auto max-w-full"
                />
              </li>
              <li>
                <img
                  src={comp3}
                  className="m-auto h-20 max-h-full w-auto max-w-full"
                />
              </li>
              <li>
                <img
                  src={comp4}
                  className="m-auto h-20 max-h-full w-auto max-w-full"
                />
              </li>
              <li>
                <img
                  src={comp5}
                  className="m-auto h-20 max-h-full w-auto max-w-full"
                />
              </li>
              <li>
                <img
                  src={comp6}
                  className="m-auto h-20 max-h-full w-auto max-w-full"
                />
              </li>
              <li>
                <img
                  src={comp7}
                  className="m-auto h-20 max-h-full w-auto max-w-full"
                />
              </li>
              <li>
                <img
                  src={comp8}
                  className="m-auto h-20 max-h-full w-auto max-w-full"
                />
              </li>
              <li>
                <img
                  src={comp9}
                  className="m-auto h-20 max-h-full w-auto max-w-full"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
