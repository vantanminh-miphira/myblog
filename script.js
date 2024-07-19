document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".contactButton");
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      const link = button.getAttribute("data-link");
      if (link) {
        window.location.href = link;
      }
    });
  });
});

  