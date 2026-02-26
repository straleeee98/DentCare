(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Image comparison
    $(".twentytwenty-container").twentytwenty({});


    // Price carousel
    $(".price-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });
    
})(jQuery);

//--------------------------------------------//
//-----------------NATIVE JS  ----------------//
//--------------------------------------------//
document.addEventListener("DOMContentLoaded", function() {
    
    function generateNavigation() {
        const navContainer = document.querySelector(".navbar-nav");
        if (navContainer) {
            const authorLink = `<a href="author.html" class="nav-item nav-link">Author</a>`;
            const zipLink = `<a href="projekat.zip" class="nav-item nav-link">ZIP</a>`;
            
            navContainer.innerHTML += authorLink + zipLink;
        }
    }
    generateNavigation();

    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault(); 

            let isValid = true;

            let fullname = document.getElementById("fullname").value.trim();
            let email = document.getElementById("email").value.trim();
            let service = document.getElementById("serviceChoice").value;
            let statusNew = document.getElementById("novi");
            let statusOld = document.getElementById("stari");

            let nameErr = document.getElementById("nameErr");
            let emailErr = document.getElementById("emailErr");
            let serviceErr = document.getElementById("serviceErr");
            let statusErr = document.getElementById("statusErr");
            let successMsg = document.getElementById("formSuccess");

            let reName = /^[A-Z][a-z]{2,14}(\s[A-Z][a-z]{2,14})+$/; 
            let reEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

            if (!reName.test(fullname)) {
                nameErr.innerText = "Format: Name Surname (e.g. John Doe).";
                isValid = false;
            } else {
                nameErr.innerText = "";
            }

            if (!reEmail.test(email)) {
                emailErr.innerText = "Please enter a valid email address.";
                isValid = false;
            } else {
                emailErr.innerText = "";
            }

            if (service === "0") {
                serviceErr.innerText = "Please choose a dental service.";
                isValid = false;
            } else {
                serviceErr.innerText = "";
            }

            if (!statusNew.checked && !statusOld.checked) {
                statusErr.innerText = "Please select your patient status.";
                isValid = false;
            } else {
                statusErr.innerText = "";
            }

            if (isValid) {
                successMsg.innerText = "Message sent successfully! Thank you, " + fullname.split(' ')[0] + ".";
                contactForm.reset(); 
            } else {
                successMsg.innerText = ""; 
            }
        });
    }

    const appointmentForm = document.getElementById("appointment-form");

    if (appointmentForm) {
        appointmentForm.addEventListener("submit", function(e) {
            e.preventDefault();

            let isAppValid = true;

            let appName = document.getElementById("app-name").value.trim();
            let appEmail = document.getElementById("app-email").value.trim();
            let appService = document.getElementById("app-service").value;
            let appDoctor = document.getElementById("app-doctor").value;
            let appDate = document.getElementById("app-date").value.trim();
            let appTime = document.getElementById("app-time").value.trim();

            let appNameErr = document.getElementById("appNameErr");
            let appEmailErr = document.getElementById("appEmailErr");
            let appServiceErr = document.getElementById("appServiceErr");
            let appDoctorErr = document.getElementById("appDoctorErr");
            let appDateErr = document.getElementById("appDateErr");
            let appTimeErr = document.getElementById("appTimeErr");
            let appSuccess = document.getElementById("appSuccess");

            let reName = /^[A-Z][a-z]{2,14}(\s[A-Z][a-z]{2,14})+$/;
            let reEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

            if (!reName.test(appName)) {
                appNameErr.innerText = "Format: Name Surname.";
                isAppValid = false;
            } else { appNameErr.innerText = ""; }

            if (!reEmail.test(appEmail)) {
                appEmailErr.innerText = "Invalid email.";
                isAppValid = false;
            } else { appEmailErr.innerText = ""; }

            if (appService === "0" || appService === "Select A Service") {
                appServiceErr.innerText = "Choose a service.";
                isAppValid = false;
            } else { appServiceErr.innerText = ""; }

            if (appDoctor === "0" || appDoctor === "Select Doctor") {
                appDoctorErr.innerText = "Choose a doctor.";
                isAppValid = false;
            } else { appDoctorErr.innerText = ""; }

            if (appDate === "") {
                appDateErr.innerText = "Select a date.";
                isAppValid = false;
            } else { appDateErr.innerText = ""; }

            if (appTime === "") {
                appTimeErr.innerText = "Select a time.";
                isAppValid = false;
            } else { appTimeErr.innerText = ""; }

            if (isAppValid) {
                appSuccess.innerText = "Appointment requested successfully!";
                appointmentForm.reset();
            } else {
                appSuccess.innerText = "";
            }
        });
    }

    renderDentalServices();
    setupNavigation();
});

const dentalData = [
    { title: "Cosmetic Dentistry", image: "img/service-1.jpg", delay: "0.6s" },
    { title: "Dental Implants", image: "img/service-2.jpg", delay: "0.9s" },
    { title: "Dental Bridges", image: "img/service-3.jpg", delay: "0.3s" },
    { title: "Teeth Whitening", image: "img/service-4.jpg", delay: "0.6s" }
];

function renderDentalServices() {
    const row1 = document.getElementById("services-row-1");
    const row2 = document.getElementById("services-row-2");

    if (row1 && row2) {
        let html1 = "";
        let html2 = "";

        dentalData.forEach((service, index) => {
            const cardHtml = `
                <div class="col-md-6 service-item wow zoomIn" data-wow-delay="${service.delay}">
                    <div class="rounded-top overflow-hidden">
                        <img class="img-fluid" src="${service.image}" alt="${service.title}">
                    </div>
                    <div class="position-relative bg-light rounded-bottom text-center p-4">
                        <h5 class="m-0">${service.title}</h5>
                    </div>
                </div>`;
            
            if (index < 2) html1 += cardHtml;
            else html2 += cardHtml;
        });

        row1.innerHTML = html1;
        row2.innerHTML = html2;
    }
}

function setupNavigation() {
    const navContainer = document.querySelector(".navbar-nav");

    if (navContainer) {
        const allLinks = [
            { name: "Home", path: "index.html", isDownload: false },
            { name: "Services", path: "service.html", isDownload: false },
            { name: "Appointment", path: "appointment.html", isDownload: false }, 
            { name: "Contact", path: "contact.html", isDownload: false },
            { name: "Author", path: "author.html", isDownload: false },
            { name: "ZIP", path: "projekat.zip", isDownload: true },
            { name: "DOC", path: "documentation.pdf", isDownload: true }
        ];

        navContainer.innerHTML = "";

        allLinks.forEach(link => {
            let anchor = document.createElement("a");
            anchor.setAttribute("href", link.path);
            anchor.className = "nav-item nav-link";
            anchor.textContent = link.name;

            if (link.isDownload) {
                anchor.setAttribute("download", "");
            }

            navContainer.appendChild(anchor);
        });
    }
}