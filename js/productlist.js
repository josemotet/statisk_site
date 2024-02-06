fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showproduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //fang template
  const template = document.querySelector("#smallProductTemplate").content;

  //lav en kopi
  const copy = template.cloneNode(true);

  //ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  if (product.soldout) {
    //produktet er udsolgt
    copy.querySelector("article").classList.add("soldOut");
  }

  //appende
  document.querySelector("main").appendChild(copy);
}

//   <article class="smallProduct">

// <img src="img/bold.webp" alt="bold">

// <h3>Bold</h3>
// <p class="subtle">Bold/Puma</p>
// <p class="price"><span>Prev.</span>250 kr</p>
// <div class="sale">
//     <p>Now DKK 125 kr</p>
//     <p>50%</p>
// </div>

// <a href="produkt.html">Read More</a>

// </article>

// {
//     "id": 1163,
//     "gender": "Men",
//     "category": "Apparel",
//     "subcategory": "Topwear",
//     "articletype": "Tshirts",
//     "season": "Summer",
//     "productionyear": 2011,
//     "usagetype": "Sports",
//     "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
//     "price": 895,
//     "discount": null,
//     "brandname": "Nike",
//     "soldout": 0
// }
