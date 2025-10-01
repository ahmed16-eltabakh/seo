document.addEventListener("DOMContentLoaded", function () {

  const menuList = document.querySelector(".menu_list");
  const openBtn = document.querySelector(".open_menu");
  const closeBtn = document.querySelector(".close_menu");

  const speed = 300;

  closeBtn.addEventListener("click", function () {
    menuList.style.transition = `opacity ${speed}ms`;
    menuList.style.opacity = "0";

    setTimeout(() => {
      menuList.style.display = "none";
      closeBtn.style.display = "none";
      openBtn.style.display = "block";
    }, speed);
  });

  openBtn.addEventListener("click", function () {
    menuList.style.display = "flex";
    menuList.style.opacity = "0";
    menuList.style.transition = `opacity ${speed}ms`;

    setTimeout(() => {
      menuList.style.opacity = "1";
    }, 10);

    openBtn.style.display = "none";
    closeBtn.style.display = "block";
  });

  const cards = document.querySelectorAll(".card, .exp-item, .cert-item, .card_container, .side_bar, .my_cv, .ft_p");

  cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.6s ease";
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.2
  });

  cards.forEach(card => observer.observe(card));
});
