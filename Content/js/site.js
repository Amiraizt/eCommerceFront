// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {


    if ($('.bbb_viewed_slider').length) {
        var viewedSlider = $('.bbb_viewed_slider');

        viewedSlider.owlCarousel(
            {
                rtl: true,
                loop: true,
                margin: 20,
                autoplay: false,
                //autoplayTimeout: 6000,
                nav: false,
                dots: false,
                items: 4,
                autoWidth: false,
                center: true,
                URLhashListener: true,
                autoplayHoverPause: true,
                startPosition: 'URLHash',
                responsive: {
                    0: {
                        items: 1,
                        stagePadding: 0
                    },
                    768: {
                        items: 2,
                        stagePadding: 0
                    },
                    992: {
                        items: 3,
                        stagePadding: 60
                    },
                    1200: {
                        items: 4
                    }
                }
            });

        if ($('.bbb_viewed_prev').length) {
            var prev = $('.bbb_viewed_prev');
            prev.on('click', function () {
                viewedSlider.trigger('prev.owl.carousel');
            });
        }

        if ($('.bbb_viewed_next').length) {
            var next = $('.bbb_viewed_next');
            next.on('click', function () {
                viewedSlider.trigger('next.owl.carousel');
            });
        }
    }


    if ($('.best_sellers_slider').length) {
        var bestSellersSlider = $('.best_sellers_slider');

        bestSellersSlider.owlCarousel(
            {
                rtl: true,
                loop: true,
                margin: 20,
                autoplay: false,
                //autoplayTimeout: 6000,
                nav: false,
                dots: false,
                items: 4,
                autoWidth: false,
                center: true,
                URLhashListener: true,
                autoplayHoverPause: true,
                startPosition: 'URLHash',
                responsive: {
                    0: {
                        items: 1,
                        stagePadding: 0
                    },
                    768: {
                        items: 2,
                        stagePadding: 0
                    },
                    992: {
                        items: 3,
                        stagePadding: 60
                    },
                    1200: {
                        items: 4
                    }
                }
            });

        if ($('.best_sellers_prev').length) {
            var prev = $('.best_sellers_prev');
            prev.on('click', function () {
                bestSellersSlider.trigger('prev.owl.carousel');
            });
        }

        if ($('.best_sellers_next').length) {
            var next = $('.best_sellers_next');
            next.on('click', function () {
                bestSellersSlider.trigger('next.owl.carousel');
            });
        }
    }

    if ($('.popular_products_slider').length) {
        var popularProductsSlider = $('.popular_products_slider');

        popularProductsSlider.owlCarousel(
            {
                rtl:true,
                //stagePadding: 80,
                loop: true,
                dots: false,
                margin: 3,
                nav: false,
                items: 4,
                autoWidth: true,
                center: true,
                //URLhashListener: true,
                //autoplayHoverPause: true,
                //startPosition: 'URLHash',
                responsive: {
                    0: {
                        items: 1,
                        stagePadding: 0
                    },
                    768: {
                        items: 1,
                        stagePadding: 0
                    },
                    992: {
                        items: 2,
                        stagePadding: 60
                    },
                    1200: {
                        items: 3
                    }
                }
            });

        if ($('.popular_products_prev').length) {
            var prev = $('.popular_products_prev');
            prev.on('click', function () {
                popularProductsSlider.trigger('prev.owl.carousel');
            });
        }

        if ($('.popular_products_next').length) {
            var next = $('.popular_products_next');
            next.on('click', function () {
                popularProductsSlider.trigger('next.owl.carousel');
            });
        }
    }

    if ($('.new_products_slider').length) {
        var newrProducsViewedSlider = $('.new_products_slider');

        newrProducsViewedSlider.owlCarousel(
            {
                rtl: true,
                //stagePadding: 80,
                loop: true,
                dots: false,
                margin: 20,
                nav: false,
                items: 3,
                autoWidth: false,
                center: true,
                URLhashListener: true,
                autoplayHoverPause: true,
                startPosition: 'URLHash',
                responsive: {
                    0: {
                        items: 1,
                        stagePadding: 0
                    },
                    768: {
                        items: 1,
                        stagePadding: 0
                    },
                    992: {
                        items: 2,
                        stagePadding: 60
                    },
                    1200: {
                        items: 3
                    }
                }
            });

        if ($('.new_products_prev').length) {
            var prev = $('.new_products_prev');
            prev.on('click', function () {
                newrProducsViewedSlider.trigger('prev.owl.carousel');
            });
        }

        if ($('.new_products_next').length) {
            var next = $('.new_products_next');
            next.on('click', function () {
                newrProducsViewedSlider.trigger('next.owl.carousel');
            });
        }
    }
});