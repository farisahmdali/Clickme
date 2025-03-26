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
    
    // Redirect to the random website
    window.location.href = randomWebsite;
});
