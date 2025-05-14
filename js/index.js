let currentLang = "pl";

function changeLang(lang) {
    currentLang = lang;

    showAllAds(years);

    const btnLang = document.querySelector('.lang-select');   

    switch (lang) {
        case "uk":
            btnLang.style.background = "linear-gradient(180deg,rgba(0, 70, 184, 1) 50%, rgba(255, 255, 0, 1) 50%)"
            document.getElementById('lang_title').innerHTML = "Мова";
            
            break;
            case "pl":
                btnLang.style.background = "linear-gradient(180deg,rgba(255, 255, 255, 1) 50%, rgba(255, 0, 0, 1) 50%)"
                document.getElementById('lang_title').innerHTML = "Jęnzyk";
            break;
    }
    // Text
    document.getElementById('result2').innerHTML = translations[currentLang].avgPrice + Math.floor(soPrice(years) * 100) / 100;
    document.getElementById('btnFilter').innerHTML = translations[currentLang].filter;
    document.getElementById('filterTitle1').innerHTML = translations[currentLang].filter;
    document.getElementById('filterTitle2').innerHTML = translations[currentLang].filterYear;
    document.getElementById('filterTitle3').innerHTML = translations[currentLang].filterPrice;
    document.getElementById('inputBtn').innerHTML = translations[currentLang].btnOk;
    document.getElementById('inputBtnClose').innerHTML = translations[currentLang].btnClose;

    // Placehplder
    document.getElementById('inputMinYear').placeholder = translations[currentLang].min;
    document.getElementById('inputMaxYear').placeholder = translations[currentLang].max;
    document.getElementById('inputMinPrice').placeholder = translations[currentLang].min;
    document.getElementById('inputMaxPrice').placeholder = translations[currentLang].max;

    // Text time
    if (isFiltered) {
    document.getElementById('result3').innerHTML = translations[currentLang].allCars + years.length;
    document.getElementById('filterFull').innerHTML = translations[currentLang].year + " " + document.getElementById('inputMinYear').value + "-" + document.getElementById('inputMaxYear').value + " " + translations[currentLang].price + " " + document.getElementById('inputMinPrice').value + "-" + document.getElementById('inputMaxPrice').value + "zł";
    } else {
    document.getElementById('result3').innerHTML = "";
    document.getElementById('filterFull').innerHTML = "";
    };

};

const translations = {
    uk: {
      filter: "Фільтр",
      year: "Рік",
      price: "Ціна",
      allCars: "Кількість знайдиних варіантів: ",
      avgPrice: "Середня ціна всіх машин: ",
      filterYear: "Рік випуску",
      min: "Від",
      max: "До",
      filterPrice: "Ціна",
      btnOk: "Готово",
      btnClose: "Очистити"
    },
    pl: {
      filter: "Filter",
      year: "Rok",
      price: "Cena",
      allCars: "Liczba znalezionych opcji: ",
      avgPrice: "Średnia cena wszystkich samochdów: ",
      filterYear: "Rok produkcji",
      min: "Od",
      max: "Do",
      filterPrice: "Cena",
      btnOk: "Gotowe",
      btnClose: "Wyczyść"
    }
  };
  
  

let ads = [
    {name: "Golf 4", price: 5500, year: 2001, img: "img/Golf-4_miniOlx.webp"},
    {name: "BMW E39", price: 7800, year: 2003, img: "img/Bmw-E39_miniOlx.webp"},
    {name: "Audi A3", price: 14000, year: 2007, img: "img/Audi-A3_miniOlx.jpg"},
    {name: "Golf 5", price: 12000, year: 2006, img: "img/Golf-5_miniOlx.jpg"},
    {name: "Opel Astra", price: 3500, year: 2000, img: "img/Opel-Astra-G_miniOlx.jpg"},
    {name: "Audi S4", price: 28000, year: 2007, img: "img/Audi-S4_miniOlx.jpg"},
    {name: "Golf 6 GTI", price: 48000, year: 2011, img: "img/Golf-6-Gti_miniOlx.jpg"},
    {name: "BMW F10", price: 65000, year: 2015, img: "img/Bmw-F10_miniOlx.jpg"},
    {name: "Audi A3", price: 72000, year: 2017, img: "img/Audi-A3-2017_miniOlx.jpg"},
    {name: "Toyota Yaris", price: 27000, year: 2011, img: "img/Toyota-Yaris-3-2011_miniOlx.jpg"},
    {name: "Mercedes E320", price: 16000, year: 2003, img: "img/Mercedes-E320-2003_miniOlx.jpg"},
    {name: "Seat Leon", price: 10000, year: 2003, img: "img/Seat-Leon-2003_miniOlx.jpg"}
];

