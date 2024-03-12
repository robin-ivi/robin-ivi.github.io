(function ($) {
	"use strict";
 
	// settings open btn
	$(".tp-theme-settings-open-btn").on("click", function () {
		$(".tp-theme-settings-area").toggleClass("settings-opened");
	});


	// dark light mode toggler
	function tp_theme_toggler() {

		$('.themepure-theme-toggle-input').on("change", function () {
			toggleTheme();
		});


		// set toggle theme scheme
		function tp_set_scheme(tp_theme) {
			localStorage.setItem('tp_theme_scheme', tp_theme);
			document.documentElement.setAttribute("tp-theme", tp_theme);
		}

		// toogle theme scheme
		function toggleTheme() {
			if (localStorage.getItem('tp_theme_scheme') === 'tp-theme-dark') {
				tp_set_scheme('tp-theme-light');
                $('.themepure-theme-toggle').removeClass('dark-active').addClass('light-active');
			} else {
				tp_set_scheme('tp-theme-dark');
                $('.themepure-theme-toggle').removeClass('light-active').addClass('dark-active');
			}
		}

		// set the first theme scheme
		function tp_init_theme() {

			let htmlAttr = $('html').data('tp-theme')

			if(htmlAttr == 'tp-theme-light'){
				tp_set_scheme('tp-theme-light');
                $('.themepure-theme-toggle').removeClass('dark-active').addClass('light-active');
				document.getElementsByClassName('tp-theme-toggler').checked = false;
			}

			else if (localStorage.getItem('tp_theme_scheme') === 'tp-theme-light') {
				
                tp_set_scheme('tp-theme-light');
                $('.themepure-theme-toggle').removeClass('dark-active').addClass('light-active');
				document.getElementsByClassName('tp-theme-toggler').checked = false;

			} else {
				tp_set_scheme('tp-theme-dark');
				document.getElementsByClassName('tp-theme-toggler').checked = true;
                $('.themepure-theme-toggle').removeClass('light-active').addClass('dark-active');
			}
		}
		tp_init_theme();
	}
	if ($(".themepure-theme-toggle-input").length > 0) {
		tp_theme_toggler();
	}

})(jQuery);