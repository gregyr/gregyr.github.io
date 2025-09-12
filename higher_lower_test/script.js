let products = []; 


async function loadProducts() {
    try {
        const response = await fetch('./articles.json');
        products = await response.json(); 
        console.log("All products loaded:", products);

        
    } catch (err) {
        console.error("Error loading products:", err);
    }
}

// Function: pick a random product
function getRandomProduct() {
    if (products.length === 0) {
        console.warn("Products not loaded yet!");
        return null;
    }
    const choice = Math.floor(Math.random() * products.length);
    return products[choice];
}

function startProducts() {
    const right_product = getRandomProduct();
    if (!right_product) return;

    console.log("Chosen product:", right_product);

    const right_img = document.getElementById("right_img");
    right_img.src = right_product.img;   
    right_img.alt = right_product.name;  

    const left_product = getRandomProduct();
    if (!left_product) return;

    console.log("Chosen product:", left_product);
    const left_img = document.getElementById("left_img");
    left_img.src = left_product.img;   
    left_img.alt = left_product.name;
}

async function main(){
    await loadProducts();
    startProducts();
    console.log(products);
}

function changeOneProduct(side) {
    const product = getRandomProduct();
    if (!product) return;

    console.log("Chosen product:", product);

    if(side == "left"){
        const left_img = document.getElementById("left_img");
        left_img.src = product.img;   
        left_img.alt = product.name;
    }
    else if(side == "right"){
        const right_img = document.getElementById("right_img");
        right_img.src = product.img;   
        right_img.alt = product.name;
    }

}

main();

changeOneProduct("left");
