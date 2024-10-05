$("#js-drawer-icon").click(function (e) {
  e.preventDefault();
  $("#js-drawer-icon").toggleClass("is-checked");
  $("#js-drawer-content").toggleClass("is-checked");
});

// QAアコースティック
$(".js-accordion").click(function (e) {
  e.preventDefault();
  if ($(this).parent().hasClass("is-open")) {
    $(this).parent().removeClass("is-open");
    $(this).next().slideUp();
  } else {
    $(this).parent().addClass("is-open");
    $(this).next().slideDown();
  }
});

const swiper = new Swiper("#js-gallery-swiper", {
  spaceBetween: 100,
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: "#js-gallery-pagination",
  },

  // Navigation arrows
  navigation: {
    prevEl: "#js-gallery-prev",
    nextEl: "#js-gallery-next",
  },
});

$(".js-modal-open").on("click", function (e) {
  e.preventDefault();
  $("#js-about-modal")[0].showModal(); // showModal()メソッドでダイアログを表示
});
$(".js-modal-close").on("click", function (e) {
  e.preventDefault();
  $("#js-about-modal")[0].close(); // close()メソッドでダイアログを閉じる
});

// ドロワーメニューのリンクをクリックしたとき
$("#js-drawer-content a[href^='#']").click(function () {
  // ドロワーメニューを閉じる
  $("#js-drawer-icon").removeClass("is-checked");
  $("#js-drawer-content").removeClass("is-checked");
});

// スムーススクロール
$("a[href^='#']").click(function () {
  const speed = 400; // スクロールの速さ
  const id = $(this).attr("href"); // クリックしたリンクのhref属性を取得
  const target = $(id == "#" || id == "" ? "html" : id); // ターゲットの要素を取得
  const position = target.offset().top; // ターゲットの位置を取得
  // #から始まるリンク先をクリックしたとき
  $("html, body").animate(
    {
      // スムーススクロール実行
      scrollTop: position,
    },
    speed,
    "swing" // スクロールの動き
  );
});

// ページトップへ戻るボタン表示・非表示
$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $("#js-pagetop").addClass("is-show").fadeIn();
  } else {
    $("#js-pagetop").removeClass("is-show").fadeOut();
  }
});
