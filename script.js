function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert to 12-hour format

  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0"
  );
  document.getElementById("ampm").textContent = ampm;
  const day = now.toLocaleDateString(undefined, { weekday: "short" });
  const date = now.getDate();
  const month = now.toLocaleDateString(undefined, { month: "short" });
  const year = now.getFullYear();
  const formattedDate = `${day}, ${date} ${month} ${year}`;
  document.getElementById("date").textContent = formattedDate;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock
updateClock();
