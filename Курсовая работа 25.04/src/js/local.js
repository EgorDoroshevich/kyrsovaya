import { array } from "./app";
import { base } from "./app";
import { done } from "./app";


export const setData = () => {
    let arr = JSON.stringify(array);
    localStorage.setItem('array', arr);
}
export const progData = () => {
    let arr = JSON.stringify(base);
    localStorage.setItem('base', arr);
}
export const doneData = () => {
    let arr = JSON.stringify(done);
    localStorage.setItem('done', arr);
}
export const removeItem = () => {
localStorage.removeItem('array');
setData();
 }
export const removeProg = () => {
    localStorage.removeItem('base');
    progData();
 }
export const removeDone = () => {
    localStorage.removeItem('done');
    doneData();
 }