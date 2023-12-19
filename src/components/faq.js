import React from "react";

export default function Faq() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" id="SSS">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-500 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="70326c9b-4a0f-429b-9c76-792941e326d5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative text-[#4338ca]">Hızlı</span>
            </span>{" "}
            kahverengi tilki, tembel bir köpeğin üzerinden atlar
          </h2>
          <p className="text-base text-gray-500 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl text-[#4338ca] font-medium">
                Hızlı, kahverengi tilki, tembel bir köpeğin üzerinden atlar mı?
              </p>
              <p className="text-gray-500">
                Uzay, sonsuz uzay. İşte Yıldız Gemisi Enterprise'ın yolculukları.
                Beş yıllık görevi: garip yeni dünyaları keşfetmek.
                <br />
                <br />
                Birçok kişi keşfin kaderimizin bir parçası olduğunu söyler, ancak
                aslında gelecek nesillere karşı görevimizdir.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl text-[#4338ca] font-medium">
                Birinci kaptan yardımcısı ve onun Kaptanı da yapacak mı?
              </p>
              <p className="text-gray-500">
                İşte şov yapma şekilleri, bir şov yaparlar. Bu şovun adı bir
                pilot bölümüdür.
                <br />
                <br />
                Sonra bu şovu şov yapan insanlara gösterirler ve o tek şovun
                gücüne dayanarak başka şovlar yapacaklarına karar verirler.
                Bazı pilot bölümler seçilir ve televizyon programları olur.
                Bazıları seçilmez, hiçbir şey olmaz. O, hiçbir şey olmayanlardan
                birinde başrolde oynadı.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl text-[#4338ca] font-medium">
                Uzay Papanın sürüngen olduğunu mu!?
              </p>
              <p className="text-gray-500">
                Bahçemde bir çiçek, iç çamaşırlarımda bir gizem. Kalp krizi,
                eski Büyük Ayı'yı asla durdurmadı. Onun adına Büyük Ayı dememizi
                bile bilmiyordum.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl text-[#4338ca] font-medium">
                Üzerinde ne kadar para var?
              </p>
              <p className="text-gray-500">
                Birinci kaptan yardımcısı ve onun Kaptanı, diğerlerini
                tropikal adanın yuvasında rahat hissettirmek için ellerinden
                geleni yapacaklar.
                <br />
                <br />
                Michael Knight, masumların sebebini savunma görevi üstlenmiş
                genç bir yalnız, suçluların üzerinde işleyen güçsüzlerin,
                hukuk üstünde işleyen suçluların davasını savunma görevi
                üstlenmiş biridir. İşte geliyor. İşte Speed Racer geliyor. O,
                tekerlekler üzerinde bir şeytan.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl text-[#4338ca] font-medium">
                Galaksiler, Orion'un kılıcı küresel yıldız kümesi?
              </p>
              <p className="text-gray-500">
                NASDAQ'da listelenebilecek kadar büyük bir iş, batıyor.
                Ortadan kayboluyor!
                <br />
                <br />
                Beni olmadan var olmaktan vazgeçer. Hayır, açıkça kiminle
                konuştuğunu bilmiyorsun, bu yüzden seni aydınlatayım.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl text-[#4338ca] font-medium">
                Adalet ne zaman bir kılavuz kitap kadar basit olmuştur?
              </p>
              <p className="text-gray-500">
                Bu intikam hakkında değil. Bu, adaletle ilgilidir. On iki yıl
                içinde birçok şey değişebilir, Amiral. Bu kesinlikle iyi
                bilgi. Hakkında nasıl konuştuğunuzu bilmeyebilirsiniz. Yaklaşık
                dört yıl. Genç görünüşümü duymaktan sıkıldım.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
