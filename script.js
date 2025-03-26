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
    // Array of travel-related websites
    const websites = [
        'https://www.nationalgeographic.com/travel',
        'https://www.lonelyplanet.com',
        'https://www.tripadvisor.com',
        'https://www.booking.com',
        'https://www.expedia.com'
    ];
    
    // Get a random website from the array
    const randomWebsite = websites[Math.floor(Math.random() * websites.length)];
    
    // Track click event (if you want to add analytics)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
            'event_category': 'outbound',
            'event_label': randomWebsite
        });
    }
    
    // Open in new tab instead of direct redirect
    window.open(randomWebsite, '_blank');
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
