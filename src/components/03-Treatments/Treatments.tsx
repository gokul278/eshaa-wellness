import { useTranslation } from "react-i18next";

import "./Treatments.css";

export default function Treatments() {
  const { t } = useTranslation("global");

  return (
    <div className="treat pt-5">
      <div className="treatmentsPage">
        <div className="ourTreatments ">
          <h2>{t("treatments.treatmentHeader")}</h2>
          <p className="w-full md:w-7/12 mx-auto">
            {t("treatments.treatmentCont")}
          </p>
          <div className="treatmentOne treatments">
            <h3> {t("home.treatmentOne")}</h3>
            <div className="treatmentPoints">
              <p>{t("home.treatmentOneCont")}</p>
            </div>
          </div>
          <div className="treatmentTwo treatments">
            <h3>{t("home.treatmentTwo")}</h3>
            <p>{t("home.treatmentTwoCont")}</p>
          </div>
          <div className="treatmentThree treatments">
            <h3>{t("home.treatmentThree")}</h3>
            <p>{t("home.treatmentThreeCont")}</p>
          </div>
          <div className="treatmentFour treatments">
            <h3>{t("home.treatmentFour")}</h3>
            <p>{t("home.treatmentFourCont")}</p>
          </div>
          <div className="treatmentFive treatments">
            <h3>{t("home.treatmentFive")}</h3>
            <p>{t("home.treatmentFiveCont")}</p>
          </div>
          <div className="treatmentSix treatments">
            <h3>{t("home.treatmentSix")}</h3>
            <p>{t("home.treatmentSixCont")}</p>
          </div>
          <div className="treatmentSeven treatments">
            <h3>{t("home.treatmentSeven")}</h3>
            <p>{t("home.treatmentSevenCont")}</p>
          </div>
          <div className="treatmentEight treatments">
            <h3>{t("home.treatmentEight")}</h3>
            <p>{t("home.treatmentEightCont")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
