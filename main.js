'user strict'

// ハンバーガーメニューの実装
{
  const hamMenu = document.querySelector(".ham-menu");
  const nav = document.querySelector("#ham-nav");
  const itemList = document.querySelector(".nav-items");
  const hamMenuItems = document.querySelectorAll(".item");

  hamMenu.addEventListener("click", function() {
    hamMenu.classList.toggle("active");
    nav.classList.toggle("active");
    itemList.classList.toggle("slide");
  });

  hamMenuItems.forEach((hamMenuItems) => {
    hamMenuItems.addEventListener("click", function () {
      hamMenu.classList.remove("active");
      nav.classList.remove("active");
      itemList.classList.remove("slide");
    });
  });
}
