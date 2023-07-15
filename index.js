let firstColumn = document.getElementById("firstColumn");
    

    fetch("http://localhost:3000/user")
    .then( (response) => response.json())
    .then((data) => console.log(data)) 
    .then((data) => {
        let products = data.products
        // console.log(products)
        localStorage.setItem("allProducts", JSON.stringify(products))
        products.map((e) => {
            // let id = e.id
            firstColumn.innerHTML += 
            `<div id="display">
                <div class="play">
                    <img class="photo" src=${e.thumbnail}>
                    <h3 class="title">${e.title} </h3>
                    <h5 class="price">Price: $${e.price} </h5>
                    <p class="discount">Discount: ${e.discountPercentage}% </p>
                    <P class="rating">Rating: ${e.rating} </P>
                </div> 
            </div>  `
            
        })
    })

    const show =()=>{
        up.style.display = "inline"
        down.style.display = "none"
        signing.style.display = "inline"
        
    }

    const hide =()=>{
        up.style.display = "none"
        up.style.display = "inline"
        signing.style.display = "none"
    }