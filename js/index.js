let currentLang = "pl";

// Filter
let years = null;
let isFiltered = false;

// Search
let filtered = null;
let filteredArr = false;

function changeLang(lang) {
    currentLang = lang;
    applyStaticTranslations();
    updateResultsTexts();
    showAllAds(getActiveList());
}

function getActiveList() {
    if (isFiltered && years) {
        return years;
    } else if (filteredArr && filtered) {
        return filtered;
    } else {
        return ads;
    }
}

function applyStaticTranslations() {
    const t = translations[currentLang];
    const btnLang = document.querySelector('.lang-select');   

    switch (currentLang) {
        case "uk":
            btnLang.style.background = "linear-gradient(180deg,rgba(0, 70, 184, 1) 50%, rgba(255, 255, 0, 1) 50%)"
            document.getElementById('lang_title').innerHTML = "Мова";
            
        break;
        case "pl":
            btnLang.style.background = "linear-gradient(180deg,rgba(255, 255, 255, 1) 50%, rgba(255, 0, 0, 1) 50%)"
            document.getElementById('lang_title').innerHTML = "Jenzyk";
        break;
    }
    // Text
    document.getElementById('btnFilter').innerHTML = t.filter;
    document.getElementById('filterTitle1').innerHTML = t.filter;
    document.getElementById('filterTitle2').innerHTML = t.filterYear;
    document.getElementById('filterTitle3').innerHTML = t.filterPrice;
    document.getElementById('inputBtn').innerHTML = t.btnOk;
    document.getElementById('inputBtnClose').innerHTML = t.btnClose;
    document.getElementById('btnSearchClose').innerHTML = t.btnClose;
    document.getElementById('sortTitle').innerHTML = t.sortBy;
    document.getElementById('aboutUs').innerHTML = t.footerAboutUs;
    document.getElementById('social').innerHTML = t.footerSocial;
    document.getElementById('contact').innerHTML = t.footerContact;
    document.getElementById('whoWe').innerHTML = t.aboutUsWhoWe;
    document.getElementById('blog').innerHTML = t.aboutUsBlog;
    document.getElementById('ourHistory').innerHTML = t.aboutUsOurHistory;
    document.getElementById('helpMail').innerHTML = t.contactHelp;
    document.getElementById('phoneNumber').innerHTML = t.contactPhoneNumber;

    // Placehplder
    document.getElementById('inpSearch').placeholder = t.search;
    document.getElementById('inputMinYear').placeholder = t.min;
    document.getElementById('inputMaxYear').placeholder = t.max;
    document.getElementById('inputMinPrice').placeholder = t.min;
    document.getElementById('inputMaxPrice').placeholder = t.max;

    // Options
    const sortSelect = document.getElementById('btnSort');
    
    sortSelect.options[0].text = t.sortRandom;
    sortSelect.options[1].text = t.sortMax;
    sortSelect.options[2].text = t.sortMin;
}

function updateResultsTexts() {
    const t = translations[currentLang];
    const list = getActiveList();
    const filterFull = document.getElementById('filterFull');
    
    document.getElementById('result2').innerHTML = t.avgPrice + Math.floor(soPrice(list) * 100) / 100;

    updateResultsValue();

    // Text time
    if (isFiltered) {
    const minYear = document.getElementById('inputMinYear').value || 0;
    const maxYear = document.getElementById('inputMaxYear').value || 9999;
    const minPrice = document.getElementById('inputMinPrice').value || 0;
    const maxPrice = document.getElementById('inputMaxPrice').value || Infinity;

    
    filterFull.innerHTML = t.year + " " + minYear + "-" + maxYear + " " + t.price + " " + minPrice + "-" + maxPrice + "zł";
    } else {
    filterFull.innerHTML = "";
    }
}

function updateResultsValue() {
    const t = translations[currentLang];
    
    const result3 = document.getElementById('result3');

    if (isFiltered) {
        result3.innerHTML = t.allCars + years.length;
    } else if (filteredArr) {
        result3.innerHTML =  t.allCars + filtered.length;
    } else {
        result3.innerHTML = "";
    }
}


