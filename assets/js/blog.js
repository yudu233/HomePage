(function($) {
	$(window).on("load", function() {
		$("#status").delay(1000).fadeOut("slow");
		$("#preloader").delay(1000).fadeOut("slow");
	});

	$(document).ready(function() {

		//typed js
		$(".typed").typed({
			strings: ["My Name is M.Rain", "Swim the fish in the water", "I'm a Web Designer"],
			typeSpeed: 100,
			backDelay: 900,
			// loop
			loop: true
		});

		//owl carousel
		$(".owl-carousel2").owlCarousel({
			autoPlay: true, //是否自动播放
			autoplayTimeout: 3000, //自动播放的时间间隔

			items: 1, //在屏幕中可见的项
			itemsDesktop: [1199, 1],
			itemsDesktopSmall: [979, 1],
			itemsTablet: [768, 1],
			itemsMobile: [479, 1],

			// CSS Styles
			baseClass: "owl-carousel",
			theme: "owl-theme"
		});

		//skill
		jQuery('.skillbar').each(function() {
			jQuery(this).appear(function() {
				jQuery(this).find('.count-bar').animate({
					width: jQuery(this).attr('data-percent')
				}, 3000);
				var percent = jQuery(this).attr('data-percent');
				jQuery(this).find('.count').html('<span>' + percent + '</span>');
			});
		});

		//gallery
		$('#gallery').poptrox({

			baseZIndex: 1000, // Base Z-Index
			fadeSpeed: 300, // Global fade speed
			overlayColor: '#000000', // 背景颜色
			overlayOpacity: 0.6, // 背景透明度	
			windowMargin: 80, // 窗口边距
			windowHeightPad: 0, // Window height pad
			selector: 'a', // Anchor tag selector
			popupIsFixed: false, // /如果为true，弹出窗口不会调整大小以适应图像 
			usePopupLoader: true, // If true, show the popup loader
			usePopupCloser: true, // If true, show the popup closer button/link
			usePopupCaption: true, // If true, show the popup image caption
			usePopupNav: true, // If true, show (and use) popup navigation
			usePopupDefaultStyling: true, // If true, default popup styling will be applied
			popupBackgroundColor: '#FFFFFF', // (Default Style) Popup background color (when 
			popupTextColor: '#000000', // (Default Style) Popup text color (when

		});

	});

})(jQuery);