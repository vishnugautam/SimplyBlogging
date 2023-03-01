function makeBlog() {
  let promise = new Promise(function (resolve, reject) {
    var apiResult = new Array();
    apiResult = JSON.parse(sessionStorage.getItem("apiResult") || "[]");
    // console.log(apiResult);

    if (apiResult.length != 0) {
      resolve(apiResult);
      //   console.log(apiResult);
    } else {
      reject("no data found");
    }
  });

  //   console.log(apiResult);
  return promise;
}

function showCard(apiResult) {
  const main = document.getElementById("main");
  console.log(apiResult);
  let output = "";

  output += `<div>`;
  apiResult.forEach((item) => {
    output += `<div>
  <img src=${item.image}>
  <p>${item.title}</p>
  <p>${item.description}</p>
  `;
  });
  main.innerHTML = output;
}
function error() {
  console.log(error);
}
makeBlog().then(showCard).catch(error);
