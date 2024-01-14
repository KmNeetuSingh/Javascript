document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("form");
    let tbody = document.querySelector("tbody");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Get values from the form
      const taskName = document.getElementById("task").value;
      const priority = document.getElementById("priority").value;
  
      // Check if both fields are filled
      if (taskName && priority) {
        // Create a new row in the table
        const newRow = document.createElement("tr");
  
        // Create and append cells to the row
        const taskCell = document.createElement("td");
        taskCell.textContent = taskName;
        newRow.appendChild(taskCell);
  
        const priorityCell = document.createElement("td");
        priorityCell.textContent = priority;
        newRow.appendChild(priorityCell);
  
        const favoriteCell = document.createElement("td");
        favoriteCell.innerHTML = '<button class="favorite-btn">Favorite</button>';
        newRow.appendChild(favoriteCell);
  
        // Set background color based on priority
        newRow.style.backgroundColor = priority === "High" ? "red" : "green";
  
        // Append the new row to the tbody
        tbody.appendChild(newRow);
  
        // Clear the form fields
        form.reset();
      } else {
        alert("Please fill out both Task Name and Priority fields.");
      }
    });
  });
  
