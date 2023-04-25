import { outLogo } from "./app.js";
import { GetDataUser } from "./app.js";
import { removeValid } from "./app.js";
import { addValid } from "./app.js";
import { setData } from "./local.js";
import { clearData } from "./app.js";
import { closePopup } from "./app.js";
import { counter } from "./counter.js";
import { array } from "./app.js";
import { getElems } from "./app.js";
import { popupValid } from "./app.js";
import { progCard } from "./progress.js";
import { cardData } from "./app.js";
import { author } from "./app.js";
import { logoUser } from "./app.js";
import { nameUser } from "./app.js";
import { addValid } from "./app.js";
import { array } from "./app.js";
import { base } from "./app.js";
import { removeItem } from "./local.js";
import { progData } from "./local.js";


 export function getData(e) {
    e.preventDefault();
    let data = new GetDataUser(logoUser.value, textUser.value, nameUser.value);
        cardData.innerHTML = '';
        author.innerHTML = '';   
        removeValid(logoUser);
        removeValid(nameUser);
        if(logoUser.value == ''){
            addValid(logoUser);
            cardData.textContent = popupValid.inputTop;
           }
            else if (nameUser.value == ''){
            addValid(nameUser);
            author.textContent = popupValid.inputTop;
           }
        else{
    array.push(data);
    setData();
    clearData([logoUser, textUser, nameUser]);
    closePopup();
    showCard();
    counter(); 
    }
}
export function showCard() {
    outLogo.innerHTML = "";
    array.forEach((obj, idx) => {
        outLogo.innerHTML += addCard(obj, idx);
    })
    let btns = getElems(".user__add");
    let btnsDel = getElems(".user__delete");
    moveCard(btns);
    delCard(btnsDel);
}
export function addCard(obj, idx) {
    return `
   <div class = "card__user__name" data-cardid ="${idx}">
   <p class = "first__tittle">${obj.logo}</p>
   <p class = "second__tittle">${obj.text}</p>
   <p class = "therd__tittle">${obj.name}</p>
   <a class = "user__add fa-regular fa-turn-down-right">in progress</a>
   <a class = "user__delete  fa-solid fa-trash"></a>
   </div>
    `
}
export function moveCard(btns) {
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            array.forEach((obj, idx) => {
                if (e.target.parentElement.dataset.cardid == idx) {
                    base.push(obj);
                    array.splice(idx, 1);
                    e.target.parentElement.remove();
                    progData();
                    showCard();
                    progCard();
                    counter();
                    removeItem();
                }
            })
            console.log(array);
            console.log(base);
        })
    })
}
export function delCard(btnsDel){
    btnsDel.forEach((btnDel) => {
        btnDel.addEventListener('click', (e) => {
          array.forEach((obj, idx) => {
    if (e.target.parentElement.dataset.cardid == idx){
        obj.status = false;
        array.splice(idx, 1);
        e.target.parentElement.remove();
        showCard();
        counter();
        removeItem();
    }
})
        })
    })
}