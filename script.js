const menuLinks = document.querySelectorAll("nav a");
const welcomeTitle = document.getElementById("welcome-title");

menuLinks.forEach(function(link) {
    link.addEventListener("click", function() {

        menuLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

        if (this.dataset.menu === "mahasiswa") {
            welcomeTitle.textContent =
                "Selamat Datang, Nurul Aulia Khairani";
        }

        else if (this.dataset.menu === "kelas") {
            welcomeTitle.textContent =
                "Selamat Datang, Nurul Aulia Khairani, SI-3J";
        }
    });
});