// Translations words
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
      btnClose: "Очистити",
      search: "Шукай...",
      sortBy: "Сортувати як:",
      sortRandom: "Випадково (предмета)",
      sortMax: "Найдорожчого (предмета)",
      sortMin: "Найдешевшого (предмета)",
      footerAboutUs: "Про нас",
      footerSocial: "Соц Мережі",
      footerContact: "Контакти",
      aboutUsWhoWe: "Хто ми",
      aboutUsBlog: "Блог",
      aboutUsOurHistory: "Наша історія",
      contactHelp: "Допомога: ",
      contactPhoneNumber: "Номер телефону: +48 000 000 000",
      searchUndefined: "Нічого не знайдено"
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
      btnClose: "Wyczyść",
      search: "Szukaj...",
      sortBy: "Sortuj wedlug:",
      sortRandom: "Losowego (przedmiotu)",
      sortMax: "Najdroższego (przedmiotu)",
      sortMin: "Najtańszego (przedmiotu)",
      footerAboutUs: "O nas",
      footerSocial: "Social",
      footerContact: "Kontakty",
      aboutUsWhoWe: "Kto my",
      aboutUsBlog: "Blog",
      aboutUsOurHistory: "Nasza historia",
      contactHelp: "Pomoc: ",
      contactPhoneNumber: "Numer telefonu: +48 000 000 000",
      searchUndefined: "Nieczego nie znaleziono"
    }
};
  
  
// Array cars
let ads = [
    {name: "Golf 4", price: 5500, year: 2001, mileage: 240850, img: "img/Golf-4_miniOlx.webp"},
    {name: "BMW E39", price: 7800, year: 2003, mileage: 270200, img: "img/Bmw-E39_miniOlx.webp"},
    {name: "Audi A3", price: 14000, year: 2007, mileage: 250000, img: "img/Audi-A3_miniOlx.jpg"},
    {name: "Golf 5", price: 12000, year: 2006, mileage: 211100, img: "img/Golf-5_miniOlx.jpg"},
    {name: "Opel Astra", price: 3500, year: 2000, mileage: 380205, img: "img/Opel-Astra-G_miniOlx.jpg"},
    {name: "Audi S4", price: 28000, year: 2007, mileage: 218000, img: "img/Audi-S4_miniOlx.jpg"},
    {name: "Golf 6 GTI", price: 48000, year: 2011, mileage: 173000, img: "img/Golf-6-Gti_miniOlx.jpg"},
    {name: "BMW F10", price: 65000, year: 2015, mileage: 140500, img: "img/Bmw-F10_miniOlx.jpg"},
    {name: "Audi A3", price: 72000, year: 2017, mileage: 34000, img: "img/Audi-A3-2017_miniOlx.jpg"},
    {name: "Toyota Yaris", price: 27000, year: 2011, mileage: 120000, img: "img/Toyota-Yaris-3-2011_miniOlx.jpg"},
    {name: "Mercedes E320", price: 16000, year: 2003, mileage: 235780, img: "img/Mercedes-E320-2003_miniOlx.jpg"},
    {name: "Seat Leon", price: 10000, year: 2003, mileage: 150032, img: "img/Seat-Leon-2003_miniOlx.jpg"}
];


// Function

function randomArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  };
  return array;
}

function maxPrice(array) {
    array.sort((a, b) => {
       return b.price - a.price;
    });

    return array;
}

function minPrice(array) {
    array.sort((a, b) => {
       return a.price - b.price;
    });

    return array;
}

function soPrice(arr) {
return arr.reduce((acc, el, index, arr) => {
   acc += el.price;
   
   if (index === arr.length - 1) {
    return acc / arr.length;
   };
   
   return acc;
}, 0);
}


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

    card.addEventListener("click", () => {
        localStorage.setItem("selectedAd", JSON.stringify(ad));
        window.open("ad.html", "_blank");
    });

        container.appendChild(card);
    });
}

// Sort code
let typeSortValue = "randomTotal";

let shuffledCars;
function typeSort(type) {
    typeSortValue = type;

    switch (type) {
        case "randomTotal":
            shuffledCars = randomArray(getActiveList());
        break;
    
        case "maxTotal":
            shuffledCars = maxPrice(getActiveList());
        break;
        
        case "minTotal":
            shuffledCars = minPrice(getActiveList());
        break;
    }
    
    showAllAds(shuffledCars);
}


shuffledCars  = randomArray(ads);
showAllAds(shuffledCars);

document.getElementById('result2').innerHTML = translations[currentLang].avgPrice + Math.floor(soPrice(getActiveList()) * 100) / 100;

// Search code
const SearchClose = document.getElementById('btnSearchClose');

document.getElementById("btnSearch").addEventListener("click", () => {
    if (document.getElementById("inpSearch").value.trim() === "") return;

    doSearch()
});

