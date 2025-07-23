document.addEventListener("DOMContentLoaded", () => {
    fetch("https://api.counterapi.dev/v2/weirdo/meme-page/up")
      .then((response) => response.json())
      .then((data) => {
        const count = data.data?.up_count;
        document.getElementById("visitor-count").textContent = count ?? "???";
      })
      .catch((error) => {
        console.error("Visitor count error:", error);
        document.getElementById("visitor-count").textContent = "???";
      });
  });
  