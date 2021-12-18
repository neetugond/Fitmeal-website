

var Item = JSON.parse(localStorage.getItem("productCartItem"));
console.log(Item);

displayitem(Item);

function displayitem(Item) {

  Item.map(function (item) {
    var image = document.createElement("img");
    image.setAttribute("src", item.image_url);
    image.setAttribute("class", "imgdiv");

    var pPrice = document.createElement("p");
    pPrice.textContent = item.price;
    pPrice.setAttribute("class", "price");

    var pname = document.createElement("p");
    pname.setAttribute("class", "name");
    pname.textContent = item.name;


    var pdetail = document.createElement("p");
    pdetail.textContent = item.detail;
    pdetail.setAttribute("class", "detail");

    var divcont = document.createElement("div");
    divcont.setAttribute("class", "divCont");
    divcont.append(image, pname ,pPrice, pdetail);

    document.querySelector(".mainCart").append(divcont);
  });
}



var count = 0;
var totalList = Item.reduce(function (acc, cv) {
  count++;
  return acc + Number(cv.price);
}, 0);
console.log(count);
// console.log(total);
document.getElementById("total").innerHTML = `<h3> Total cost is ₹ ${
  totalList
}</h3>`;

document.getElementById("checkOut").addEventListener("click", function () {
  window.location.href = "payment.html";
});
document.getElementById(
  "itemTotal"
).innerHTML = `<p>Total item (${count}-items)</p>`;

document.getElementById("cross").addEventListener("click", function () {
  window.location.href = "product.html";
});



var count = 0;
var total1 = yourItem.reduce(function (acc, cv) {
  count++;
  return acc + Number(cv.price);
}, 0);
console.log(count);
// console.log(total);
document.getElementById("total").innerHTML = `<h3> Total cost is ₹ ${
  total1 
}</h3>`;

document.getElementById("checkout").addEventListener("click", function () {
  window.location.href = "payment.html";
});
document.getElementById(
  "totalitem"
).innerHTML = `<p>Total item (${count}-items)</p>`;

document.getElementById("check").addEventListener("click", function () {
  window.location.href = "product.html";
});
