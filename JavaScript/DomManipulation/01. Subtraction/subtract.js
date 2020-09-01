if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
    
} else { 
    showLocalStorageCart()
    ready() 
}
function showLocalStorageCart(){

    var testLocalStorage = JSON.parse(localStorage.getItem('Coffee Cup'))
    if (testLocalStorage != null) {
        let testArr = Object.entries(testLocalStorage)
    
    var testTitleArr = testArr[0] 
    var testKcalArr = testArr[1] 
    var testFatArr = testArr[2] 

    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
      
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${testFatArr[1]}" width="100" height="100">
            <span class="cart-item-title">${testTitleArr[1]}</span>
        </div>  
        <span class="cart-price cart-column">${testKcalArr[1]}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
 
    
    }

}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem())
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    let items = [];
    for (var i = 0; i < addToCartButtons.length; i++) { 
        var button = addToCartButtons[i]
        button.addEventListener('click', function(e){
            if (typeof(Storage) !== 'undefined') { 
                let shopItem = e.target.parentElement.parentElement
                let item = {
                    id:i+1,
                    title:shopItem.getElementsByClassName('shop-item-title')[0].innerText,
                    kcal: shopItem.getElementsByClassName('shop-item-price')[0].innerText,
                    number : 1
                };
                if (JSON.parse(localStorage.getItem('items')) === null) {
                    items.push(item);
                    localStorage.setItem('items',JSON.stringify(items));
                    
                }else{
                    let localItems = JSON.parse(localStorage.getItem('items'));
                    localItems.map(data=>{
                        if (item.id == data.id) {
                            item.number = item.number + 1;
                        }else{
                            items.push(data);
                        }
                    });
                    items.push(item);
                    localStorage.setItem('items',JSON.stringify(items));
                     
                }
            }
        })
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove() 
    localStorage.removeItem('Coffee Cup')
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement 
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText 
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
      
    var testObj = {
        Title: title,
        Kcal: price,
        Fat:imageSrc
    };
    var testObjStr = JSON.stringify(testObj)
   
    localStorage.setItem(title, testObjStr)
    var testObjDeser = JSON.parse(localStorage.getItem(title))
    let arr = Object.entries(testObjDeser)
    console.log(arr)

    var titleArr = arr[0] 
    var kcalArr = arr[1] 
    var fatArr = arr[2]  
    
    addItemToCart(titleArr,kcalArr,fatArr)
    
    updateCartTotal()
}

function addItemToCart(titleArr,kcalArr,fatArr) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
      
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${fatArr[1]}" width="100" height="100">
            <span class="cart-item-title">${titleArr[1]}</span>
        </div>  
        <span class="cart-price cart-column">${kcalArr[1]}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}