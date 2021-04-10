var btnMenuOpen = false;

$(document).ready(function() {
  $('body').bootstrapMaterialDesign();
  resizeCfg();
});

$(window).resize(resizeCfg);

$('#menu-btn').on('click', function() {
  if (window.innerWidth < 992) {
    if (!btnMenuOpen) {
      $('#front-panel').css('margin-left', 'var(--side-nav-dimen)');
      btnMenuOpen = true;
    } else {
      $('#front-panel').css('margin-left', 0);
      btnMenuOpen = false;
    }
  }
});

function resizeCfg() {
  if (window.innerWidth >= 992) {
    $('#front-panel').css('margin-left', 'var(--side-nav-dimen)');
    $('#front-panel').css('min-width', 0);
    btnMenuOpen = true;
  } else {
    $('#front-panel').css('margin-left', 0);
    $('#front-panel').css('min-width', window.innerWidth + 'px');
    btnMenuOpen = false;
  }
}
