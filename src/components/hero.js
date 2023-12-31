import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24"
      id="AnaSayfa"
    >
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
              Hedefine Nasıl Ulaşacağını
              <br className="hidden md:block text-white" />
              BİZ{" "}
              <span className="inline-block text-deep-purple-accent-400">
                Biliyoruz!
              </span>
            </h2>
            <p className="text-white text-base md:text-lg">
              Hedeflerinize ulaşmak için yapay zekanın gücünden yararlanın!<br></br> Size
              özel olarak hazırlanan programlar, derece öğrencilerinin
              kullandığı yöntemlerle donatılmıştır. Sadece sizin için
              özelleştirilmiş, başarıya giden yolda sizi bir adım öne taşıyacak
              programlarla hedeflerinize hızla ulaşın!
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Link
              to="/"
              className="w-32 transition duration-300 hover:shadow-lg"
            >
              <img
                src="https://kitwind.io/assets/kometa/app-store.png"
                className="object-cover object-top w-full h-auto mx-auto"
                alt=""
              />
            </Link>
            <Link
              to="/"
              className="w-32 transition duration-300 hover:shadow-lg"
            >
              <img
                src="https://kitwind.io/assets/kometa/google-play.png"
                className="object-cover object-top w-full h-auto mx-auto"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center lg:w-1/2">
          <div className="w-2/5">
            <img
              className="object-cover"
              src="https://kitwind.io/assets/kometa/one-girl-phone.png"
              alt=""
            />
          </div>
          <div className="w-5/12 -ml-16 lg:-ml-32">
            <img
              className="object-cover"
              src="https://kitwind.io/assets/kometa/two-girls-phone.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Link
        to="/"
        aria-label="Aşağı kaydır"
        className="flex items-center justify-center animate-bounce w-10 h-10 mx-auto text-gray-600 hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 duration-300 transform border border-gray-400 rounded-full hover:shadow hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="currentColor"
        >
          <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
        </svg>
      </Link>
    </div>
  );
}
