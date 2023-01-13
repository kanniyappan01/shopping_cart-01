let data=[
	{
		id: 1,
		img:"images/shoe-01.webp",
		productName: "Air forces",
		price: 800,
		category: "shoe"
	},
	{
		id: 2,
		img:"images/shoe-02.webp",
		productName: "Bast shoe",
		price: 1200,
		category: "shoe"
		
	},
	{
		id: 3,
		img:"images/shoe-03.webp",
		productName: "Blucher shoe",
		price: 1500,
		category: "shoe"
	},
	{
		id: 4,
		img:"images/shoe-04.webp",
		productName: "Boat shoe",
		price: 600,
		category: "shoe"
	},
	{
		id: 5,
		img:"images/shoe-05.webp",
		productName: "Brogue shoe",
		price: 400,
		category: "shoe"
	},
	{
		id: 6,
		img:"images/shoe-06.webp",
		productName: "Diabetic shoe",
		price: 550,
		category: "shoe"
	},
	{
		id: 7,
		img:"images/shoe-07.webp",
		productName: "Galesh",
		price: 950,
		category: "shoe"
	},
	{
		id: 8,
		img:"images/shoe-08.webp",
		productName: "Giveh",
		price: 450,
		category: "shoe"
	},
	{
		id: 9,
		img:"images/t-shirt-01.webp",
		productName: "White T-Shirt",
		price: 450,
		category: "tshirt"
	},
	{
		id: 10,
		img:"images/t-shirt-02.webp",
		productName: "Yellow T-Shirt",
		price: 450,
		category: "tshirt"
	},
	{
		id: 11,
		img:"images/t-shirt-03.webp",
		productName: "Dark Green T-Shirt",
		price: 450,
		category: "tshirt"
	},
	{
		id: 12,
		img:"images/t-shirt-04.webp",
		productName: "Green T-Shirt",
		price: 450,
		category: "tshirt"
	},
	{
		id: 13,
		img:"images/t-shirt-05.webp",
		productName: "Fether T-Shirt",
		price: 450,
		category: "tshirt"
	},
	{
		id: 14,
		img:"images/t-shirt-08.webp",
		productName: "Rock T-Shirt",
		price: 450,
		category: "tshirt"
	},
	{
		id: 15,
		img:"images/t-shirt-09.webp",
		productName: "OXO T-Shirt",
		price: 450,
		category: "tshirt"
	},
	{
		id: 16,
		img:"images/flip-flop-01.webp",
		productName: "Adda",
		price: 450,
		category: "flipflop"
	},
	{
		id: 17,
		img:"images/flip-flop-02.webp",
		productName: "black Line Adda",
		price: 450,
		category: "flipflop"
	},
	{
		id: 18,
		img:"images/flip-flop-03.webp",
		productName: "Adda Deep",
		price: 450,
		category: "flipflop"
	},
	{
		id: 19,
		img:"images/flip-flop-04.webp",
		productName: "black Strip adam",
		price: 450,
		category: "flipflop"
	},
	{
		id: 20,
		img:"images/boat-01.webp",
		productName: "black Boat",
		price: 450,
		category: "headset"
	},
	{
		id: 21,
		img:"images/boat-02.webp",
		productName: "Hash Boat",
		price: 450,
		category: "headset"
	},
	{
		id: 22,
		img:"images/boat-03.webp",
		productName: "Brown Boat",
		price: 450,
		category: "headset"
	},
	{
		id: 23,
		img:"images/boat-04.webp",
		productName: "black Boat",
		price: 450,
		category: "headset"
	},
	{
		id: 24,
		img:"images/boat-05.webp",
		productName: "Hash Boat",
		price: 450,
		category: "headset"
	}
];
var totals=0;
var foodContainer = document.getElementById("product-container");

