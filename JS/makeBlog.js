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

  output += `<div class="container-lg border my-5">
              <div class="row">`;
  apiResult.forEach((item) => {
    output += `<div class="col-md-4 col-lg-3 col-sm-6 g-4">
    <div class="card" style="width: 18rem">
    <img src="${item.image}" class="car-img-top" />
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">${item.description}</p>
      <a class="btn btn-primary" href="">go somewhere</a>
    </div>
  </div>
  </div>`;
  });
  output += `</div></div>`;
  main.innerHTML = output;
}
function error() {
  console.log(error);
}
makeBlog().then(showCard).catch(error);
