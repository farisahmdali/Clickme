// Handle navigation smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Redirect button functionality with click counter and progress bar
document.addEventListener('DOMContentLoaded', function() {
    const redirectButton = document.getElementById('redirectButton');
    
    // Create progress bar container
    const progressContainer = document.createElement('div');
    progressContainer.className = 'progress-container';
    progressContainer.innerHTML = '<div class="progress-text">Download progress: <span id="progress-count">0</span>/5</div><div class="progress-bar"><div class="progress-fill"></div></div>';
    
    // Insert progress bar before the button
    redirectButton.parentNode.insertBefore(progressContainer, redirectButton);
    
    const progressFill = document.querySelector('.progress-fill');
    const progressCount = document.getElementById('progress-count');
    
    // Check if click count exists in localStorage
    let clickCount = localStorage.getItem('redirectClickCount') ? 
                     parseInt(localStorage.getItem('redirectClickCount')) : 0;
    
    // Make sure clickCount doesn't exceed 5
    clickCount = Math.min(clickCount, 5);
    
    // Update progress bar initially
    updateProgressBar(clickCount);
    
    // Update button text if user has already completed 5 clicks
    if (clickCount >= 5) {
        redirectButton.textContent = "Download Now";
    } else {
        redirectButton.textContent = "Download";
    }
    
    redirectButton.addEventListener('click', function() {
        // First link (for first 5 clicks)
        const adLink = ["https://www.effectiveratecpm.com/ub2a9a2t?key=b9c4f34b15fa5b2b885862ffc9aab13a","https://moodeccentricquotation.com/t55au04p6?key=414f861460dcea7f5caab5d0e1c5c655","https://moodeccentricquotation.com/j41zmpr39?key=c62f8c9f56ae370af52bab5b2a44179a","https://moodeccentricquotation.com/fbkzj6pbre?key=3c58e3394c47a7f9d9d37d7704ef3260","https://moodeccentricquotation.com/asism894?key=2b26a5536860526c2b064e3e2b9dbd43","https://moodeccentricquotation.com/p3g0qdux1?key=031085f2c4ab58cd8562e263b84d22da"];
        
        // Second link (after 5 clicks)
        const telegramLink = "https://t.me/+VzkqtqLIjlM3ZWFl";
        
        // Determine which link to open based on click count
        if (clickCount < 5) {
            // Increment click count
            clickCount++;
            
            // Store updated click count
            localStorage.setItem('redirectClickCount', clickCount);
            
            // Update progress bar
            updateProgressBar(clickCount);
            
            // Show remaining clicks notification
            
            
            // Open ad link
            location.href = adLink[clickCount];
        } else {
            // After 5 clicks, redirect to Telegram
            location.href = telegramLink;
            
            // Reset counter to 0 after clicking the final link
            clickCount = 0;
            localStorage.setItem('redirectClickCount', clickCount);
            
            // Update progress bar
            updateProgressBar(clickCount);
            
            // Reset button text
            redirectButton.textContent = "Download";
        }
    });
    
    // Function to update progress bar
    function updateProgressBar(count) {
        const percentage = (count / 5) * 100;
        progressFill.style.width = `${percentage}%`;
        progressCount.textContent = count;
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
