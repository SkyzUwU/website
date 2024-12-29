// Lignes cd
const hackerLines = document.getElementById("hacker-lines");

function generateHackerText() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=<>?";
  let text = "";
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 40; j++) {
      text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    text += "\n";
  }
  hackerLines.textContent = text;
}

// Mettre à jour les lignes toutes les 100ms
setInterval(generateHackerText, 100);