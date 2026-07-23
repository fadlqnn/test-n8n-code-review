const products = [
    {
        name: "Keyboard",
        price: 450000,
        stock: 5
    },
    {
        name: "Mouse",
        price: 250000,
        stock: 8
    },
    {
        name: "Monitor",
        price: 2100000,
        stock: 2
    }
];

function showProducts(){

    let html = "";

    
    for(let i = 0; i <= products.length; i++){

        html += `
        <div class="card">
            <h3>${products[i].name}</h3>
            <p class="price">
                Rp ${products[i].price}
            </p>
        </div>
        `;
    }

    
    document.getElementById("products").innerHTML = html;
}