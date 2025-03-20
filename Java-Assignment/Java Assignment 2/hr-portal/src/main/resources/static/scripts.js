
    const cancelBtn = document.getElementById("cancel");
    const employeeTable = document.getElementById("employeeTable");
    const addEmployeeForm = document.getElementById("addEmployeeForm");
    const editEmployeeForm = document.getElementById("editEmployeeForm");
    const employeeFormContainer = document.getElementById("employeeForm");
    const toggle=document.getElementById("toggle");
    
    function loadEmployees() {
        fetch("/api/employees")
            .then(response => response.json())
            .then(data => {
                employeeTable.innerHTML = `
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>`;

                data.forEach(emp => {
                    let row = employeeTable.insertRow();
                    row.innerHTML = `
                        <td>${emp.id}</td>
                        <td>${emp.name}</td>
                        <td>${emp.department}</td>
                        <td>${emp.email}</td>
                        <td>${emp.salary}</td>
                        <td>
                            <button class="edit-btn" onclick="editEmployee(${emp.id}, '${emp.name}', '${emp.department}', '${emp.email}', ${emp.salary})">Edit</button>
                            <button id="delete-btn" onclick="deleteEmployee(${emp.id})">Delete</button>
                        </td>`;
                });
            })
            .catch(error => console.error("Error loading employees:", error));
    }
    

    function toggleForm() {
        employeeFormContainer.style.display = employeeFormContainer.style.display === "none" ? "block" : "none";
    }
    toggle.addEventListener("click", toggleForm);


    addEmployeeForm.addEventListener("submit", event => {
        event.preventDefault();
        
        const employee = {
            name: document.getElementById("empName").value,
            department: document.getElementById("empDept").value,
            email: document.getElementById("empEmail").value,
            salary: document.getElementById("empSalary").value
        };

        fetch("/api/employees", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(employee)
        })
        .then(response => response.json())
        .then(() => {
            employeeFormContainer.style.display = "none";
            loadEmployees();
        })
        .catch(error => console.error("Error adding employee:", error));
    });

    window.editEmployee = function(id, name, department, email, salary) {
        document.getElementById("editId").value = id;
        document.getElementById("editName").value = name;
        document.getElementById("editDepartment").value = department;
        document.getElementById("editEmail").value = email;
        document.getElementById("editSalary").value = salary;
        editEmployeeForm.style.display = "block";
    }

    editEmployeeForm.addEventListener("submit", event => {
        event.preventDefault();
        
        const id = document.getElementById("editId").value;
        const updatedEmployee = {
            name: document.getElementById("editName").value,
            department: document.getElementById("editDepartment").value,
            email: document.getElementById("editEmail").value,
            salary: document.getElementById("editSalary").value
        };

        fetch(`/api/employees/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedEmployee)
        })
        .then(() => {
            cancelEdit();
            loadEmployees();
        })
        .catch(error => console.error("Error updating employee:", error));
    });
    
    function deleteEmployee(id) {
        fetch(`/api/employees/${id}`, { method: "DELETE" })
            .then(() => loadEmployees());
    }
    

    function cancelEdit() {
        editEmployeeForm.style.display = "none";
    }

    cancelBtn.addEventListener("click", cancelEdit);

    loadEmployees();