inpSearch.addEventListener("keydown", (e) => {
    if (document.getElementById("inpSearch").value.trim() === "") return;

    if (e.key === "Enter") {
        e.preventDefault();
        doSearch();
    }
});

function doSearch() {
  const searchValue = document.getElementById("inpSearch").value.trim().toLowerCase();

  
  filtered = ads.filter(ad => ad.name.toLowerCase().includes(searchValue));

  if (filtered.length > 0) {
    isFiltered = false;
    filteredArr = true;
    showAllAds(filtered);

    updateResultsValue();

    document.getElementById('result2').innerHTML = translations[currentLang].avgPrice + Math.floor(soPrice(filtered) * 100) / 100;
    SearchClose.style.display = "block";

    document.getElementById('inputBtnClose').style.display = 'none';
    document.getElementById('inputMinYear').value = "";
    document.getElementById('inputMaxYear').value = "";
    document.getElementById('inputMinPrice').value = "";
    document.getElementById('inputMaxPrice').value = "";

    document.getElementById('filterFull').innerHTML = "";

    typeSort(typeSortValue);
  } else {
    container.innerHTML = `<b style="color:white;text-align:center">${translations[currentLang].searchUndefined}</b>`;
    document.getElementById('result2').innerHTML = translations[currentLang].avgPrice + "0";
    
    updateResultsValue();
  }
}

SearchClose.addEventListener('click', ()=> {
    filteredArr = false;
    isFiltered = false;
    typeSort(typeSortValue);

    document.getElementById("inpSearch").value = "";
    document.getElementById('result2').innerHTML = translations[currentLang].avgPrice + Math.floor(soPrice(shuffledCars) * 100) / 100;
    
    updateResultsValue();

    SearchClose .style.display = "none";

    document.getElementById('inputBtnClose').style.display = 'none';
    document.getElementById('inputMinYear').value = "";
    document.getElementById('inputMaxYear').value = "";
    document.getElementById('inputMinPrice').value = "";
    document.getElementById('inputMaxPrice').value = "";

    document.getElementById('filterFull').innerHTML = "";
    
    showAllAds(shuffledCars);
});

// Filter code
document.getElementById('inputBtn').addEventListener('click', () => {
    const yearMin = document.getElementById('inputMinYear').value || 0;
    const yearMax = document.getElementById('inputMaxYear').value || 9999;
    const priceMin = document.getElementById('inputMinPrice').value || 0;
    const priceMax = document.getElementById('inputMaxPrice').value || Infinity;
    
    // console.log(yearMin, yearMax, priceMin, priceMax); // Debug (for testing)


    if( !isNaN(yearMin) && !isNaN(yearMax) && !isNaN(priceMin) && !isNaN(priceMax)) {
        typeSort(typeSortValue);

        years = shuffledCars.filter((el) => {
            return el.year >= yearMin && el.year <= yearMax && el.price >= priceMin && el.price <= priceMax;
        });

        container.innerHTML = "";

        document.getElementById('result2').innerHTML = translations[currentLang].avgPrice + Math.floor(soPrice(years) * 100) / 100;
        document.getElementById('filterFull').innerHTML = translations[currentLang].year + " " + yearMin + "-" + yearMax + " " + translations[currentLang].price + " " + priceMin + "-" + priceMax + "zł";

        
        document.getElementById('inputBtnClose').style.display = 'block';
        
        isFiltered = true;
        typeSort(typeSortValue);
        
        showAllAds(years);
        updateResultsValue();
    }
});

// Filter code Close
document.getElementById('inputBtnClose').addEventListener('click', () => {
    isFiltered = false;

    document.getElementById('inputBtnClose').style.display = 'none';
    document.getElementById('modal').style.display = 'none';

    document.getElementById('inputMinYear').value = "";
    document.getElementById('inputMaxYear').value = "";
    document.getElementById('inputMinPrice').value = "";
    document.getElementById('inputMaxPrice').value = "";

    typeSort(typeSortValue);

    document.getElementById('result2').innerHTML = translations[currentLang].avgPrice + Math.floor(soPrice(shuffledCars) * 100) / 100;
    
    if (filteredArr) {
        updateResultsValue();

        document.getElementById('filterFull').innerHTML = "";
    } else {
        document.getElementById('result3').innerHTML = "";
        document.getElementById('filterFull').innerHTML = "";
    }
    


    showAllAds(shuffledCars);
});