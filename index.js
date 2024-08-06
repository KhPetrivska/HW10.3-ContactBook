"use strict";
//debugger
const obj = {
  allData: [
    { name: "Anna", number: 9734564332, emailAdress: "annaD@gmail.com" },
    { name: "Alex", number: 3413738979, emailAdress: "alexR@gmail.com" },
    { name: "Victor", number: 4413738979, emailAdress: "victorW@gmail.com" },
  ],
  search: function (nameForSearch) {
    let matchingObj = null;
    this.allData.forEach((element) => {
      if (element.name === nameForSearch) {
        matchingObj = Object.assign({}, element);
      }
    });
    return matchingObj;
  },
  add: function (name, number, email) {
    this.allData.push({
      name: name,
      number: number,
      emailAdress: email,
    });
  },
};
console.log(obj);
console.log(obj.search("Alex"));
obj.add("Jo", 3413738979, "joesEmail@gmail.com");
console.log(obj);
