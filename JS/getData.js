"use strict";

class Blog {
  constructor(title, description, image) {
    this.title = title;
    this.description = description;
    this.image = image;
  }
}

var data = new Array();

function getData() {
  alert("Thanks for submitting the form!");

  let title = document.forms["myForm"]["title"].value;
  let description = document.forms["myForm"]["description"].value;
  // let image  = document.getElementById("image").value but it produced an not allowed to load local resource img src error
  // Not allowed to load local resource: file:///C:/fakepath/cat.jfif
  let image = document.getElementById("image").files[0].name;

  image = "../images/" + image;
  console.log(image);

  const obj = new Blog(title, description, image);
  var data = JSON.parse(sessionStorage.getItem("apiResult") || "[]");
  //   console.log(data);

  data.push(obj);
  //   console.log(data);
  // Storing the updated value into session storage
  sessionStorage.setItem("apiResult", JSON.stringify(data));

  document.forms["myForm"]["title"].value = "";
  document.forms["myForm"]["description"].value = "";
  document.getElementById("image").value = "";

  //   sessionStorage.setItem("apiResult", data);

  return true;
}
