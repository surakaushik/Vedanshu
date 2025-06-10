function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.width === "25%") {
    sidebar.style.width = "0";
    document.getElementById("navbar").style.width = "100%"
    document.getElementById("main").style.marginLeft = "0";
  } else {
    sidebar.style.width = "25%";
    document.getElementById("navbar").style.width = "75%"
    document.getElementById("main").style.marginLeft = "25%";
  }
}
function loadPage(page) {
  fetch(page)
    .then(res => res.text())
    .then(html => {
      document.getElementById('firstPage').innerHTML = html;
    });
}

//  function handleSubmit(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const entries = Object.fromEntries(formData.entries());

//     // Display the form data (for demonstration)
//     let output = '<h3>Submitted Party Details:</h3><ul>';
//     for (let [key, value] of Object.entries(entries)) {
//       output += `<li><strong>${key}:</strong> ${value}</li>`;
//     }
//     output += '</ul>';

//     document.getElementById('main-content').innerHTML = output;
//   }