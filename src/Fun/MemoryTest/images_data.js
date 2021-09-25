import a1 from "../images/memory_test/1.webp";
import a2 from "../images/memory_test/2.webp";
import a3 from "../images/memory_test/3.webp";
import a4 from "../images/memory_test/4.webp";
import a5 from "../images/memory_test/5.webp";
import a6 from "../images/memory_test/6.webp";
import a7 from "../images/memory_test/7.webp";
import a8 from "../images/memory_test/8.webp";
import a9 from "../images/memory_test/9.webp";
import a10 from "../images/memory_test/10.webp";
import a11 from "../images/memory_test/11.webp";
import a12 from "../images/memory_test/12.webp";
import a13 from "../images/memory_test/13.webp";
import a14 from "../images/memory_test/14.webp";
import a15 from "../images/memory_test/15.webp";
import a16 from "../images/memory_test/16.webp";
import a17 from "../images/memory_test/17.webp";
import a18 from "../images/memory_test/18.webp";

export const images_list = [
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15,
  a16,
  a17,
  a18,
];
const images_list_easy = [
  { src: a1, name: "a1" },
  { src: a2, name: "a2" },
  { src: a3, name: "a3" },
  { src: a4, name: "a4" },
  { src: a5, name: "a5" },
  { src: a6, name: "a6" },
  { src: a7, name: "a7" },
  { src: a8, name: "a8" },
  { src: a1, name: "a1" },
  { src: a2, name: "a2" },
  { src: a3, name: "a3" },
  { src: a4, name: "a4" },
  { src: a5, name: "a5" },
  { src: a6, name: "a6" },
  { src: a7, name: "a7" },
  { src: a8, name: "a8" },
];
const images_list_hard = [
  { src: a1, name: "a1" },
  { src: a2, name: "a2" },
  { src: a3, name: "a3" },
  { src: a4, name: "a4" },
  { src: a5, name: "a5" },
  { src: a6, name: "a6" },
  { src: a7, name: "a7" },
  { src: a8, name: "a8" },
  { src: a9, name: "a9" },
  { src: a10, name: "a10" },
  { src: a11, name: "a11" },
  { src: a12, name: "a12" },
  { src: a13, name: "a13" },
  { src: a14, name: "a14" },
  { src: a15, name: "a15" },
  { src: a16, name: "a16" },
  { src: a17, name: "a17" },
  { src: a18, name: "a18" },
  { src: a1, name: "a1" },
  { src: a2, name: "a2" },
  { src: a3, name: "a3" },
  { src: a4, name: "a4" },
  { src: a5, name: "a5" },
  { src: a6, name: "a6" },
  { src: a7, name: "a7" },
  { src: a8, name: "a8" },
  { src: a9, name: "a9" },
  { src: a10, name: "a10" },
  { src: a11, name: "a11" },
  { src: a12, name: "a12" },
  { src: a13, name: "a13" },
  { src: a14, name: "a14" },
  { src: a15, name: "a15" },
  { src: a16, name: "a16" },
  { src: a17, name: "a17" },
  { src: a18, name: "a18" },
];
var random = null;
// generate random number
const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

// function to fill taken indexes list
const fillIndexes = (max) => {
  var taken_indexes = [];
  taken_indexes.length = 0;
  while (taken_indexes.length !== max) {
    random = getRandomInt(max);
    if (taken_indexes.indexOf(random) < 0) {
      taken_indexes.push(random);
    }
  }
  return taken_indexes;
};

// fill a list with lingth of 16 from main list images
export const fillListImages = (length) => {
  var indexesList = fillIndexes(length);
  var temp_list = [];
  for (let i = 0; i < length; i++) {
    var item = { id: "", name: "", src: "", className: "" };
    item.id = i;
    if (length === 16) {
      item.name = images_list_easy[indexesList[i]].name;
      item.src = images_list_easy[indexesList[i]].src;
    }
    if (length === 36) {
      item.name = images_list_hard[indexesList[i]].name;
      item.src = images_list_hard[indexesList[i]].src;
    }
    item.className = `img-item${i}`;
    temp_list.push(item);
  }
  return temp_list;
};
