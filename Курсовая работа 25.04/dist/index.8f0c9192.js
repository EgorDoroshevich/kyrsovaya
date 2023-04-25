function getElem(elem) {
    return document.querySelector(elem);
}
function getElems(elems) {
    return document.querySelectorAll(elems);
}
// date
let datanow = document.querySelector(".datanow");
function setDate() {
    let date = new Date();
    datanow.innerHTML = `${addDate(date.getDate())}.${addDate(date.getMonth() + 1)}.${addDate(date.getFullYear())}`;
}
function addDate(num) {
    if (num >= 1 && num <= 9) return "0" + num;
    else return num;
}
setDate();
// popup
let link = getElem(".link");
let popup = getElem(".popup");
let exit = getElem(".popup__close");
link.addEventListener("click", ()=>{
    popup.style.visibility = "visible";
    popup.style.opacity = "1";
});
function closePopup() {
    popup.style.visibility = "hidden";
    popup.style.opacity = "0";
}
exit.addEventListener("click", closePopup);
// form
let inputUsers = getElems(".popup__input");
let outLogo = getElem(".out__logo");
let outText = getElem(".out__text");
let outName = getElem(".out__name");
let form = getElem("form");
let logoUser = form.elements.logoUser;
let textUser = form.elements.textUser;
let nameUser = form.elements.nameUser;
let total1 = getElem(".total-crad-make");
let total2 = getElem(".total-crad-progress");
let total3 = getElem(".total-crad-done");
let cardData = getElem(".popup__card__data");
let textar = getElem(".textar");
let author = getElem(".author__name");
let array = JSON.parse(localStorage.getItem("array")) || [];
let base = JSON.parse(localStorage.getItem("base")) || [];
let done = JSON.parse(localStorage.getItem("done")) || [];
function GetDataUser(logo, text, name) {
    this.logo = logo;
    this.text = text;
    this.name = name;
    this.status = false;
}
form.addEventListener("submit", getData);
counter();
counter2();
counter3();
showCard(array);
progCard(base);
doneCard(done);
function addValid(input) {
    let parent = input.parentNode;
    parent.classList.add("error");
}
function removeValid(input) {
    let parent = input.parentNode;
    if (parent.classList.contains("error")) parent.classList.remove("error");
}
function getData(e) {
    e.preventDefault();
    let data = new GetDataUser(logoUser.value, textUser.value, nameUser.value);
    cardData.innerHTML = "";
    author.innerHTML = "";
    removeValid(logoUser);
    removeValid(nameUser);
    if (logoUser.value == "") {
        addValid(logoUser);
        cardData.textContent = popupValid.inputTop;
    } else if (nameUser.value == "") {
        addValid(nameUser);
        author.textContent = popupValid.inputTop;
    } else {
        array.push(data);
        setData();
        clearData([
            logoUser,
            textUser,
            nameUser
        ]);
        closePopup();
        showCard();
        counter();
    }
}
const setData = ()=>{
    let arr = JSON.stringify(array);
    localStorage.setItem("array", arr);
};
const progData = ()=>{
    let arr = JSON.stringify(base);
    localStorage.setItem("base", arr);
};
const doneData = ()=>{
    let arr = JSON.stringify(done);
    localStorage.setItem("done", arr);
};
const removeItem = ()=>{
    localStorage.removeItem("array");
    setData();
};
const removeProg = ()=>{
    localStorage.removeItem("base");
    progData();
};
const removeDone = ()=>{
    localStorage.removeItem("done");
    doneData();
};
const popupValid = {
    topic: "Ваша тема введена некоректно",
    discription: "Введите суть вашего вопроса",
    name: "Ваше имя введено некоректно",
    inputTop: "Поле не должно быть пустым"
};
function counter() {
    total1.innerHTML = "0";
    for(let i = 0; i < array.length; i++)if (array.length == 0) total1.innerHTML = 0;
    else total1.innerHTML = i + 1;
}
function counter2() {
    total2.innerHTML = "0";
    for(let i = 0; i < base.length; i++)if (base.length == 0) total2.innerHTML = 0;
    else total2.innerHTML = i + 1;
}
function counter3() {
    total3.innerHTML = "0";
    for(let i = 0; i < done.length; i++)if (done.length == 0) total3.innerHTML = 0;
    else total3.innerHTML = i + 1;
}
function clearData(elems) {
    elems.forEach((elem)=>{
        elem.value = "";
    });
}
function showCard() {
    outLogo.innerHTML = "";
    array.forEach((obj, idx)=>{
        outLogo.innerHTML += addCard(obj, idx);
    });
    let btns = getElems(".user__add");
    let btnsDel = getElems(".user__delete");
    moveCard(btns);
    delCard(btnsDel);
}
function addCard(obj, idx) {
    return `
   <div class = "card__user__name" data-cardid ="${idx}">
   <p class = "first__tittle">${obj.logo}</p>
   <p class = "second__tittle">${obj.text}</p>
   <p class = "therd__tittle">${obj.name}</p>
   <button class = "user__add">Dobavit</button>
   <button class = "user__delete"> ydalit </button>
   </div>
    `;
}
function moveCard(btns) {
    btns.forEach((btn)=>{
        btn.addEventListener("click", (e)=>{
            array.forEach((obj, idx)=>{
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
            });
            console.log(array);
            console.log(base);
        });
    });
}
function delCard(btnsDel) {
    btnsDel.forEach((btnDel)=>{
        btnDel.addEventListener("click", (e)=>{
            array.forEach((obj, idx)=>{
                if (e.target.parentElement.dataset.cardid == idx) {
                    obj.status = false;
                    array.splice(idx, 1);
                    e.target.parentElement.remove();
                    showCard();
                    counter();
                    removeItem();
                }
            });
        });
    });
}
function progCard() {
    outText.innerHTML = "";
    base.forEach((obj, idx)=>{
        outText.innerHTML += addProg(obj, idx);
    });
    let btns = getElems(".user__back");
    let btnsDel = getElems(".user__del");
    let btnsDone = getElems(".user__done");
    counter2();
    backCard(btns);
    delProg(btnsDel);
    addDone(btnsDone);
}
function addProg(obj, idx) {
    return `<div class="card__user__name"  data-cardid = '${idx}' >
    <h2 class = "logo__card">${obj.logo}</h2>
    <p class="user__title__level">${obj.text}</p>
    <h3 class="user__name">${obj.name}</h3>
    <button class = "user__back">back</button>
    <button class = "user__del">delete </button>
    <button class = "user__done"> in done </button>
    </div>`;
}
function backCard(btns) {
    btns.forEach((btn)=>{
        btn.addEventListener("click", (e)=>{
            base.forEach((obj, idx)=>{
                if (e.target.parentElement.dataset.cardid == idx) {
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
            });
        });
    });
}
function delProg(btnsDel) {
    btnsDel.forEach((btnDel)=>{
        btnDel.addEventListener("click", (e)=>{
            base.forEach((obj, idx)=>{
                if (e.target.parentElement.dataset.cardid == idx) {
                    obj.status = false;
                    base.splice(idx, 1);
                    e.target.parentElement.remove();
                    progCard();
                    counter2();
                    removeProg();
                }
            });
        });
    });
}
function addDone(btnsDone) {
    btnsDone.forEach((btnDone)=>{
        btnDone.addEventListener("click", (e)=>{
            base.forEach((obj, idx)=>{
                if (e.target.parentElement.dataset.cardid == idx) {
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
            });
        });
    });
}
function doneCard() {
    outName.innerHTML = "";
    done.forEach((obj, idx)=>{
        outName.innerHTML += addUserDone(obj, idx);
    });
    let btns = getElems(".back__progress");
    let btnsDel = getElems(".gelete__done");
    counter3();
    backProg(btns);
    delDone(btnsDel);
}
function addUserDone(obj, idx) {
    return `<div class="card__user__name"  data-cardid = '${idx}' >
    <p class="user__tittle">${obj.logo}</p>
    <p class="user__title__level">${obj.text}</p>
    <p class="user__age">${obj.name}</p>
    <button class = "back__progress">back progress</button>
    <button class = "gelete__done">delete </button>
    </div>`;
}
function backProg(btns) {
    btns.forEach((btn)=>{
        btn.addEventListener("click", (e)=>{
            done.forEach((obj, idx)=>{
                if (e.target.parentElement.dataset.cardid == idx) {
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
            });
        });
    });
}
function delDone(btnsDel) {
    btnsDel.forEach((btnDel)=>{
        btnDel.addEventListener("click", (e)=>{
            done.forEach((obj, idx)=>{
                obj.status = true;
                done.splice(idx, 1);
                e.target.parentElement.remove();
                removeDone();
                doneCard();
                counter3();
            });
        });
    });
} //validators

//# sourceMappingURL=index.8f0c9192.js.map
