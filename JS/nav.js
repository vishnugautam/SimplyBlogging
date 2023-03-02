fetch("nav.html")
  .then((res) => res.text())
  .then((text) => {
    // selecting the script tag which has the id of below
    let oldelem = document.querySelector("script#replace_with_navbar");
    // creating a new div element
    let newelem = document.createElement("div");
    // putting the text into the new div element
    newelem.innerHTML = text;
    // parentNode returns the parent node of oldelem which is the body
    // The replaceChild() method replaces a child node with a new node.
    oldelem.parentNode.replaceChild(newelem, oldelem);
  });
