document.addEventListener("DOMContentLoaded", () => {
    fetch("https://peaceman.goatcounter.com/counter/%2F.json")
      .then(response => response.json())
      .then(data => {
        document.getElementById("visitor-count").textContent = data.count_unique;
      })
      .catch(() => {
        document.getElementById("visitor-count").textContent = "???";
      });
  });
  