import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

import "./Gallery.css";

const Gallery = () => {
  const { t } = useTranslation("global");

  return (
    <div className="galleryContents">
      <div className="contactUs">
        <div className="contactUsHeader mt-5 w-full md:w-10/12 mx-auto">
          <h3>{t("nav.gallery")}</h3>
          <div className="breadCrumb">
            <span>Home</span>
            <FaChevronRight />
            <p>{t("nav.gallery")}</p>
          </div>
        </div>
      </div>
      <div className="galleryContxt">
        <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
          <div>
            <span className="block mb-4 text-xl md:text-bold text-[#587855] font-medium">
              {t("gallery.galleryHeaderOne")}
            </span>
            <h3 className="text-4xl md:text-6xl font-semibold">
              {t("gallery.galleryHeaderTwo")}
            </h3>
            <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
              {t("gallery.galleryDesc")}
            </p>
            <button className="bookAptBtn">{t("bookApt.book")}</button>
          </div>
          <ShuffleGrid />
        </section>
      </div>
    </div>
  );
};

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
  {
    id: 13,
    src: "https://i.pinimg.com/control/564x/fd/60/9a/fd609a96859053fbe7ebf340ef6ecc16.jpg",
  },
  {
    id: 14,
    src: "https://i.pinimg.com/736x/aa/5f/a2/aa5fa26d62323dfcb2145747467abaf4.jpg",
  },
  {
    id: 15,
    src: "https://i.pinimg.com/control/564x/48/ab/98/48ab9858b03055e548b6b7a9f2abf894.jpg",
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
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null); // Updated type
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
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Gallery;
