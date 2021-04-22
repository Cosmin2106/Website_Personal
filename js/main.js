let currentPage = window.location.pathname.split("/").pop();
var btnMenuOpen = false;

firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();

$(document).ready(function() {
  $('body').bootstrapMaterialDesign();
  resizeCfg();
  if (currentPage == 'other.html') {
    loadPics(9);
  }
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

$('.tc1').on('click', function(event) {
  analytics.logEvent('linalg_res', {
    doc_name: $(event.target).parent().parent().text(),
    doc_link: $(event.target).attr('href')
  });
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

  if (window.innerHeight < 430) {
    $('#normal-drawer-btn-list').css('display', 'none');
    $('#small-drawer-btn-list').css('display', 'block');
  } else {
    $('#small-drawer-btn-list').css('display', 'none');
    $('#normal-drawer-btn-list').css('display', 'block');
  }
}
