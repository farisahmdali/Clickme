// Handle navigation smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize all ad buttons
document.addEventListener('DOMContentLoaded', function() {
    // Setup main redirect button with progress tracking
    const redirectButton = document.getElementById('redirectButton');
    const adLink = "https://www.effectiveratecpm.com/ub2a9a2t?key=b9c4f34b15fa5b2b885862ffc9aab13a";
    const telegramLink = "https://t.me/+VzkqtqLIjlM3ZWFl";
    
    // Create progress bar container
    const progressContainer = document.createElement('div');
    progressContainer.className = 'progress-container';
    progressContainer.innerHTML = '<div class="progress-text">Progress: <span id="progress-count">0</span>/5</div><div class="progress-bar"><div class="progress-fill"></div></div>';
    
    // Insert progress bar before the button
    redirectButton.parentNode.insertBefore(progressContainer, redirectButton);
    
    const progressFill = document.querySelector('.progress-fill');
    const progressCount = document.getElementById('progress-count');
    
    // Initialize click counter
    let clickCount = localStorage.getItem('redirectClickCount') ? 
                     parseInt(localStorage.getItem('redirectClickCount')) : 0;
    
    // Update progress bar initially
    updateProgressBar(clickCount);
    
    // Setup main redirect button
    redirectButton.addEventListener('click', function() {
        if (clickCount < 5) {
            clickCount++;
            localStorage.setItem('redirectClickCount', clickCount);
            updateProgressBar(clickCount);
            window.location.href = adLink;
        } else {
            window.location.href = telegramLink;
            clickCount = 0;
            localStorage.setItem('redirectClickCount', clickCount);
            updateProgressBar(clickCount);
        }
    });

    // Setup all ad buttons
    document.querySelectorAll('.ad-button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const link = this.getAttribute('data-ad-link');
            window.open(link,"_self");
        });

        // Add hover effect
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Function to update progress bar
    function updateProgressBar(count) {
        const percentage = (count / 5) * 100;
        progressFill.style.width = `${percentage}%`;
        progressCount.textContent = count;
    }

    // Floating button position update
    const floatingButton = document.querySelector('.floating-ad-button');
    if (floatingButton) {
        let lastScrollTop = 0;
        window.addEventListener('scroll', function() {
            const st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop) {
                // Scrolling down
                floatingButton.style.bottom = '20px';
            } else {
                // Scrolling up
                floatingButton.style.bottom = '100px';
            }
            lastScrollTop = st <= 0 ? 0 : st;
        });
    }
});

// Add lazy loading for images
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

// Add popup notification for ad clicks
function showAdNotification() {
    const notification = document.createElement('div');
    notification.className = 'ad-notification';
    notification.textContent = 'Loading special offer...';
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 2000);
}