// Modal script

const modal = document.getElementById("modal");
const btn_filter = document.getElementById("btnFilter");
const btnClose = document.getElementById("close");

btn_filter.onclick = function() {
   document.getElementById('modal').style.display = 'block';
};

btnClose.onclick = function() {
   document.getElementById('modal').style.display = 'none';
};

modal.addEventListener("click", (e) => {
   

   if (e.target === modal) {
    modal.style.display = "none";
   }
});

// Ok BtnOkClose
const btnOkClose = document.getElementById('inputBtn');

btnOkClose.onclick = function() {
    document.getElementById('modal').style.display = 'none';
};


// Function

function soPrice(arr) {
return arr.reduce((acc, el, index, arr) => {
   acc += el.price;
   
   if (index === arr.length - 1) {
    return acc / arr.length;
   };
   
   return acc;
}, 0);
};

document.getElementById('result2').innerHTML = translations[currentLang].avgPrice + Math.floor(soPrice(ads) * 100) / 100;

const container = document.getElementById("ads-container");

function showAllAds(arr) {
    container.innerHTML = "";
    arr.forEach(ad => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <div class="imgcenter"><img src="${ad.img}"></div>
          <h3>${ad.name}</h3>
          <p>${translations[currentLang].year} ${ad.year}</p>
          <p>${translations[currentLang].price} ${ad.price} zł</p>
        `;
        container.appendChild(card);
    });
}

let years = ads;
let isFiltered = false;

showAllAds(ads);

// Filter script
document.getElementById('inputBtn').addEventListener('click', () => {
    const yearMin = document.getElementById('inputMinYear').value;
    const yearMax = document.getElementById('inputMaxYear').value;
    const priceMin = document.getElementById('inputMinPrice').value;
    const priceMax = document.getElementById('inputMaxPrice').value;
    console.log(yearMin, yearMax, priceMin, priceMax);


    if( !isNaN(yearMin) && !isNaN(yearMax) && !isNaN(priceMin) && !isNaN(priceMax)) {
        
        years = ads.filter((el) => {
            return el.year >= yearMin && el.year <= yearMax && el.price >= priceMin && el.price <= priceMax;
        });

        container.innerHTML = "";

        years.forEach((el, index, arr) => {
            console.log("Кількість машин старше >" + yearMin + ": " + (index + 1) + "; ", el);

            if(index === arr.length - 1) {
               document.getElementById('result3').innerHTML = translations[currentLang].allCars + arr.length;
            }
        });

        document.getElementById('result2').innerHTML = translations[currentLang].avgPrice + Math.floor(soPrice(years) * 100) / 100;
        document.getElementById('filterFull').innerHTML = translations[currentLang].year + " " + yearMin + "-" + yearMax + " " + translations[currentLang].price + " " + priceMin + "-" + priceMax + "zł";

        showAllAds(years);

        document.getElementById('inputBtnClose').style.display = 'block';

        isFiltered = true;
    };
});

// Filter script Close
document.getElementById('inputBtnClose').addEventListener('click', () => {
    years = ads;
    showAllAds(years);

    document.getElementById('inputBtnClose').style.display = 'none';
    document.getElementById('modal').style.display = 'none';

    document.getElementById('inputMinYear').value = "";
    document.getElementById('inputMaxYear').value = "";
    document.getElementById('inputMinPrice').value = "";
    document.getElementById('inputMaxPrice').value = "";


    document.getElementById('result2').innerHTML = translations[currentLang].avgPrice + Math.floor(soPrice(years) * 100) / 100;
    document.getElementById('result3').innerHTML = "";
    document.getElementById('filterFull').innerHTML = "";

    isFiltered = false;
});