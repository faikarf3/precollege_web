function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.style.display = (dropdownMenu.style.display === "block") ? "none" : "block";
}

// Close dropdown when clicking outside
window.onclick = function (event) {
    if (!event.target.matches('.settings-icon')) {
        var dropdowns = document.getElementsByClassName("dropdown");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}