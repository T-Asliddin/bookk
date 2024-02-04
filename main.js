// let form = document.getElementById("form");
// let inputName = document.getElementById("name");
// let inputPass = document.getElementById("password");
let searchForm = document.querySelector(".search_form");
let search = document.querySelector(".search");
let moreinfo = document.querySelectorAll(".info_btn");
let read = document.querySelectorAll(".read_btn");
let info_book = document.querySelectorAll(".info_img_1");
let close_booK = document.querySelectorAll(".info_img_2");
let list = document.querySelector(".content_list");
let infoList = document.querySelector(".info_list");
let content = document.querySelector(".content");
console.log(content);

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let nametest = inputName.value;
//   let passtest = inputPass.value;
//   let regex = /^[a-zA-Z]{4,16}$/;
//   let resname = regex.test(nametest);
//   let respass = regex.test(passtest);
//   if (resname && respass) {
//     localStorage.setItem(
//       "name",
//       JSON.stringify([
//         {
//           userName: nametest,
//           password: passtest,
//         },
//       ])
//     );
//     document.location = "index.html";
//   }
// });

fetch("https://openlibrary.org/people/mekBot/books/already-read.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.reading_log_entries.map((item) => {
      let nom = item.work.title;
      // console.log(nom);
      searchForm.addEventListener("input", (e) => {
        e.preventDefault();
        if (nom == search.value) {
          list.setAttribute("class", "none");
          let box = document.createElement("div");
          box.setAttribute("class", "content_item");
          box.innerHTML = `
            <img class="img" src="./img/img.png" alt="img" />
            <h1 class="content_tile">${item.work.title}</h1>
            <p class="content_name des">${item.work.author_names[0]}</p>
            <p class="year des">${item.work.first_publish_year}</p>
            <p class="none">${item.work.cover_edition_key}</p>
            <p class="none">${item.work.lending_edition_s}</p>
            <p class="none">${item.work.cover_id}</p>
            <button class="book_btn">Bookmark</button>
            <button class="info_btn">More Info</button>
            <button class="read_btn">Read</button>
          `;
          content.appendChild(box);
        }
      });
    });
  });

function x(nam, author, year, Publishers, Categories, Pages) {
  let item = document.createElement("li");
  item.setAttribute("class", "content_item");
  item.innerHTML = `<li>
  <img class="img" src="./img/img.png" alt="img" />
  <h1 id="title" class="content_tile">${nam}</h1>
  <p class="content_name des">${author}</p>
  <p class="year des">${year}</p>
  <p class="none">${Publishers}</p>
  <p class="none">${Categories}</p>
  <p class="none">${Pages}</p>
  <button class="book_btn">Bookmark</button>
  <button class="info_btn">More Info</button>
  <button class="read_btn">Read</button>
</li>`;
  list.appendChild(item);
}

fetch("https://openlibrary.org/people/mekBot/books/already-read.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.reading_log_entries.map((item, index) => {
      if (index < 6) {
        x(
          item.work.title,
          item.work.author_names[0],
          item.work.first_publish_year,
          item.work.cover_edition_key,
          item.work.lending_edition_s,
          item.work.cover_id
        );
      }
    });
  });

document.addEventListener("click", (e) => {
  if (e.target.classList[0] == "book_btn") {
    let name = e.target.parentElement.children[1].textContent;
    let author = e.target.parentElement.children[2].textContent;
    let published = e.target.parentElement.children[4].textContent;
    let publishers = e.target.parentElement.children[5].textContent;
    let categories = e.target.parentElement.children[6].textContent;
    let page = e.target.parentElement.children[7].textContent;
    console.log(published, page);
    let infoItem = document.createElement("li");
    infoItem.setAttribute("class", "info_item");
    infoItem.innerHTML = ` <h1 class="info_item_title">${name}</h1>
    <p class="info_name">${author}</p>
    <img
      class="info_img_1"
      src="./img/icons8-book-24.png"
      alt="book"
    />
    <img
      class="info_img_2"
      src="./img/icons8-close-22.png"
      alt="close"
    />`;
    infoList.append(infoItem);
    document.addEventListener("click", (e) => {
      if (e.target.classList[0] == "info_img_1") {
        overla.setAttribute("class", "overlay");
        modall.setAttribute("class", "modal");
        modall.children[0].children[0].textContent = name;
        modall.children[2].children[0].children[0].children[0].textContent =
          author;
        modall.children[2].children[1].children[0].children[0].textContent =
          year;
        modall.children[2].children[2].children[0].children[0].textContent =
          published;
        modall.children[2].children[3].children[0].children[0].textContent =
          publishers;
        modall.children[2].children[4].children[0].children[0].textContent =
          categories;
        modall.children[2].children[5].children[0].children[0].textContent =
          page;
      }
    });
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList[0] == "info_img_2") {
    e.target.parentElement.setAttribute("class", "hidden");
  }
});

let overla = document.querySelector(".overla");
let modall = document.querySelector(".modall");

document.addEventListener("click", (e) => {
  if (e.target.classList[0] == "info_btn") {
    overla.setAttribute("class", "overlay");
    modall.setAttribute("class", "modal");
    let name = e.target.parentElement.children[1].textContent;
    let author = e.target.parentElement.children[2].textContent;
    let year = e.target.parentElement.children[3].textContent;
    let published = e.target.parentElement.children[4].textContent;
    let publishers = e.target.parentElement.children[5].textContent;
    let categories = e.target.parentElement.children[6].textContent;
    let page = e.target.parentElement.children[7].textContent;
    modall.children[0].children[0].textContent = name;
    modall.children[2].children[0].children[0].children[0].textContent = author;
    modall.children[2].children[1].children[0].children[0].textContent = year;
    modall.children[2].children[2].children[0].children[0].textContent =
      published;
    modall.children[2].children[3].children[0].children[0].textContent =
      publishers;
    modall.children[2].children[4].children[0].children[0].textContent =
      categories;
    modall.children[2].children[5].children[0].children[0].textContent = page;
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList == "modal_close") {
    modall.setAttribute("class", "modall");
    overla.setAttribute("class", "overla");
  }
});
