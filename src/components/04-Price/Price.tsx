import React from "react";
import { useTranslation } from "react-i18next";

import pricelist from "../../assets/home/pricelist.png";

import "./Price.css";

interface TreatmentList {
  name: string;
  duration: string;
  price: string;
}

export default function Price() {
  const { t } = useTranslation("global");

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
    <div className="price">
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
    </div>
  );
}
