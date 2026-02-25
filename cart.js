
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart(){
  const box=document.getElementById("cartItem");
  const totalEl=document.getElementById("total");
  box.innerHTML="";
  let total=0;

  if(cart.length===0){
    box.innerHTML="<p>Your cart is empty.</p>";
  }

  cart.forEach((item,i)=>{
    total+=item.price*item.qty;
    box.innerHTML+=`
      <div class="cartItem">
        <span>${item.name} x ${item.qty}</span>
        <div>
          <button class="qtyBtn" onclick="changeQty(${i},-1)">-</button>
          <button class="qtyBtn" onclick="changeQty(${i},1)">+</button>
        </div>
      </div>
    `;
  });

  totalEl.innerText=total;
}

function changeQty(i,change){
  cart[i].qty+=change;
  if(cart[i].qty<=0) cart.splice(i,1);
  localStorage.setItem("cart",JSON.stringify(cart));
  renderCart();
}

function clearCart(){
  if(confirm("Clear entire cart?")){
    cart=[];
    localStorage.removeItem("cart");
    renderCart();
  }
}

renderCart();
