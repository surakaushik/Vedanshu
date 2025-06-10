function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.width === "20%") {
    sidebar.style.width = "0";
    document.getElementById("navbar").style.width = "100%"
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("btn").style.color = 'black';
  } else {
    sidebar.style.width = "20%";
    document.getElementById("navbar").style.width = "80%"
    document.getElementById("main").style.marginLeft = "20%";
    document.getElementById("btn").style.color = 'white';
  }
}
