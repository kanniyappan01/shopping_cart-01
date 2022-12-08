let data=[
	{
		id: 1,
		img:"images/shoe-01.webp",
		productName: "Air forces",
		price: 800,
	},
	{
		id: 2,
		img:"images/shoe-02.webp",
		productName: "Bast shoe",
		price: 1200,
	},
	{
		id: 3,
		img:"images/shoe-03.webp",
		productName: "Blucher shoe",
		price: 1500,
	},
	{
		id: 4,
		img:"images/shoe-04.webp",
		productName: "Boat shoe",
		price: 600,
	},
	{
		id: 5,
		img:"images/shoe-05.webp",
		productName: "Brogue shoe",
		price: 400,
	},
	{
		id: 6,
		img:"images/shoe-06.webp",
		productName: "Diabetic shoe",
		price: 550,
	},
	{
		id: 7,
		img:"images/shoe-07.webp",
		productName: "Galesh",
		price: 950,
	},
	{
		id: 8,
		img:"images/shoe-08.webp",
		productName: "Giveh",
		price: 450,
	}
];
var foodContainer = document.getElementById("product-container");


for(i=0;i<data.length;i++){
	foodContainer.innerHTML += `<div class="card m-2 position-relative">
									<img class="cart-img" src="${data[i].img}" alt="shoe images">
									<div class="card-body">
										<h4 class="card-title">${data[i].productName}</h4>
										<p class="price">₹${data[i].price}</p>
									</div>
									<i class="icofont-cart-alt cart-add-icon"></i>
								</div>`
};

var btnCart =document.querySelector(".icofont-shopping-cart");
var Cart =document.querySelector(".card-items");
var btnClose =document.querySelector("#close-btn");
let cnt, prCnt;

btnCart.addEventListener("click", function(){
	Cart.classList.add("card-active")
});

btnClose.addEventListener("click", function(){
	Cart.classList.remove("card-active")
});

// addto cart
var addCart = document.querySelectorAll(".cart-add-icon");
addCart.forEach((btn)=>{
	btn.addEventListener('click', addCard);
})

function addCard(){
	let food = this.parentNode;
	let title = food.querySelector(".card-title").innerText;
	let price = food.querySelector(".price").innerText;
	let imgSrc = food.querySelector(".cart-img").src;
	
	createCartProudct(title, price, imgSrc);
	
	// let cartElement =document.createElement("div");
	// cartElement.innerHTML =  newProductAdd;
	// cartBasket = document.querySelector(".card-items-container");
	// cartBasket.append(cartElement)
}
var cartBasket = document.querySelector(".card-items-container");

function createCartProudct(title, price, imgSrc){
	cartBasket.innerHTML += `
	<div class="card-box d-flex flex-wrap mb-1 justify-content-around">
		<div class="card-img-box">
			<img class="card-img" src="${imgSrc}" alt="shoe img">
		</div>
		<div class="pro-dtl p-3">
			<h5 class="mb-2">${title}</h5>
			<div class="quantity-box d-flex mt-3 justify-content-between">
				<button class="decr" data-target="decr">-</button>
				<span class="counter">1</span>
				<button class="incr" data-target="incr">+</button>
			</div>
		</div>
		<div class="price-box">
			<p class="card-price my-3 inline-block ">${price}</p>
			<p class="total-amt">${price}</p>
		</div>
		<i class="icofont-ui-delete delete-icon"></i>
	</div>`;
	var counter = document.querySelectorAll(".counter");
	var decrementBtn = document.querySelectorAll(".decr");
	var incrementBtn = document.querySelectorAll(".incr");
	
	for(let i = 0; i < incrementBtn.length; i++){ 
		incrementBtn[i].addEventListener("click",quantity)
	}
	for(let i = 0; i < decrementBtn.length; i++){ 
		decrementBtn[i].addEventListener("click", quantity)
	}
	
		
	
	var btnremove = document.querySelectorAll(".delete-icon");
		btnremove.forEach((btn)=>{
			btn.addEventListener("click", removeItem);
		});
	
}

//delete cartlist
function removeItem(){
	if(confirm("are you sure to remove")){
		this.parentElement.remove();
	}
}

function quantity(qn){
	let _parentNode, contr, prdTlPrice, prdInPrice;
	
	if(qn.target.dataset.target == "incr"){
		_parentNode = qn.target.parentNode.parentNode.parentNode;
		contr = _parentNode.getElementsByClassName("counter")[0];
		cnt = parseInt(contr.innerText);
		cnt++;
		contr.innerText = cnt;
		prdTlPrice = _parentNode.getElementsByClassName("total-amt")[0];
		prdInPrice = _parentNode.getElementsByClassName("card-price")[0];
		prCnt = cnt*prdInPrice.innerText.split("₹")[1];
		prdTlPrice.innerText = "₹"+prCnt;
	}
	else if(qn.target.dataset.target == "decr"){
		if(cnt > 1){
			_parentNode = qn.target.parentNode.parentNode.parentNode;
			contr = _parentNode.getElementsByClassName("counter")[0];
			cnt = parseInt(contr.innerText);
			cnt--;
			contr.innerText = cnt;
			prdTlPrice = _parentNode.getElementsByClassName("total-amt")[0];
			prdInPrice = _parentNode.getElementsByClassName("card-price")[0];
			prCnt = prdTlPrice.innerText.split("₹")[1]-prdInPrice.innerText.split("₹")[1];
			prdTlPrice.innerText = "₹"+prCnt;
		}else{
			alert("Quantity should be max of 1")
		}
		
	}
}