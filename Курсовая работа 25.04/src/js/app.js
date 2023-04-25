import { getData } from "./maketodo.js";
import { counter } from "./counter.js";
import { counter2 } from "./counter.js";
import { counter3 } from "./counter.js";
import { showCard } from "./maketodo.js";
import { doneCard } from "./done.js";
import { progCard } from "./progress.js";
import { showCard } from "./maketodo.js";
import { counter3 } from "./counter.js";
import { counter2 } from "./counter.js";
import { counter } from "./counter.js";
import { progCard } from "./progress.js";


export function getElem(elem) {
    return document.querySelector(elem);
}
 export function getElems(elems) {
    return document.querySelectorAll(elems);
}
// date
let datanow = document.querySelector('.datanow');
function setDate() {
    let date = new Date()
    datanow.innerHTML = `${addDate(date.getDate())}.${addDate(date.getMonth() + 1)}.${addDate(date.getFullYear())}`;
}
function addDate(num) {
    if (num >= 1 && num <= 9) {
        return "0" + num;
    }
    else {
        return num;
    }
}
setDate();

// popup
let link = getElem('.link');
let popup = getElem('.popup');
let exit = getElem('.popup__close');

link.addEventListener('click', () => {
    popup.style.visibility = "visible";
    popup.style.opacity = "1";
})

export function closePopup() {
    popup.style.visibility = "hidden";
    popup.style.opacity = "0";
    
}
exit.addEventListener('click', closePopup);
// form
export let inputUsers = getElems('.popup__input');
export let outLogo = getElem('.out__logo');
export let outText = getElem('.out__text');
export let outName = getElem('.out__name');
export let form = getElem('form');
export let logoUser = form.elements.logoUser;
export let textUser = form.elements.textUser;
export let nameUser = form.elements.nameUser;
export let total1 = getElem('.total-crad-make');
export let total2 = getElem('.total-crad-progress');
export let total3 = getElem('.total-crad-done');
export let cardData = getElem('.popup__card__data');
export let textar = getElem('.textar');
export let author = getElem('.author__name');
export let array = JSON.parse(localStorage.getItem('array')) || [];
export let base = JSON.parse(localStorage.getItem('base')) || [];
export let done = JSON.parse(localStorage.getItem('done')) || [];



export function GetDataUser(logo, text, name) {
    this.logo = logo;
    this.text = text;
    this.name = name;
    this.status = false;
}


form.addEventListener('submit', getData);


counter(); 
counter2();
counter3();
showCard(array);
progCard(base);
doneCard(done);

export function addValid(input){
    let parent = input.parentNode;
    parent.classList.add('error');
}
export function removeValid(input){
    let parent = input.parentNode;
    if(parent.classList.contains('error')) {
        parent.classList.remove('error');
    }
}
export const popupValid = {
topic : 'Ваша тема введена некоректно',
discription : 'Введите суть вашего вопроса',
name : 'Ваше имя введено некоректно',
inputTop : 'Поле не должно быть пустым',
};
export function clearData(elems) {
    elems.forEach(elem => {
        elem.value = "";
    })
}



