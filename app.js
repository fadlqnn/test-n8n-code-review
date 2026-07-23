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

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}

function showProducts(){

    let html = "";

    for(let i = 0; i < products.length; i++){
        const safeName = escapeHTML(products[i].name);
        const formattedPrice = Number(products[i].price).toLocaleString('id-ID');

        html += `
        <div class="card">
            <h3>${safeName}</h3>
            <p class="price">
                Rp ${formattedPrice}
            </p>
        </div>
        `;
    }

    document.getElementById("products").innerHTML = html;
}