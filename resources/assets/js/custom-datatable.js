$(document).ready(function() {
  var handleDataTableButtons = function() {
    if ($("#datatable-buttons").length) {
      $("#datatable-buttons").DataTable({
        dom: "Bfrtip",
        buttons: [
          {
            extend: "copy",
            className: "btn-sm"
          },
          {
            extend: "csv",
            className: "btn-sm"
          },
          {
            extend: "excel",
            className: "btn-sm"
          },
          {
            extend: "pdfHtml5",
            className: "btn-sm"
          },
          {
            extend: "print",
            className: "btn-sm"
          },
        ],
        responsive: true,
        fixedHeader: true,
        keys: true,
      });
    }
  };

  $('#datatable-responsive').DataTable({
    fixedHeader: true,
    keys: true,
  });
  var table = $('#datatable-fixed-header').DataTable({
    fixedHeader: true,
    bSort:false,
    iDisplayLength:25
    // keys: true,
  });
});