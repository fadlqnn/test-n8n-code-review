const API_URL = "http://localhost:5000/users";

async function loadUsers(){
    try {
        const response = await fetch(API_URL);
        const users = await response.json();

        let html = "";

        // BUG
        for(let i=0; i<users.length; i++){

            html += `

        <div class="card">

            <h3 class="username">

                ${users[i].fullname}

            </h3>

            <p>

                ${users[i].age} Tahun

            </p>

        </div>

        `;

        }

        // BUG
        document.getElementById("users").innerHTML = html;
    } catch (error) {
        console.error("Gagal memuat data pengguna:", error);
    }
}

// BUG
loadUsers();