let closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', function () {
    document.querySelector('.drop-down-menu.__header').classList.toggle('active');
    document.querySelector('.burger span').classList.toggle("active");
})

document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.drop-down-menu.__header').classList.toggle('active');
    document.querySelector('.burger span').classList.toggle("active");
});


let dropDownBtnHeader = document.querySelector('.nav-list__item.__header.active');
let dropDownInner = document.querySelector('.drop-down-inner.__header-inner');

dropDownBtnHeader.addEventListener('click', function () {
    dropDownInner.classList.toggle('__header-inner__active');
    document.querySelector('.arrow-drop-down-header').classList.toggle('active-rotate');
})



//
// let aboutUsDropDown = document.querySelector('#about-us');
//
//
// aboutUsDropDown.addEventListener("mouseover", function() {
//     if(document.documentElement.clientWidth >= 992) {
//         dropDownInner.style.visibility = 'visible';
//         dropDownInner.style.zIndex = '1000';
//         dropDownInner.style.opacity = '1';
//         this.addEventListener("mouseout", function(){
//             dropDownInner.style.visibility = 'hidden';
//             dropDownInner.style.zIndex = '0';
//             dropDownInner.style.opacity = '0';
//         });
//     }
//
//     });
//
