(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Date and time picker
  $(".date").datetimepicker({
    format: "L",
  });
  $(".time").datetimepicker({
    format: "LT",
  });

  // Header carousel
  $(".header-carousel").owlCarousel({
    autoplay: false,
    animateOut: "fadeOutLeft",
    items: 1,
    dots: true,
    loop: true,
    nav: true,
    navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: false,
    smartSpeed: 1000,
    center: true,
    dots: false,
    loop: true,
    nav: true,
    navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });
})(jQuery);

const arrItem = [
  {
    layanan: "Cuci AC 0,5 - 1PK",
    harga: "Rp 65.000",
    ket: "Hanya Jasa",
  },
  {
    layanan: "Cuci AC 1,5 - 2PK",
    harga: "Rp 75.000",
    ket: "Hanya Jasa",
  },
  {
    layanan: "Tambah Freon R22 0.5 - 1PK",
    harga: "Rp 200.000",
    ket: "Part & Jasa",
  },
  {
    layanan: "Tambah Freon R22 1.5 - 2PK",
    harga: "Rp 250.000",
    ket: "Part & Jasa",
  },
  {
    layanan: "Tambah Freon R410 1,5 - 2PK",
    harga: "Rp 250.000",
    ket: "Part & Jasa",
  },
  {
    layanan: "Tambah Freon R410 0,5 - 1PK",
    harga: "Rp 350.000",
    ket: "Part & Jasa",
  },
  {
    layanan: "Isi Freon R22 1,5 - 2PK",
    harga: "	Rp 450.000",
    ket: "Part & Jasa",
  },
  {
    layanan: "Isi Freon R32 0,5 - 1PK",
    harga: "Rp 350.000",
    ket: "Part & Jasa",
  },
  {
    layanan: "Isi Freon R32 1,5 - 2PK",
    harga: "Rp 450.000",
    ket: "Part & Jasa",
  },
  {
    layanan: "Tambah Freon R32 0.5 - 1PK",
    harga: "Rp 200.000",
    ket: "Part & Jasa",
  },
  {
    layanan: "Tambah Freon R32 1,5 - 2PK",
    harga: "Rp 250.000",
    ket: "Part & Jasa",
  },
  {
    layanan: "Isi Freon R410 0,5 - 1PK",
    harga: "Rp 350.000",
    ket: "Part & Jasa",
  },
  {
    layanan: "Isi Freon R410 1.5 - 2PK",
    harga: "Rp 450.000",
    ket: "Part & Jasa",
  },
  {
    layanan: "Bongkar AC",
    harga: "Rp 200.000",
    ket: "Jasa/Titik.",
  },
  {
    layanan: "Pasang AC 0.5 - 1PK",
    harga: "Rp 275.000",
    ket: "Jasa/Titik.",
  },
  {
    layanan: "Pasang AC 1.5 - 2PK",
    harga: "Rp 375.000",
    ket: "Jasa/Titik.",
  },
  {
    layanan: "Bongkar Pasang 0.5 - 1PK",
    harga: "Rp 400.000",
    ket: "Jasa/Titik.",
  },
  {
    layanan: "Bongkar Pasang 1.5 - 2PK",
    harga: "Rp 500.000",
    ket: "Jasa/Titik.",
  },
  {
    layanan: "Bongkar Pasang 1.5 - 2PK",
    harga: "Rp 500.000",
    ket: "Jasa/Titik.",
  },
  {
    layanan: "Bobok Tembok/M",
    harga: "Rp 50.000",
    ket: "Hanya Jasa.",
  },
  {
    layanan: "Las Sambung Pipa Freon/Titik",
    harga: "Rp 125.000",
    ket: "Hanya Jasa.",
  },
  {
    layanan: "Las Kebocoran Pipa Freon",
    harga: "Rp 550.000",
    ket: "Jasa + Freon",
  },
  {
    layanan: "Kunjungan/Pengecekan AC",
    harga: "Rp 50.000",
    ket: "Hanya Jasa",
  },
  {
    layanan: "Ganti Kapasitor 0.5 - 1PK",
    harga: "Rp 350.000,- s/d 475.000",
    ket: "Part & Jasa",
  },
  {
    layanan: "Flushing Evapurator",
    harga: "Rp 275.000",
    ket: "Jasa",
  },
  {
    layanan: "Cuci Besar/Overhaul 0.5 - 1PK",
    harga: "Rp 375.000",
    ket: "Jasa",
  },
  {
    layanan: "Cuci Besar/Overhaul 1.5 - 2PK",
    harga: "Rp 475.000",
    ket: "Jasa",
  },
  {
    layanan: "Cuci AC Inverter 0.5 - 1PK",
    harga: "Rp 130.000",
    ket: "Jasa",
  },
];
const table = document.querySelector(".table-harga-hct");
const funcc = ({ layanan, harga, ket }) => {
  return `
    <tr>
    <td>
        ${layanan}
    </td>
    <td>
        ${harga}
    </td>
    <td>
        ${ket}
    </td>
  </tr>
    `;
};

arrItem.forEach((item) => {
  return (table.innerHTML += funcc(item));
});

table.innerHTML += funcc();
