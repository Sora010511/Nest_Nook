// slider
$(".slider").slick({
    arrows: true,
    prevArrow: '<div class="slide-arrow prev-arrow"></div>',
    nextArrow: '<div class="slide-arrow next-arrow"></div>',
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,

    responsive: [
        {
            breakpoint: 900,
            settings: {
                centerPadding: "50px",
                slidesToShow: 1,
            },
        },
    ],
});

//スムーススクロール
$('a[href^="#"]').click(function () {
    // クリックしたaタグのリンクを取得
    let href = $(this).attr("href");
    // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
    let target = $(href == "#" || href == "" ? "html" : href);
    // ページトップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
    // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
    $("html, body").animate({ scrollTop: position }, 600, "swing");
    // urlが変化しないようにfalseを返す
    return false;
});

// ハンバーガーメニュー
$(".hamburger").on("click", function () {
    $("header").toggleClass("open");
});

// #maskのエリアをクリックした時にメニューを閉じる
$(".mask").on("click", function () {
    $("header").removeClass("open");
});

// リンクをクリックした時にメニューを閉じる
$(".navi a").on("click", function () {
    $("header").removeClass("open");
});

// アコーディオン
$('.faq-ttl').click(function(){
    $(this).next('.faq-content').slideToggle();
    $(this).toggleClass('is-active');
});

