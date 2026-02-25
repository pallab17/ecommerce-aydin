
const productsData = [
  {id:1,name:"Shoes",price:30,category:"shoes",image:"https://via.placeholder.com/300"},
  {id:2,name:"Jackets",price:25,category:"clothing",image:"https://via.placeholder.com/300"},
  {id:3,name:"Headphones",price:10,category:"electronics",image:"https://via.placeholder.com/300"},
  {id:4,name:"Plants",price:13,category:"plants",image:"https://via.placeholder.com/300"},
  {id:5,name:"Books",price:3,category:"books",image:"https://via.placeholder.com/300"}
];

const box = document.getElementById("products");

productsData.forEach(p=>{
  box.innerHTML += `
    <div class="product">
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p>£${p.price}</p>
      <button onclick="exploreCategory('${p.category}')">Explore</button>
    </div>
  `;
});

function exploreCategory(category){
  window.location.href = "explore.html?category=" + category;
}

function updateCartCount(){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let count = cart.reduce((s,i)=>s+i.qty,0);
  document.getElementById("cartCount").innerText = count;
}

updateCartCount();