for(i=0;i<data.length;i++){
	foodContainer.innerHTML += `<div class="card m-2 position-relative" data-item="${data[i].category}">
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

// add to cart
var addCart = document.querySelectorAll(".cart-add-icon");
addCart.forEach((btn)=>{
	btn.addEventListener('click', addCard);
})

var cartCount = document.querySelector(".cart-number");
let itemList =[],newProduct;
 
function addCard(){
	let food = this.parentNode;
	let title = food.querySelector(".card-title").innerText;
	let price = food.querySelector(".price").innerText;
	let imgSrc = food.querySelector(".cart-img").src;
	
	// check product already in cart
	
	newProduct = {title, price, imgSrc};

	
	if(itemList.find((el)=>el.title== newProduct.title)){
		alert("product allredy added in cart");
		return;
	}else{
		itemList.push(newProduct);
	}
	cartCount.textContent = itemList.length;
	
	createCartProudct(title, price, imgSrc);
	 
}
var cartBasket = document.querySelector(".card-items-container");

function createCartProudct(title, price, imgSrc){
	cartBasket.innerHTML += `
	<div class="card-box d-flex flex-wrap mb-1">
		<div class="card-img-box">
			<img class="card-img" src="${imgSrc}" alt="shoe img">
		</div>
		<div class="pro-dtl p-2">
			<h5 class="product-title mb-2 text-center">${title}</h5>
			<div class="quantity-box d-flex mt-3 justify-content-between">
				<button class="decr" data-target="decr">-</button>
				<span class="counter">1</span>
				<button class="incr" data-target="incr">+</button>
			</div>
		</div>
		<div class="price-box">
			<p class="card-price my-3 inline-block text-center">${price}</p>
			<p class="total-amt text-center">${price}</p>
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
	// totals+=price
	
	var btnremove = document.querySelectorAll(".delete-icon");
		btnremove.forEach((btn)=>{
			btn.addEventListener("click", removeItem);
		});
	updateTotal()
	
}
//delete cartlist
function removeItem(i){
	if(confirm("are you sure to remove")){
		let title = this.parentElement.parentElement.querySelector(".product-title").innerText;
		
		itemList=itemList.filter((el)=>{
			el.title != title
		});
		this.parentElement.remove();
	}
}
let buy = document.querySelector(".buy-now");
let done = document.querySelector(".done");

// buy.addEventListener("click",function(){
// 	setTimeout(popUp, 100)
// 	done.classList.add("active-done");
// 	done.style.display = "block";
// });
//product filter start

let searchBox = document.querySelector("#search");
let selectButton = document.querySelectorAll(".product-btn");
let cardBoxes = document.querySelectorAll(".card");

//search product by textbox
selectButton[0].classList.add("select-active");
searchBox.addEventListener("keyup",(e)=>{
	let searchText = e.target.value.toLowerCase().trim();
	
	for(i=0;i<cardBoxes.length;i++){
		let data = cardBoxes[i].dataset.item;
		if(data.includes(searchText)){
			cardBoxes[i].style.display = "block";
		}else{
			cardBoxes[i].style.display = "none";
		}
	};
	for(i=0;i<selectButton.length;i++){
		selectButton[i].classList.remove("select-active");
	}
	// e.target.classList.add("select-active");
	
	selectButton[i].classList.add("select-active");
});
for(i=0;i<selectButton.length;i++){
	selectButton[i].addEventListener("click",(e)=>{
		e.preventDefault();
		setActiveBtn(e);
		let selectFilter = e.target.dataset.filter;
		for(i=0;i<cardBoxes.length;i++){
			if(selectFilter == "all"){
				cardBoxes[i].style.display = "block"
			}else{
				let boxFilter = cardBoxes[i].dataset.item;
				
				if(selectFilter == boxFilter){
					cardBoxes[i].style.display = "block";
				}else{
					cardBoxes[i].style.display = "none"
				}
			}
		}
	})
}
function setActiveBtn(e){
	for(i=0;i<selectButton.length;i++){
		selectButton[i].classList.remove("select-active");
	}
	e.target.classList.add("select-active");
}
//uPdate total
function updateTotal(){
	let count=0;
	let total=0;
	let carTItems= document.querySelectorAll(".card-box");
		let totleValue=document.querySelector(".total-price");
		count++;
		
		carTItems.forEach(product => {

			let priceEle=product.querySelector(".card-price");
			let price=parseFloat(priceEle.innerText.replace("₹",""));
			total += (count*price)
			totleValue.innerText=total
		})
}
cnt=0;
function quantity(qn){
	var _parentNode, contr, prdTlPrice, prdInPrice;
	if(qn.target.dataset.target == "incr"){
		let _parentNode = qn.target.parentNode.parentNode.parentNode;
		let contr = _parentNode.getElementsByClassName("counter")[0];
		cnt = parseInt(contr.innerText);
		cnt++;
		contr.innerText = cnt;
		prdTlPrice = _parentNode.getElementsByClassName("total-amt")[0];
		prdInPrice = _parentNode.getElementsByClassName("card-price")[0];
		prCnt = cnt*prdInPrice.innerText.split("₹")[1];
		prdTlPrice.innerText = "₹"+prCnt;
	}else if(qn.target.dataset.target == "decr"){
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
		}
	}
	updateTotal()
}