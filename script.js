// Helper function to set a cookie
function setCookie(name, value, days = 365) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
}

// Helper function to get a cookie
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return value;
    }
  }
  return null;
}

// Apply saved preferences on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  if (savedFontSize) {
    document.documentElement.style.setProperty(
      "--fontsize",
      `${savedFontSize}px`
    );
    document.getElementById("fontsize").value = savedFontSize;
  }

  if (savedFontColor) {
    document.documentElement.style.setProperty(
      "--fontcolor",
      savedFontColor
    );
    document.getElementById("fontcolor").value = savedFontColor;
  }
});

// Handle form submission
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const fontSize = document.getElementById("fontsize").value;
  const fontColor = document.getElementById("fontcolor").value;

  // Save to cookies
  setCookie("fontsize", fontSize);
  setCookie("fontcolor", fontColor);

  // Apply immediately
  document.documentElement.style.setProperty(
    "--fontsize",
    `${fontSize}px`
  );
  document.documentElement.style.setProperty(
    "--fontcolor",
    fontColor
  );
});
