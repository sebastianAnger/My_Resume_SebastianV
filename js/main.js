// (function ($) {
//     "use strict";

//     // Smooth scrolling on the navbar links
//     $(".navbar-nav a").on('click', function (event) {
//         if (this.hash !== "") {
//             event.preventDefault();

//             $('html, body').animate({
//                 scrollTop: $(this.hash).offset().top - 30
//             }, 1500, 'easeInOutExpo');

//             if ($(this).parents('.navbar-nav').length) {
//                 $('.navbar-nav .active').removeClass('active');
//                 $(this).closest('a').addClass('active');
//             }
//         }
//     });


//     // Typed Initiate
//     if ($('.header h2').length == 1) {
//         var typed_strings = $('.header .typed-text').text();
//         var typed = new typed('.header h2', {
//             strings: typed_strings.split(', '),
//             typeSpeed: 100,
//             backSpeed: 20,
//             smartBackspace: false,
//             loop: true
//         });
//     }


//     // Skills
//     $('.skills').waypoint(function () {
//         $('.progress .progress-bar').each(function () {
//             $(this).css("width", $(this).attr("aria-valuenow") + '%');
//         });
//     }, {offset: '80%'});


//     // Porfolio isotope and filter
//     var portfolioIsotope = $('.portfolio-container').isotope({
//         itemSelector: '.portfolio-item',
//         layoutMode: 'fitRows'
//     });

//     $('#portfolio-flters li').on('click', function () {
//         $("#portfolio-flters li").removeClass('filter-active');
//         $(this).addClass('filter-active');

//         portfolioIsotope.isotope({filter: $(this).data('filter')});
//     });


//     // Review slider
//     $('.review-slider').slick({
//         autoplay: true,
//         dots: false,
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1
//     });


//     // Back to top button
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 100) {
//             $('.back-to-top').fadeIn('slow');
//         } else {
//             $('.back-to-top').fadeOut('slow');
//         }
//     });
//     $('.back-to-top').click(function () {
//         $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
//         return false;
//     });

// const myButton = document.getElementById('downloadbtn');

// myButton.addEventListener('click', function() {
//     console.log('The button was clicked!');
// });


// })(jQuery);

//DWN

document.getElementById('downloadbtn').addEventListener('click', function(e) {
    e.preventDefault();
    generatePDF();
    console.log("1");
});

//  const myButton = document.getElementById('downloadbtn');

//  myButton.addEventListener('click', function() {
//      console.log('The button was clicked!');
//  });



async function generatePDF() {
    console.log("ENTRE");
            //Downloading
            var downloading = document.getElementById("experience");
            var doc = new jsPDF('l', 'pt');

            await html2canvas(downloading, {
                allowTaint: true,
                useCORS: true,
                width: 800,
                height: 3800
            }).then((canvas) => {
                //Canvas (convert to PNG)
                doc.addImage(canvas.toDataURL("image/png"), 'PNG', 5, 5, 800, 3250);
            })

            doc.save("Document.pdf");

            //End of downloading

            document.getElementById("downloadbtn").innerHTML = "Resume";
        }

