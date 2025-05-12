let currentLang = "uk";

function changeLang(lang) {
    currentLang = lang;

    showAllAds(years);

    const btnUk = document.querySelector('.btn-uk');
    const btnPl = document.querySelector('.btn-pl');   

    switch (lang) {
        case "uk":
            btnUk.style.background = "linear-gradient(180deg,rgba(0, 70, 184, 1) 50%, rgba(255, 255, 0, 1) 50%)"
            btnPl.style.background = "#5a5a5a"
            btnPl.style.color = "#fff"
            btnUk.style.color = "#000"
            document.getElementById('lang_title').innerHTML = "Jęnzyk";

            break;
        case "pl":
            btnPl.style.background = "linear-gradient(180deg,rgba(255, 255, 255, 1) 50%, rgba(255, 0, 0, 1) 50%)"
            btnUk.style.background = "#5a5a5a"
            btnUk.style.color = "#fff"
            btnPl.style.color = "#000"
            document.getElementById('lang_title').innerHTML = "Мова";
            break;
    }
    // Text
    document.getElementById('result2').innerHTML = translations[currentLang].avgPrice + Math.floor(soPrice(years) * 100) / 100;
    document.getElementById('btnFilter').innerHTML = translations[currentLang].filter;
    document.getElementById('filterTitle1').innerHTML = translations[currentLang].filter;
    document.getElementById('filterTitle2').innerHTML = translations[currentLang].filterYear;
    document.getElementById('filterTitle3').innerHTML = translations[currentLang].filterPrice;
    document.getElementById('inputBtn').innerHTML = translations[currentLang].btnOk;

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
      btnOk: "Готово"
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
      btnOk: "Gotowe"
    }
  };
  
  

let ads = [
    {name: "Golf 4", price: 5500, year: 2001, img: "https://punkta.pl/app/uploads/2018/04/auto-774418_1280-1.jpg"},
    {name: "BMW E39", price: 7800, year: 2003, img: "https://www.pcarmarket.com/static/media/uploads/galleries/photos/uploads/galleries/24895-harris-2001-bmw-e39-m5/.thumbnails/M5_44_of_45.webp/M5_44_of_45-tiny-1200x0.webp"},
    {name: "Audi A3", price: 14000, year: 2007, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs6F7fPa96II6tyvyRRyc45VVrrnp373qbuA&s"},
    {name: "Golf 5", price: 12000, year: 2006, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnUo21HkrSOMehSrY7wtl1zRw6k9ade7bxQ&s"},
    {name: "Opel Astra", price: 3500, year: 2000, img: "https://zmienolej.pl/modules/tvcmsblog/views/img/large-phsimpleblogfeatured235.jpg"},
    {name: "Audi S4", price: 28000, year: 2007, img: "https://www.upgrademycar.shop/cdn/shop/files/ger_pm_front-diffuser-v-2-audi-a4-b7-5235_3-min.jpg?v=1726601707"},
    {name: "Golf 6 GTI", price: 48000, year: 2011, img: "https://fscars.co.za/wp-content/uploads/2025/02/264_3827_I2.jpg"},
    {name: "BMW F10", price: 65000, year: 2015, img: "https://avatars.mds.yandex.net/get-autoru-vos/2049300/489a0ef406da4689842449469ea5a622/456x342"},
    {name: "Audi A3", price: 72000, year: 2017, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ-3YRrYWLE0OUy8EKPO3m1RxFiurLBUzDrA&s"},
    //{name: "Toyota Yaris", price: , year: , img: },
    {name: "Mercedes E320", price: 16000, year: 2003, img: "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im9nbHFleG5oZWQyMS1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsImEiOiIwIiwicCI6IjEwLC0xMCJ9XX0.wUSDb-RFxiX4uCKE2YZbgsDMpz6SGLi8eODnSedgSsI/image;s=1024x0;q=80"},
    //{name: "", price: , year: , img: }
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