document.getElementById('start-btn').addEventListener('click', function() {
    const welcomeScreen = document.getElementById('welcome-screen');
    const messageScreen = document.getElementById('message-screen');

    // Fade out welcome screen
    welcomeScreen.style.opacity = '0';
    
    setTimeout(() => {
        welcomeScreen.classList.add('hidden');
        messageScreen.classList.remove('hidden');
    }, 500);
});
