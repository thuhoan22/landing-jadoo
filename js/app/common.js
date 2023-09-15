; (function (win, $) {
	var initSellingSwiper = function () {
		if ($('.selling').length) {
		  var swiperTab,
			swiperTarget = '.selling .swiper';
	
		  var settings = {
			slidesPerView: 'auto',
			spaceBetween: 0,
			pagination: {
				el: ".swiper-pagination",
			},
		  }
	
		  swiperTab = new Swiper(swiperTarget, settings);
	
			$(win).on('resize', function () {
				if ($(window).outerWidth() < 992) {
					clearTimeout($.data(this, 'scrollTimer'));
			
					$.data(this, 'scrollTimer', setTimeout(function () {
						if (swiperTab == undefined) {
							swiperTab = new Swiper(swiperTarget, settings);
							}
						}, 50));
					} else {
						clearTimeout($.data(this, 'scrollTimer'));
				
						$.data(this, 'scrollTimer', setTimeout(function () {
							if (swiperTab != undefined) {
							swiperTab.destroy();
							swiperTab = undefined;
						}
					}, 50));
				}
			})
		}
	}
	initSellingSwiper();

	// Fixed header when scroll
	var stickyHeader = function () {
		var initPosition = $(window).scrollTop();
		if (initPosition > 0) {
			$('.js-header').addClass('header-sticky');
			$('.js-header').css({
				background: '#fff'
			});
		} else {
			$('.js-header').removeClass('header-sticky');
			$('.js-header').css({
				background: 'transparent'
			});
		};
	};

	// Open GNB
	var mobileGnbOpen = function () {
		var $btn_menu = $('.gnb .btn-mobile');
	
		$btn_menu.on('click', function () {
		  var $this = $(this),
			$thisExpanedStatus = $this.attr('aria-expanded');
	
		  if ($thisExpanedStatus == 'false') {
			$this.addClass('is-active');
			$this.closest('.gnb').addClass('is-open');
			$this.attr('aria-expanded', 'true');
		  } else {
			$this.removeClass('is-active');
			$this.closest('.gnb').removeClass('is-open');
			$this.attr('aria-expanded', 'false');
		  }
		});
	};

	// animation Fade
	var animateFade = function () {
		var $animateFade = $('[data-animate]');

		$animateFade.each(function () {
			var $this = $(this),
				$thisOffSetTop = $this.offset().top,
				$winScroll = $(win).scrollTop(),
				$scrollPoint = $winScroll + $(win).innerHeight();

			$thisOffSetTop < $scrollPoint ? $this.addClass('js-animate-init') : $this.removeClass('js-animate-init');
		});
	};

	// animation decor plane 
	var planeJump = function() {
		if ($(window).outerWidth() > 992) {
			var $aniJump = $('.spot-content');
			var aniAreaHeight = $aniJump.outerHeight();
			var aniAreaWidth = $aniJump.outerWidth();
			var commonCss = { 'top': '-' + aniAreaHeight + 'px', 'right': + aniAreaWidth + 'px' };
			var chara = $aniJump.find('.decor1').css(commonCss);
			var afterCss = { 'top': 0, 'right': '480px' };
	
			var dropTargets = function(targets, interval, speed, boundClass){
				if (!boundClass) {
					boundClass = 'jsBound01';
				}
	
				var length = targets.length;
				for (var i = length; i > 0; i--) {
					var idx = Math.floor(Math.random() * i);
					targets.eq(idx).delay((length - i) * interval).animate(afterCss, speed, 'easeOutQuint', function() {
						$(this).addClass(boundClass);
					});
					targets.splice(idx, 1);
				}
			};
	
			var timer = 200;
			setTimeout(function() {
				dropTargets(chara, 100, 1000);
			}, timer);
		}
	};

	// animation Spot 
	var aniSpot = function () {
		$(b = setTimeout(function () {
			$('.decor.decor2').addClass('is-active');
		}, 500));
	}

	// animation Load item 
	var lazyloadItem = function () {
		var lazyloadTimeout;

		var lazyload = function () {
			if (lazyloadTimeout) {
				clearTimeout(lazyloadTimeout);
			}

			var initPosition = $(win).scrollTop(),
				windowHeight = $(win).innerHeight();

			if($('.category').length) {
				$('.category .category-item').each(function () {
					var itemPosition = $(this).offset().top;
					var i = $(this).index() > 0 ? 1 : 0;
	
					if (initPosition >= (itemPosition - windowHeight - i * 200)) {
						$(setTimeout(function () {
							$('.category .category-item').eq(0).addClass('on');
							}, 400)),
							(setTimeout(function () {
								$('.category .category-item').eq(1).addClass('on');
							}, 500)),
							(setTimeout(function () {
								$('.category .category-item').eq(2).addClass('on');
							}, 600)),
							(setTimeout(function () {
								$('.category .category-item').eq(3).addClass('on');
							}, 700));
					}
				});
			};

			if($('.selling').length) {
				$('.selling .card').each(function () {
					var itemPosition = $(this).offset().top;
					var i = $(this).index() > 0 ? 1 : 0;
	
					if (initPosition >= (itemPosition - windowHeight - i * 200)) {
						$(setTimeout(function () {
							$('.selling .card').eq(0).addClass('on');
							}, 400)),
							(setTimeout(function () {
								$('.selling .card').eq(1).addClass('on');
							}, 500)),
							(setTimeout(function () {
								$('.selling .card').eq(2).addClass('on');
							}, 600)),
							(setTimeout(function () {
								$('.selling .card').eq(3).addClass('on');
							}, 700));
					}
				});
			};

			if($('.booking').length) {
				var $el = $('.booking .sec-image');
				var itemPosition = $el.offset().top;
				var i = $el.index() > 0 ? 1 : 0;

				if (initPosition >= (itemPosition - windowHeight - i * 200)) {
					$(setTimeout(function () {
							$('.booking .sec-image').addClass('on');
						}, 400)),
						(setTimeout(function () {
							$('.booking .card').addClass('on');
						}, 500));
				}
			};
		};

		lazyload();
		document.addEventListener('scroll', lazyload);
		window.addEventListener('resize', lazyload);
		window.addEventListener('orientationChange', lazyload);
	};

	$(win).on('scroll', function () {
		stickyHeader();
		animateFade();
		aniSpot();
	}).scroll();

	$(win).on('load', function () {
		mobileGnbOpen();
		lazyloadItem();
		planeJump();
	});

})(window, window.jQuery);
