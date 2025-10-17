// // Wait until page loads
// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("studentForm");
//   const tableBody = document.querySelector("#d2 tbody");

//   form.addEventListener("submit", (e) => {
//     e.preventDefault(); // form default submit ko rokna

//     // Get values
//     const id = document.getElementById("sid").value.trim();
//     const name = document.getElementById("sname").value.trim();
//     const age = document.getElementById("sage").value.trim();
//     const date = document.getElementById("sdate").value;

//     // Validation
//     if (!id || !name || !age || !date) {
//       alert("⚠️ Please fill all fields before submitting!");
//       return;
//     }

//     // Create new row
//     const newRow = document.createElement("tr");
//     newRow.innerHTML = `
//       <td>${id}.</td>
//       <td>${name}</td>
//       <td>${age}</td>
//       <td>--</td>
//     `;

//     // Append to table
//     tableBody.appendChild(newRow);

//     // Success message
//     alert("✅ Student record added successfully!");

//     // Clear form
//     form.reset();
//   });

//   form.addEventListener("reset", () => {
//     alert("🧹 Form cleared!");
//   });
// });


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("studentForm");
  const tableBody = document.querySelector("#d2 tbody");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const id = document.getElementById("sid").value.trim();
    const name = document.getElementById("sname").value.trim();
    const age = document.getElementById("sage").value.trim();
    const course = document.getElementById("scourse").value;
    const date = document.getElementById("sdate").value;

    if (!id || !name || !age || !course || !date) {
      alert("⚠️ Please fill all fields before submitting!");
      return;
    }

    // Create new row
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${id}.</td>
      <td>${name}</td>
      <td>${age}</td>
      <td>${course}</td>
      <td><button class="delete-btn">❌</button></td>
    `;

    tableBody.appendChild(newRow);

    alert("✅ Student record added!");
    form.reset();
  });

  // Event delegation for delete button
  tableBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      e.target.closest("tr").remove();
      alert("🗑️ Record deleted!");
    }
  });

  form.addEventListener("reset", () => {
    alert("🧹 Form cleared!");
  });
});
