const adData = JSON.parse(localStorage.getItem("selectedAd"));

const container = document.getElementById("ad-container");

if (adData) {
  document.title = adData.name + " | Mini-OLX";

  container.innerHTML = `
    <div class="carousel">
      <img src="${adData.img}" alt="Фото">
    </div>
        
    <div class="title-car">
        <h1>${adData.name}</h1>
        <p>Rok: ${adData.year}</p>
        <p>Cena: ${adData.price} zł</p>
      
      <div class="details">
        <h2>Szczególy</h2>
        <hr>
        <div details-block>
          <p>Przebieg ${adData.mileage} km</p>
        </div>
      </div>
    </div>

    <div class="btns-info">
        <button class="btn-1">Napisz</button>
        <button class="btn-2">Zadzwoń</button>
    </div>
  `;
} else {
  container.innerHTML = "<p>Ogloszenie nie znaleziono.</p>";
};


const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("modalClose");

document.querySelector(".carousel img").addEventListener("click", () => {
  modal.style.display = "block";
  modalImg.src = adData.img;
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});