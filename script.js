// Handle navigation smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Redirect button functionality
document.getElementById('redirectButton').addEventListener('click', function() {
    const safetyResources = [
        'https://staysafeonline.org',
        'https://www.consumer.ftc.gov/topics/privacy-identity-online-security',
        'https://www.connectsafely.org',
        'https://www.internetsociety.org/learning/',
        'https://www.ncsc.gov.uk/section/information-for/individuals-families'
    ];
    
    const randomResource = safetyResources[Math.floor(Math.random() * safetyResources.length)];
    window.open(randomResource, '_blank');
});

// Add lazy loading for images if you add them later
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    const imageOptions = {
        threshold: 0,
        rootMargin: '0px 0px 50px 0px'
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('fade');
                observer.unobserve(img);
            }
        });
    }, imageOptions);

    images.forEach(img => imageObserver.observe(img));
});
