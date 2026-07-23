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

<<<<<<< HEAD
    // BUG: Menggunakan <= sehingga iterasi melebihi panjang array
    for(let i = 0; i <= products.length; i++){
=======
    for(let i = 0; i < products.length; i++){
        const safeName = escapeHTML(products[i].name);
        const formattedPrice = Number(products[i].price).toLocaleString('id-ID');
>>>>>>> a911849751912f4161f3f6591be54bb89d1d2506

        html += `
        <div class="card">
            <h3>${safeName}</h3>
            <p class="price">
                Rp ${formattedPrice}
            </p>
        </div>
        `;
    }

<<<<<<< HEAD
    // BUG: ID tidak sesuai dengan HTML
=======
>>>>>>> a911849751912f4161f3f6591be54bb89d1d2506
    document.getElementById("products").innerHTML = html;
}