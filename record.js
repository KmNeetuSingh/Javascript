document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const tbody = document.querySelector("tbody");
    const filterDepartment = document.getElementById("filterDepartment");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Get form input values
      const name = document.getElementById("name").value;
      const employeeID = document.getElementById("employeeID").value;
      const department = document.getElementById("department").value;
      const experience = document.getElementById("exp").value;
      const email = document.getElementById("email").value;
      const mobileNumber = document.getElementById("mbl").value;
  
      // Calculate role based on experience
      let role = "";
      if (experience > 5) {
        role = "Senior";
      } else if (experience >= 2 && experience <= 5) {
        role = "Junior";
      } else {
        role = "Fresher";
      }
  
      // Create table row
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${name}</td>
        <td>${employeeID}</td>
        <td>${department}</td>
        <td>${experience}</td>
        <td>${email}</td>
        <td>${mobileNumber}</td>
        <td>${role}</td>
        <td><button onclick="deleteRow(this)">Delete</button></td>
      `;
  
      // Append row to tbody
      tbody.appendChild(newRow);
  
      // Clear form inputs
      form.reset();
    });
  
    // Function to delete row
    window.deleteRow = function (button) {
      const row = button.parentNode.parentNode;
      tbody.removeChild(row);
    };
  
    // Filter functionality
    filterDepartment.addEventListener("change", function () {
      const selectedDepartment = filterDepartment.value;
      const rows = tbody.getElementsByTagName("tr");
  
      // Show all rows initially
      for (const row of rows) {
        row.style.display = "";
      }
  
      // Hide rows that don't match the selected department
      if (selectedDepartment !== "") {
        for (const row of rows) {
          const departmentCell = row.cells[2].textContent; // Assuming department is the third column
          if (departmentCell !== selectedDepartment) {
            row.style.display = "none";
          }
        }
      }
    });
  });
  