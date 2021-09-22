import a1 from "../images/memory_test/1.png";
import a2 from "../images/memory_test/2.png";
import a3 from "../images/memory_test/3.png";
import a4 from "../images/memory_test/4.png";
import a5 from "../images/memory_test/5.png";
import a6 from "../images/memory_test/6.png";
import a7 from "../images/memory_test/7.png";
import a8 from "../images/memory_test/8.png";
import a9 from "../images/memory_test/9.png";
import a10 from "../images/memory_test/10.png";
import a11 from "../images/memory_test/11.png";
import a12 from "../images/memory_test/12.png";
import a13 from "../images/memory_test/13.png";
import a14 from "../images/memory_test/14.png";
import a15 from "../images/memory_test/15.png";
import a16 from "../images/memory_test/16.png";
import a17 from "../images/memory_test/17.png";
import a18 from "../images/memory_test/18.png";
import a19 from "../images/memory_test/19.png";
import a20 from "../images/memory_test/20.png";
import a21 from "../images/memory_test/21.png";
import a22 from "../images/memory_test/22.png";
import a23 from "../images/memory_test/23.png";
import a24 from "../images/memory_test/24.png";
import a25 from "../images/memory_test/25.png";
import a26 from "../images/memory_test/26.png";
import a27 from "../images/memory_test/27.png";
import a28 from "../images/memory_test/28.png";
import a29 from "../images/memory_test/29.png";
import a30 from "../images/memory_test/30.png";
import a31 from "../images/memory_test/31.png";
import a32 from "../images/memory_test/32.png";
import a33 from "../images/memory_test/33.png";
import a34 from "../images/memory_test/34.png";
import a35 from "../images/memory_test/35.png";
import a36 from "../images/memory_test/36.png";

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
  a19,
  a20,
  a21,
  a22,
  a23,
  a24,
  a25,
  a26,
  a27,
  a28,
  a29,
  a30,
  a31,
  a32,
  a33,
  a34,
  a35,
  a36,
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
