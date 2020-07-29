'use strict';

$(function () {
  $(window).on('load', function () {
    $('#sidr').removeClass('d-none'); //mudando o display do menu dropdown para evitar que 'pisque' no load da pagina

    $('.nav-dropdown').css('display', 'block');
  });
  $('.hamburger').sidr({
    name: 'sidr',
    side: 'right'
  });
  var Menu = {
    linkMenu: null,
    dropdown: null,
    hamburger: null,
    linkMenuMobile: null,
    btnVoltarMenuMobile: null,
    init: function init() {
      this.linkMenu = $('.has-children .link-menu');
      this.dropdown = $('.menu-dropdown');
      this.hamburger = $('.menu-mobile .hamburger');
      this.linkMenuMobile = $('.has-children a');
      this.btnVoltarMenuMobile = $('.voltar-menu');
      this.linkMenu.on('click', function (e) {
        e.preventDefault();
        var dataMenu = $(this).attr('data-menu');
        var dropdown = $(".menu-dropdown.".concat(dataMenu));
        var selecionado = $(this);
        Menu.mostraMenu(selecionado, dropdown);
      });
      this.hamburger.on('touchstart', function () {
        Menu.ativaMobile();
      });
    },
    mostraMenu: function mostraMenu(selecionado, dropdown) {
      /* Desktop */
      if (selecionado.next('ul').hasClass('is-hidden')) {
        selecionado.addClass('selecionado').next('ul').removeClass('is-hidden').end().parent('ul');
        selecionado.parent('.has-children').siblings('.has-children').children('ul').addClass('is-hidden').end().children('a').removeClass('selecionado');
      } else {
        selecionado.removeClass('selecionado').next('ul').addClass('is-hidden').end().parent('.has-children').parent('ul');
      }
    },
    ativaMobile: function ativaMobile() {
      var wrap = $('.wrap');

      if (!this.hamburger.hasClass('is-active')) {
        $(this.hamburger).addClass('is-active');
        this.linkMenuMobile.on('click', function (e) {
          var selecionado = $(this);
          wrap.addClass('esconde');

          if (selecionado.next('ul').hasClass('is-hidden')) {
            selecionado.addClass('selecionado').next('ul').removeClass('is-hidden').end().parent('ul');
          }
        });
        this.btnVoltarMenuMobile.on('click', function (e) {
          e.preventDefault();
          Menu.resetaMobile(this);
        });
      } else {
        $(this.hamburger).removeClass('is-active');
        Menu.resetaMobile(this);
      }
    },
    resetaMobile: function resetaMobile(ativo) {
      $(ativo).parent('ul').addClass('is-hidden').parent('.has-children').parent('ul');
      $('.link-menu-mobile').removeClass('selecionado');
      $('.wrap').removeClass('esconde');
      $('.nav-dropdown-mobile').addClass('is-hidden');
    }
  };
  Menu.init();
});
//# sourceMappingURL=index.js.map
