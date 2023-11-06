document.addEventListener('DOMContentLoaded', function () {
    const slideLeft = document.querySelector('.animate-left');
    const slideRight = document.querySelector('.animate-right');
    const fadeImage = document.querySelector('.animate-fade');
    const scale = document.querySelector('.animate-scale');
    const gradientText = document.querySelector('animate-gradient');

    const homeSection = document.getElementById('home');
    const animateAbout = document.querySelector('.grid');
    const aboutSection = document.getElementById('about');
    const projectSection = document.getElementById('projects');

    const parallaxOffsetStart = 223;
    //const devToolsEndOffset = 2561;

    const projects = document.querySelectorAll('.project');
    const projectsSection = document.getElementById('projects');
    const projectColors = [
        '#e5e5e5',
        '#eaf6f6',
        '#f4eeff',
        '#ebd5d5',
        '#e3e3e3'
    ]
    const projectBgColors = [
        '#5c5470',
        '#3e4a61',
        '#352f44',
        '#424141',
        '#455d7a'
    ];

    let prevOffset = window.scrollY;

    // SLIDE EFFECTS FUNCTION
    function handleScroll() {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 100) {
            slideLeft.classList.add('active');
            slideRight.classList.add('active');
        }
        else {
            slideLeft.classList.remove('active');
            slideRight.classList.remove('active');
        }

        /*if (scrollPosition > 50) {
            fadeImage.classList.add('fade-out');
        }
        else {
            fadeImage.classList.remove('fade-out');
        }*/

        if (scrollPosition > 200) {
            scale.classList.add('active');
        }
        else {
            scale.classList.remove('active');
        }
    }



    // PARALLAX EFFECTS FUNCTION 
    window.onscroll = () => {
        const offset = window.scrollY;
        console.log('Offset: ' + offset);

        const startOffset = 558;
        const endOffset = 1255;

        const projectsOffset = 1229;//1129;
        const projectEndOffset = 2859;


        // PARALLAX EFFECT - HOME SECTION
        if (offset >= parallaxOffsetStart) {
            const scrollAmount = (offset - parallaxOffsetStart) * 0.7;

            homeSection.style.backgroundPositionY = scrollAmount + 'px';
        }
        else {
            homeSection.style.backgroundPositionY = '0';
        }

        // PARALLAX EFFECT - PROJECT SECTION
        if (offset >= projectsOffset && offset <= projectEndOffset) {
            const scrollAmount = (offset - projectsOffset) * 0.7;

            aboutSection.style.transform = `translateY(${scrollAmount}px)`;
        }
        else {
            aboutSection.style.transform = 'translateY(0)';
        }

        // SCROLL ANIMATION ABOUT SECTION
        /*if (offset >= startOffset && offset <= endOffset) {
            animateAbout.classList.add('show-animation');
        }
        else {
            animateAbout.classList.remove('show-animation');
        }

    prevOffset = offset;*/
    };



    // HOVER EFFECT - PROJECTS SECTION
    projects.forEach((project, index) => {
        project.addEventListener('mouseenter', () => {
            project.style.cursor = 'pointer';
            project.style.backgroundColor = projectColors[index];
            project.style.transition = 'background-color 0.4s ease-in-out';
            projectsSection.style.backgroundColor = projectBgColors[index];
            projectsSection.style.transition = 'background-color 0.4s ease-in-out'
        });

        project.addEventListener('mouseleave', () => {
            project.style.backgroundColor = '#fff';
            projectsSection.style.backgroundColor = '#1e1c27';
        });
    });


    // CONTACT FORM SUBMISSION FUNCTION
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        this.contact_number.value = Math.random() * 10000 | 0;
        emailjs.sendForm('contact_service', 'contact_form_template', this)
            .then(function () {
                console.log('Success!');
            }, function (error) {
                alert('Something went wrong', error);
            });
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll();
})