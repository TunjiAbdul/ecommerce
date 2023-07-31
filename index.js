    let firstColumn = document.getElementById("firstColumn");
    let products = {};
    let utilItem = localStorage.getItem("items");
    function cartItem (vlad) {
                let cartProduct = JSON.stringify(products[vlad]);
                localStorage.setItem("item", cartProduct);
                window.location.href = 'cartpage.html';
               
    };

    fetch( "jumia.json")
    .then((response) => response.json())
    .then((data) => {
        products = data.user
        localStorage.setItem("allProducts", JSON.stringify(products))
        // console.log(products)
        products.map((e, idx) => {
            firstColumn.innerHTML += 
            `<div onclick="cartItem(${idx})" id="display">
                <div class="imageCard">
                    <img class="photo" src = ${e.image[0]} alt="">
                </div>
                <div class="detailCard">
                    <h3>${e.title} </h3>
                    
                    <div class="bottomsect">
                        <div class="price">₦ ${e.price}</div>
                       
                    </div>
                </div>
            </div> `
            
        })
    }) ;


    shoppingCart = []
    localStorage.setItem("item", JSON.stringify(shoppingCart))
    document.getElementById("count").innerText= shoppingCart.length;


   

    let sign = document.getElementById("signIn")
    sign.addEventListener('click', function(){
        window.location.href = "sign in.html"
    })

    // let shoppingCart = json.getItem("shoppingCart")
    // document.getElementById("count").innerText= shoppingCart.length;


    let p = document.getElementById("p");
    let savedUser = localStorage.getItem("firstInfo");

    p.innerHTML = `Hi ${savedUser.firstName}` 