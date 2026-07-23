const API = "http://localhost:5000/employees";

async function loadEmployees(){

    const response = await fetch(API);

    const employee = await response.json();

    let html = "";

    employee.forEach(item => {

        html += `
        <div class="card">

            <h2 class="employee-name">
                ${item.name}
            </h2>

            <p class="salary">
                Rp ${item.salary.toLocaleString()}
            </p>

        </div>
        `;

    });

    document.getElementById("employee-list").innerHTML = html;

}

window.onload = loadEmployees;