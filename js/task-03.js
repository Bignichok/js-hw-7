const gallery = document.querySelector("#gallery");

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

gallery.insertAdjacentHTML(
  "beforeend",
  images.reduce((acc, elem) => {
    acc += `<li><img src="${elem.url}" alt="${elem.alt}"/></li>`;
    return acc;
  }, "")
);

// images.forEach((elem) => {
//   const galleryListItem = document.createElement("li");
//   const galleryImg = document.createElement("img");
//   galleryListItem.appendChild(galleryImg);
//   galleryImg.setAttribute("src", elem.url);
//   galleryImg.setAttribute("alt", elem.alt);
//   gallery.appendChild(galleryListItem);
// });
