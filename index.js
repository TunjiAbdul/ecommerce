    let firstColumn = document.getElementById("firstColumn");
    let products = [];
    let utilItem = localStorage.getItem("items");
    function cartItem (vlad) {
                let cartProduct = JSON.stringify(products[vlad]);
                localStorage.setItem("item", cartProduct);
                window.location.href = 'cartpage.html';
               
    };

    fetch(" http://localhost:3000/user")
    .then((response) => response.json())
    .then((data) => {
        products = data.user
        localStorage.setItem("allProducts", JSON.stringify(products))
        console.log(products)
        products.map((e, idx) => (
            firstColumn.innerHTML += 
            `<div onclick="cartItem(${idx})" id="display">
                <div class="imageCard">
                    <img class="photo" src = ${e.image[0]} alt="">
                </div>
                <div class="detailCard">
                    <h3>${e.title} </h3>
                    
                    <div class="bottomsect">
                        <div class="price">₦ ${e.price.toLocaleString()}</div>
                       
                    </div>
                </div>
            </div> `
            
        ))
    }) ;

    let welcome = document.getElementById("welcome")
    let activeUser = sessionStorage.getItem("current_loggedUser");
    
    if (!activeUser) {
        welcome.innerHTML += `
        <div class="acc">
            <i class="icofont-ui-user"></i>
            <P >Account</P><i id="up" class="icofont-rounded-down"></i>                        
        </div>
        <div class="signing">
        <div class="sign">
            <button onclick="signIn()" id="signIn">SIGN UP</button>
            <a href="login.html">
                <button>LOG IN</button>
            </a>
        </div>
        <div class="my">
            <i class="icofont-user-alt-3"></i>
            <P>My Account</P>
        </div>
        <div class="my">
            <i class="icofont-briefcase-1"></i>
            <p>Orders</p>
        </div>
        <div class="my">
            <i class="icofont-ui-love"></i>
            <p>Saved Items</p>
        </div>
    </div>`
    } else {
        activeUser = JSON.parse(activeUser);
        welcome.innerHTML += 
        `<p class="ppp"> <i class="icofont-ui-user"></i> Hi, ${activeUser.firstName}</p>
         <div id="longSign" class="signing">
                    <div id="logout" class="sign">
                        <a href="login.html">
                            <button onclick="logout()">LOG OUT</button>
                        </a>
                    </div>
                    <div class="my">
                        <i class="icofont-user-alt-3"></i>
                        <P>My Account</P>
                    </div>
                    <div class="my">
                        <i class="icofont-briefcase-1"></i>
                        <p>Orders</p>
                    </div>
                    <div class="my">
                        <i class="icofont-ui-love"></i>
                        <p>Saved Items</p>
                    </div>
                </div>
        `
    }
    
    const logout =()=>{
        alert("Are you sure you want to LOG OUT?")
        sessionStorage.removeItem("current_loggedUser");
       
    }

    let sign = document.getElementById("signIn")
    sign.addEventListener('click', function(){
        window.location.href = "sign in.html"
    })

    // let shoppingCart = json.getItem("shoppingCart")
    // document.getElementById("count").innerText= shoppingCart.length;


    // shoppingCart = []
    // localStorage.setItem("item", JSON.stringify(shoppingCart))
    // document.getElementById("count").innerText= shoppingCart.length;
     