const API = "http://localhost:5000/employees";

async function loadEmployees(){

    const response = await fetch(API);

    // BUG 1
    const employee = response.json();

    let html = "";

    // BUG 2
    employee.foreach(item => {

        html += `
        <div class="card">

            <h2 class="employee-name">
                ${item.name}
            </h2>

            <p class="salary">
                Rp ${item.salary.toLocaleStrings()}
            </p>

        </div>
        `;

    });

    // BUG 3
    document.getElementById("employee-list").innerHTML == html;

}

// BUG 4
window.onload = loadEmployee;