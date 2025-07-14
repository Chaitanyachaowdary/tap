// Geolocation API
document.getElementById("locateBtn").addEventListener("click", () => {
  const info = document.getElementById("locationInfo");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude.toFixed(4);
      const lon = position.coords.longitude.toFixed(4);
      info.textContent = `Your Location: Latitude ${lat}, Longitude ${lon}`;
    }, () => {
      info.textContent = "Location access denied.";
    });
  } else {
    info.textContent = "Geolocation not supported.";
  }
});

// Network Information API
const network = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
const netInfo = document.getElementById("networkInfo");
if (network && network.effectiveType) {
  if (network.effectiveType.includes("2g") || network.effectiveType === "slow-2g") {
    netInfo.textContent = "⚠️ Slow internet connection detected.";
  } else {
    netInfo.textContent = `Network Type: ${network.effectiveType}`;
  }
} else {
  netInfo.textContent = "Network info not supported.";
}

// Intersection Observer API
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll(".card").forEach(card => {
  observer.observe(card);
});
