(function($) {
    "use strict";

    // Spinner
    var spinner = function() {
        setTimeout(function() {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-primary shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('bg-primary shadow-sm').css('top', '-150px');
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

})(jQuery);


function scrollToEvents(cmd) {
    // Get the target element by its ID
    var eventsSection = document.getElementById(cmd);

    // Scroll to the target element
    eventsSection.scrollIntoView({ behavior: 'smooth' });
}

// function hideEvents() {
//     // Get the target element by its ID
//     var workshop = document.getElementById('Workshop');
//     var events = document.getElementById("Events")

//     // Scroll to the target element
//     workshop.style.display = "block"
//     events.style.display = "none"
//     scrollToEvents('eventsx')
// }


// function hideWorkshop() {
//     // Get the target element by its ID
//     var workshop = document.getElementById('Workshop');
//     var events = document.getElementById("Events")

//     // Scroll to the target element
//     workshop.style.display = "none"
//     events.style.display = "block"
//     scrollToEvents('events')
// }

function submitForm() {
    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Construct URL for Google Form with pre-filled values
    var googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSc01RXzOcpjNM880Jd3Li7tsEkwE-RN6rZGjPkCSquRo3Fk0w/formResponse?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&rollno=${encodeURIComponent(subject)}&message=${encodeURIComponent(message)}";

    // Open the Google Form in a new tab
    window.open(googleFormURL);
}