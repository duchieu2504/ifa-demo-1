const headerElement = document.querySelector(".header");
const imageScoll = document.querySelector(".site-header__logo-image-scoll");
const image = document.querySelector(".site-header__logo-image");
const slider = document.querySelector("#slider");

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop < 120) {
        headerElement.classList.remove("active");
        // slider.style.marginTop = "0px";
    }
    if (scrollTop >= 120) {
        headerElement.classList.add("active");
        // slider.style.marginTop = "182px";
    }
});

// set min-high section file introduce.html
const sectionElement = document.querySelectorAll(".section");
const sectionImg = document.querySelectorAll(".section_img_i")[1];

const sectionElementArray = [...sectionElement];
const setMinHeightSection = () => {
    if (sectionImg) {
        if (window.innerWidth > 991) {
            const getHeight = sectionImg.offsetHeight;
            sectionElementArray.map((item) => {
                item.style.minHeight = `${getHeight}px`;
            });
        }
    }
};

const windowWidth = window.innerWidth;
const imageSection1Width = document.querySelectorAll(
    ".section_1 .section_img",
)[1];
const imageSection3Width = document.querySelectorAll(
    ".section_3 .section_img",
)[1];
const imageSection4Width = document.querySelectorAll(
    ".section_4 .section_img",
)[1];
console.log(imageSection4Width);

const newWidthSize = () => {
    const getwidthImage1 = imageSection1Width.offsetWidth;
    const windowWidthNew = window.innerWidth;
    const getwidthImage3 = imageSection3Width.offsetWidth;
    const getwidthImage4 = imageSection4Width.offsetWidth;
    console.log(
        ((getwidthImage4 - getwidthImage1) / getwidthImage4) * getwidthImage1,
    );
    imageSection3Width.style.width = `calc( 50% + ${
        ((getwidthImage3 - getwidthImage1) / getwidthImage3) * getwidthImage1
    }px)`;
    // imageSection4Width.style.width = `calc( 50% + ${
    //     ((getwidthImage4 - getwidthImage1) / getwidthImage4) * getwidthImage1
    // }px)`;
};

const getWidthResize = () => {
    const scrollX = window.innerWidth || document.documentElement.scrollLeft;
    // console.log("windowWidth", windowWidth);
    // console.log("scrollX", scrollX);
    const ratio = scrollX / windowWidth;
    const bottomSection3Size = 44 * ratio;
    const bottomsection4Size = 106 * ratio;
    imageSection3Width.style.width = `calc( 50% + ${bottomSection3Size}px)`;
    imageSection4Width.style.width = `calc( 50% + ${bottomsection4Size}px)`;
    // console.log(`calc( 50% + ${bottomSize}px)`);
};
// console.log(imageWidth);
window.addEventListener("DOMContentLoaded", () => {
    // getWidthResize();
    newWidthSize();
    setMinHeightSection();
});
window.addEventListener("resize", () => {
    setMinHeightSection();
    getWidthResize();
});
