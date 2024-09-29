document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;

    // Define CSS keyframes for crossing, height change, and slight rotation
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = `
        @keyframes crossScreen {
            from { right: -300px; }
            to { right: 100%; }
        }
        @keyframes changeHeight {
            0%, 100% { height: 300px; }
            50% { height: 320px; }
        }
        @keyframes slightRotate {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(-10deg); }
        }
    `;
    document.head.appendChild(styleSheet);

    // Function to create and animate the flying alpaca
    function createAndAnimateAlpaca() {
        const img = document.createElement('img');
        img.src = 'images/fly.gif';
        img.style.position = 'fixed';
        img.style.height = '300px';
        img.style.zIndex = '500';
        img.style.pointerEvents = 'none';
        img.style.top = `${Math.random() * (window.innerHeight - 300)}px`; // Random top position within viewport height
        img.style.right = '-300px'; // Start from outside the right edge

        // Append the image to the body
        body.appendChild(img);

        // Add animation for crossing, changing height, and slight rotation
        img.style.animation = `
            crossScreen 6s linear forwards,
            changeHeight 6s ease-in-out infinite,
            slightRotate 6s ease-in-out infinite
        `;

        // Remove the image after it has crossed the screen
        setTimeout(() => {
            img.remove();
        }, 6000); // Match the timeout to the crossing duration
    }

    // Initial delay of 1 second before the first animation
    setTimeout(function() {
        // Create and animate the flying alpaca initially
        createAndAnimateAlpaca();

        // Continuously create and animate the flying alpaca every 10 seconds (6s animation + 4s delay)
        setInterval(createAndAnimateAlpaca, 10000);
    }, 2000); // 1 second initial delay
});
