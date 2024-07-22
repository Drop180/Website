document.addEventListener("DOMContentLoaded", () => {
    const posts = document.querySelectorAll('.post');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const post = entry.target;
                const postIndex = Array.from(posts).indexOf(post);
                const direction = (postIndex % 2 === 0) ? 'left' : 'right';
                
                // Resetting previous animations
                post.classList.remove('slide-in-left', 'slide-in-right');
                
                // Applying new animation
                post.classList.add(`slide-in-${direction}`);
                post.style.opacity = 1; // Ensure post is visible
            } else {
                // Resetting post when it leaves the viewport
                const post = entry.target;
                post.classList.remove('slide-in-left', 'slide-in-right');
                post.style.opacity = 0; // Hide post when not in view
            }
        });
    }, { threshold: 0.1 });

    posts.forEach(post => {
        observer.observe(post);
    });
});
