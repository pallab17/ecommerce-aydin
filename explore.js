
const productsData = [
  {id:1,name:"Shoes",price:30,category:"shoes",image:"https://via.placeholder.com/300"},
  {id:2,name:"Jackets",price:25,category:"clothing",image:"https://via.placeholder.com/300"},
  {id:3,name:"Headphones",price:10,category:"electronics",image:"https://via.placeholder.com/300"},
  {id:4,name:"Plants",price:13,category:"plants",image:"https://via.placeholder.com/300"},
  {id:5,name:"Books",price:3,category:"books",image:"https://via.placeholder.com/300"}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let params = new URLSearchParams(window.location.search);
let category = params.get("category");

document.getElementById("title").innerText =
  "More products in " + category;

const box = document.getElementById("products");

productsData.forEach(p=>{
  if(p.category === category){
    box.innerHTML += `
      <div class="product">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>£${p.price}</p>

        <button onclick="addToCart(${p.id})">Add to Cart</button>
        <span class="itemCount" id="count-${p.id}">0</span>
      </div>
    `;
  }
});

function addToCart(id){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = productsData.find(p=>p.id===id);
  const existing = cart.find(p=>p.id===id);

  if(existing){
    existing.qty++;
  }else{
    cart.push({id:item.id,name:item.name,price:item.price,qty:1});
  }

  localStorage.setItem("cart",JSON.stringify(cart));
  updateItemCount(id);
  updateCartCount();
}

function updateItemCount(id){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = cart.find(p=>p.id===id);
  document.getElementById("count-"+id).innerText = item ? item.qty : 0;
}

function updateCartCount(){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let count = cart.reduce((s,i)=>s+i.qty,0);
  document.getElementById("cartCount").innerText = count;
}

productsData.forEach(p=>updateItemCount(p.id));
updateCartCount();
