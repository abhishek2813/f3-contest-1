
//feching the data
let p = fetch("https://dummyjson.com/products")
// using .then()
p.then((value)=>{
    //return data in json format
    return value.json()
}).then((data)=>{
console.log(data.products)
//new variable to stor data with flex
let data1="";
data.products.map((values)=>{
    //strore flex data one by one
    data1 +=`<div class="col-md-3">
    <div class="card"">
        <img class="card-img-top" src="${values.images[0]}" alt="Card image" style="width:100%">
        <div class="card-body">
          <div class="row">
            <div class="col-6">
                <p><b>Title</b> : <span>${values.title}</span></p>
            </div>
            <div class="col-6">
                <p><b>Brand</b> : <span>${values.brand}</span></p>
            </div>
          </div>
          <div class="row">
          <div class="col-6">
              <p><strong>Price</strong> : <span><b>$${values.price}</b> </span></p>
          </div>
          <div class="col-6">
              <p>discount Percentage: <span><b>${values.discountPercentage}%</b></span></p>
          </div>
        </div>
          <p><b>Rating</b> : <span>${values.rating}</span></p>
          <p><b>Stock</b> : <span>${values.stock}</span></p>
          <p><b>category</b>  ${values.category}</p>
          <p><b>description :-</b>${values.description}</p>
        </div>
      </div>
</div>`;
})

//cahnge the card with innerHTML
document.getElementById("cards").innerHTML=data1;
}).catch((err)=>{
    //if we get any error
    console.log(err)
})