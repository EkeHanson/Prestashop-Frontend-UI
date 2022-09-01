// alert ("this page says UHN!")
function addAccount() {
    const domToAdd = document.getElementById("form");
    const clone = domToAdd.cloneNode(true);
    document.getElementById("tbl").appendChild(clone);
  }