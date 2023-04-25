let user_2 = {
  name: "bob",
  age: 44,
  political: true,
  password: "123",
};

function checkAge(user_2) {
  return user_2.age > 18;
}
function checkPassword(user_2) {
  return user_2.password.length >= 5;
}
function checkPolitical(user_2) {
  return user_2.political == true;
}

function isValid(...check) {
  return function (obj) {
    for (let el of check) {
      if (el(obj) == false) return false;
    }
    return true;
  };
}
const form_1_valid = isValid(checkAge, checkPassword, checkPolitical);
const form_2_valid = isValid(checkAge, checkPassword);
const form_3_valid = isValid(checkAge);
console.log(form_1_valid(user_2));
console.log(form_2_valid(user_2));
console.log(form_3_valid(user_2));
