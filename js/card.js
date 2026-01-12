// Jalankan saat DOM siap (harus dipanggil di setiap halaman card)
$(document).ready(function () {
  // Fungsi inisialisasi toggle bahasa + DataTables
  function initCardPage() {
    // Inisialisasi DataTables
    const table = $("#vocabTable").DataTable({
      paging: true,
      searching: true,
      info: true,
      responsive: true,
      order: [], // opsional: nonaktifkan sort otomatis
      columnDefs: [
        { orderable: false, targets: "_all" }, // opsional: nonaktifkan sort jika tidak perlu
      ],
    });

    // Fungsi update tampilan sel
    function updateCells() {
      const mode = $('input[name="languageToggle"]:checked').val(); // 'indonesian' atau 'english'
      if (mode === "indonesian") {
        $(".english-cell").removeClass("hidden-text").addClass("visible-text");
        $(".indonesian-cell")
          .removeClass("visible-text")
          .addClass("hidden-text");
      } else {
        $(".english-cell").removeClass("visible-text").addClass("hidden-text");
        $(".indonesian-cell")
          .removeClass("hidden-text")
          .addClass("visible-text");
      }

      // $(".english-cell").each(function () {
      //   $(this).removeClass("hidden-text visible-text");
      //   if (mode === "indonesian") {
      //     $(this).addClass("visible-text");
      //   } else {
      //     $(this).addClass("hidden-text");
      //   }
      // });

      // $(".indonesian-cell").each(function () {
      //   $(this).removeClass("hidden-text visible-text");
      //   if (mode === "indonesian") {
      //     $(this).addClass("hidden-text");
      //   } else {
      //     $(this).addClass("visible-text");
      //   }
      // });
    }

    // Event saat radio berubah
    $('input[name="languageToggle"]').on("change", updateCells);

    // Inisialisasi awal
    updateCells();
  }

  initCardPage();
});
