
import { progCard } from "./progress.js";
import { counter3 } from "./counter.js";
import { outName } from "./app.js";
import { done } from "./app.js";
import { getElems } from "./app.js";
import { base } from "./app.js";
import { removeDone } from "./local.js";
import { progData } from "./local.js";


export function doneCard(){
    outName.innerHTML = '';
    done.forEach((obj,idx) => {
      outName.innerHTML += addUserDone(obj, idx);
}) 
    let btns = getElems('.back__progress');
    let btnsDel =getElems('.gelete__done');
    counter3();
   backProg(btns);
   delDone(btnsDel);
}
export function addUserDone(obj, idx){
    return `<div class="card__user__name"  data-cardid = '${idx}' >
    <p class="user__tittle">${obj.logo}</p>
    <p class="user__title__level">${obj.text}</p>
    <p class="user__age">${obj.name}</p>
    <a class = "back__progress fa-solid fa-reply"></a>
    <a class = "gelete__done  fa-solid fa-trash"></a>
    </div>`
 }
export function backProg (btns){
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            done.forEach((obj, idx) => {
                if(e.target.parentElement.dataset.cardid == idx){
                    obj.statys = true;
                    base.push(obj);
                    done.splice(idx, 1);
                    e.target.parentElement.remove();
                    removeDone();
                    progData();
                    doneCard();
                    progCard();
                    counter3();
                }
            })
        })
    })
}
 export function delDone(btnsDel){
    btnsDel.forEach((btnDel) => {
        btnDel.addEventListener('click', (e) => {
            done.forEach((obj, idx) => {
                obj.status = true;
                done.splice(idx, 1);
                e.target.parentElement.remove();
                removeDone();
                doneCard();
                counter3();
            })
        })
    })
}