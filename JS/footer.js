fetch("footer.html")
  .then((response) => response.text())
  .then((text) => {
    let oldElem = document.getElementById("replace_with_footer");
    let newElem = document.createElement("div");
    newElem.innerHTML = text;
    oldElem.parentNode.replaceChild(newElem, oldElem);
  });
