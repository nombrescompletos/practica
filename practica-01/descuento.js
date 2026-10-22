let temp = Number(prompt("Temperatura en °C:"));

if (temp < 10) {
  alert("muy frío");
} else if (temp < 20) {
  alert("frío");
} else if (temp < 30) {
  alert("agradable");
} else {
  alert("caluroso");
}