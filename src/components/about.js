import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      id="Hakkımızda"
    >
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-500 sm:text-4xl md:mx-auto">
          <span className="relative inline-block"></span>{" "}
          <span className="text-black border-dashed border-b-2 border-[#a32cc4] pb-2">
            Hakkımızda
          </span>
        </h2>
        <p className="text-base text-gray-500 md:text-lg mb-3 pt-3">
          Biz, öğrencilerin eğitim yolculuklarında en iyi destekçisi olmak için
          tasarlanmış bir platformuz. Amacımız, her öğrencinin ihtiyaçlarına ve
          hedeflerine göre kişiselleştirilmiş kendine özel bir koç imkanı
          sağlamaktır. Yapay zekamız, öğrencilerin ders programları, çalışma
          saatleri, sıklıkla yaptıkları hatalar, eksik oldukları konular ve
          deneme sınavlarındaki netlerine dayanarak onlar için en uygun öğrenme
          planını hazırlıyor.
        </p>
        <p className="text-base text-gray-500 md:text-lg mb-3">
          Sanal koçumuz, LGS müfredatına uygun şekilde eğitilmiş ve daha önce
          yüksek dereceler elde etmiş yüzlerce öğrencinin, onları yetiştiren
          öğretmenlerin ve eğitim koçlarının deneyimleriyle geliştirilmiştir.
        </p>
        <p className="text-base text-gray-500 md:text-lg">
          Programımız, öğrencilerin çalışma zamanındaki her türlü değişikliği
          dikkate alarak sürekli olarak güncellenir. Bu, onların eksiklerini
          kapatma konusunda stres yaşamalarına gerek kalmadan, ihtiyaçlarına
          proaktif bir şekilde yanıt vermemizi sağlar.
        </p>
      </div>
      <div className="grid gap-8 row-gap-0 lg:grid-cols-3">
        <div className="relative text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#cd9ffa] to-[#FF9933] sm:w-20 sm:h-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="36"
              width="36"
              viewBox="0 0 512 512"
              fill="#fff"
            >
              <path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z" />
            </svg>
          </div>
          <h6 className="mb-2 text-2xl font-extrabold text-black">
            7/24 İletişim Kurma Fırstı
          </h6>
          <p className="max-w-md mb-3 text-lg text-gray-500 sm:mx-auto">
            İstediğiniz an, günün her saati, yapay zekamız ile etkileşime
            geçebilir, sorularınızı yöneltebilir ve öğrenme sürecinizle ilgili
            anında destek alabilirsiniz.
          </p>
        </div>
        <div className="relative text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#cd9ffa] to-[#FF9933] sm:w-20 sm:h-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="36"
              width="32"
              fill="#fff"
              viewBox="0 0 384 512"
            >
              <path d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
            </svg>
          </div>
          <h6 className="mb-2 text-2xl font-extrabold text-black">
            Çapraz Platform
          </h6>
          <p className="max-w-md mb-3 text-lg text-gray-500 sm:mx-auto">
            Web sitemiz ve uygulamamız, tüm cihazlar arasında sorunsuz bir
            entegrasyon ve kullanıcı deneyimi sunar. Bilgisayarınızdan,
            tabletinizden veya mobil cihazınızdan erişim sağlayarak öğrenme
            sürecinize her yerden devam edebilirsiniz. Esneklik ve kolaylıkla
            öğrenme deneyiminizi zenginleştirin!
          </p>
        </div>
        <div className="relative text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#cd9ffa] to-[#FF9933] sm:w-20 sm:h-20">
            <svg
              className="w-12 h-12 text-white sm:w-16 sm:h-16"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="#fff"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 text-2xl font-extrabold text-black">Hız</h6>
          <p className="max-w-md mb-3 text-lg text-gray-500 sm:mx-auto">
            Hızlı ve Verimli Program Hazırlama! Öğrenciler için zaman çok
            değerli, bu yüzden 'Fast' özelliğimizle onlara hızlı ve etkili ders
            programları hazırlama imkanı sunuyoruz. Bu özellik, öğrencilerin
            zamanlarını en verimli şekilde kullanmalarını sağlayarak, öğrenme
            hedeflerine daha hızlı ulaşmalarına yardımcı olur.
          </p>
        </div>
      </div>
    </div>
  );
}
