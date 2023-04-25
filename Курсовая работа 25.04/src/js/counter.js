
import { total1 } from "./app.js";
import { total2 } from "./app.js";
import { total3 } from "./app.js";
import { array } from "./app.js";
import { done } from "./app.js";
import { base } from "./app.js";


export function counter() {
    total1.innerHTML = "0";
 for (let i = 0; i < array.length; i++){
    if (array.length == 0){
        total1.innerHTML = 0;
    }
    else {
        total1.innerHTML = i + 1;
    }
 }
}
 export function counter2(){
        total2.innerHTML = "0";
    for (let i = 0; i < base.length; i++) {
        if (base.length == 0) {
            total2.innerHTML = 0;
        }
        else {
            total2.innerHTML = i + 1;
        }
    }
}
export function counter3(){
    total3.innerHTML = "0";
    for (let i = 0; i < done.length; i++) {
        if (done.length == 0) {
            total3.innerHTML = 0;
        }
        else {
            total3.innerHTML = i + 1;
        }
    }
}