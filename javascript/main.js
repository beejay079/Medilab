document.addEventListener("DOMContentLoaded", function () {
  // Back to top button functionality
  const backToTopBtn = document.querySelector(".fixed");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Form submission handling
  const appointmentForm = document.querySelector("#appointment form");
  const contactForm = document.querySelector("#contact form");

  appointmentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Appointment request submitted successfully!");
    appointmentForm.reset();
  });

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent successfully!");
    contactForm.reset();
  });

  // Smooth scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      if (this.getAttribute("href") !== "#") {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 70,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // Initialize Bootstrap components
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Gallery modal initialization
  const galleryModal = document.getElementById("carouselModal");
  if (galleryModal) {
    galleryModal.addEventListener("shown.bs.modal", function () {
      const modalCarousel = new bootstrap.Carousel(
        galleryModal.querySelector(".carousel")
      );
    });
  }
});
