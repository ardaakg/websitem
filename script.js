// Hakkında bölümünü açıp kapatma işlevi
document.addEventListener("DOMContentLoaded", function() {
    const hakkindaBtn = document.getElementById("hakkinda-btn");
    const hakkindaDiv = document.getElementById("hakkinda-div");

    if (hakkindaBtn) {
        hakkindaBtn.addEventListener("click", function() {
            if (hakkindaDiv.style.display === "none" || hakkindaDiv.style.display === "") {
                hakkindaDiv.style.display = "block";
                hakkindaBtn.innerText = "Hakkında Kapat";
            } else {
                hakkindaDiv.style.display = "none";
                hakkindaBtn.innerText = "Hakkında Göster";
            }
        });
    }

    // Projelerim bölümündeki liste öğelerine tıklama işlevi
    const projelerListesi = document.querySelectorAll("#projelerim ul li");
    
    projelerListesi.forEach(item => {
        item.addEventListener("click", function() {
            alert(`Proje: ${this.innerText}`);
        });
    });

    // İletişim formu doğrulaması
    const iletisimFormu = document.getElementById("iletisim-formu");
    if (iletisimFormu) {
        iletisimFormu.addEventListener("submit", function(event) {
            const ad = document.getElementById("ad").value;
            if (!ad) {
                alert("Lütfen adınızı girin.");
                event.preventDefault();
            }
        });
    }
});
