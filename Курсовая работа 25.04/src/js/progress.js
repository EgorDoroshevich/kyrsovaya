 import { setData } from "./local.js";
 import { doneData } from "./local.js";
 import { removeProg } from "./local.js";
 import { outText } from "./app.js";
 import { showCard } from "./maketodo.js";
 import { doneCard } from "./done.js";
 import { base } from "./app.js";
 import { getElems } from "./app.js";
 import { counter2 } from "./counter.js";
 import { array } from "./app.js";
 import { counter } from "./counter.js";
 import { done } from "./app.js";
 import { counter3 } from "./counter.js";


 export function progCard(){
    outText.innerHTML = '';
    base.forEach((obj, idx) => {
        outText.innerHTML += addProg(obj, idx);
    })
    let btns = getElems('.user__back');
    let btnsDel = getElems('.user__del');
    let btnsDone =getElems('.user__done');
   counter2();
   backCard(btns);
   delProg(btnsDel);
   addDone(btnsDone);
 }

export function addProg(obj, idx) {
    return `<div class="card__user__name"  data-cardid = '${idx}' >
    <p class = "logo__card">${obj.logo}</p>
    <p class="user__title__level">${obj.text}</p>
    <p class="user__name">${obj.name}</p>
    <a class = "user__back fa-solid fa-reply"></a>
    <a class = "user__del fa-solid fa-trash"></a>
    <a class = "user__done fa-solid fa-pen-nib"> in done </a>
    </div>`
}
export function backCard(btns){
    btns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            base.forEach((obj, idx) => {
                if (e.target.parentElement.dataset.cardid == idx){
                    array.push(obj);
                    base.splice(idx, 1);
                    e.target.parentElement.remove();
                    removeProg();
                    setData();
                    progCard();
                    showCard();
                    counter2();
                    counter();
                }
            })
        })
    })

}
export function delProg(btnsDel){
btnsDel.forEach((btnDel) => {
    btnDel.addEventListener('click', (e) => {
base.forEach((obj, idx) => {
    if (e.target.parentElement.dataset.cardid == idx){
        obj.status = false;
        base.splice(idx, 1);
        e.target.parentElement.remove();
        progCard();
        counter2();
        removeProg();
    }
})
    })
})

}
export function addDone(btnsDone){
    btnsDone.forEach((btnDone) => {
        btnDone.addEventListener('click', (e) => {
            base.forEach((obj, idx) => {
                if(e.target.parentElement.dataset.cardid == idx){
                    obj.status = true;
                    done.push(obj);
                    base.splice(idx, 1);
                    e.target.parentElement.remove();
                    removeProg();
                    doneData();
                    progCard();
                    doneCard();
                    counter3();
                }
            })
        })
    })
}