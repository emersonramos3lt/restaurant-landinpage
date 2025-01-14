$(document).ready(function() {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function() {

        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        if (scrollPosition <= 0) {
            header.css('border-bottom', 'none');
        } else {
            header.css('border-bottom', '2px solid green');
        }

        let activeSectionIndex = 0;

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');

    }); // addEventListener

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '25%',
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '25%',
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 800,
        distance: '25%',
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'left',
        duration: 2000,
        distance: '25%',
    });
});