const mediaQuery = window.matchMedia("(max-width: 820px)");

const form = document.getElementById("searchForm");
const searchCenter = document.getElementById("search-center");
const search_Nav = document.getElementById("nav-search");

function handleResize(e) {
  if (e.matches) {
    searchCenter.appendChild(form);
    searchCenter.style.display = 'flex';

  } else {
    search_Nav.appendChild(form);
    searchCenter.style.display = 'none';
  }
}

mediaQuery.addEventListener("change", handleResize);


handleResize(mediaQuery);


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
    modal.style.display = 'none';
   }
});

// Ok BtnOkClose
const btnOkClose = document.getElementById('inputBtn');

btnOkClose.onclick = function() {
    document.getElementById('modal').style.display = 'none';
};

// Search
const btnSearch = document.getElementById('btnSearch');

document.getElementById('inpSearch').addEventListener('focus', () => {
    btnSearch.style.boxShadow = "0 0 8px #ccc";
});

document.getElementById('inpSearch').addEventListener('blur', () => {
    btnSearch.style.boxShadow = "none";
});
