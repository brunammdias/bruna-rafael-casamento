function scrollToSection() {
  document.querySelector(".details").scrollIntoView({
    behavior: "smooth"
  });
}

const countdown = document.getElementById("countdown");

const weddingDate = new Date("September 19, 2026 15:00:00").getTime();

setInterval(function() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  countdown.innerHTML =
    days + " dias • " +
    hours + " horas • " +
    minutes + " minutos";
}, 1000);