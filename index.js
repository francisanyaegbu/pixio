function refreshPage() {
        window.location.reload();
}

  const header = document.querySelector(".header");
  let hasAnimated = false;

  window.addEventListener("scroll", () => {
    if (!hasAnimated && window.scrollY > 10) {
      hasAnimated = true;

      // Trigger the "slide up and in" effect
      header.classList.add("animate-in");

      // After a short delay, slide it back down
      setTimeout(() => {
        header.classList.add("slide-back");
      }, 400); // allow reflow before applying second class
    }else if (hasAnimated && window.scrollY < 10) {
        // If the header has already animated and the user scrolls back up,
        hasAnimated = false;
        header.classList.remove("animate-in", "slide-back");
    }
  });

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".header").classList.remove("header-visible");
});

document.querySelector(".header").addEventListener("scroll", function(){
        const header = document.querySelector(".header");
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        header.classList.add("header-visible");
        header.style.backgroundColor = "#fff";
        header.style.boxShadow = "0 2px 4px rgba(107, 107, 107, 0.1)";
    } else {
        header.classList.remove("header-visible");
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
    }
})



let cursor = document.querySelector('.cursor');
let cursorTwo = document.querySelector('.cursor-two');
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    updateCursor();
});

window.addEventListener('scroll', updateCursor);

function updateCursor() {
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;
    cursor.style.top = (mouseY + scrollY - 5) + "px";
    cursor.style.left = (mouseX + scrollX - 5) + "px";
    cursorTwo.style.top = (mouseY + scrollY - 16) + "px";
    cursorTwo.style.left = (mouseX + scrollX - 16) + "px";
}

function setCursorPointerEvents() {
    const hoverables = document.querySelectorAll('button, a, .dropdown, .dropdown_content, .home_content');
    hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-pointer');
            cursorTwo.classList.add('cursor-pointer');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-pointer');
            cursorTwo.classList.remove('cursor-pointer');
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    setCursorPointerEvents();
});



document.addEventListener("DOMContentLoaded", function() {
    const searchBtn = document.getElementById('search-btn');
    const searchDisplay = document.querySelector('.search-display');
    const searchOverlay = document.querySelector('.search-overlay');

    searchBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        searchDisplay.classList.toggle('active');
        searchOverlay.classList.toggle('active');
    });

    searchOverlay.addEventListener('click', function() {
        searchDisplay.classList.remove('active');
        searchOverlay.classList.remove('active');
    });

    document.addEventListener('click', function(e) {
        if (
            !searchDisplay.contains(e.target) &&
            !searchBtn.contains(e.target) &&
            searchDisplay.classList.contains('active')
        ) {
            searchDisplay.classList.remove('active');
            searchOverlay.classList.remove('active');
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const searchCancel = document.getElementById('search-cancel');
    const searchDisplay = document.querySelector('.search-display');
    const searchOverlay = document.querySelector('.search-overlay');

    if (searchCancel) {
        searchCancel.addEventListener('click', function() {
            searchDisplay.classList.remove('active');
            searchOverlay.classList.remove('active');
        });
    }
});



document.addEventListener("DOMContentLoaded", function() {
    const sidebarBtn = document.querySelector('.sidebar');
    const sidebarDisplay = document.querySelector('.sidebar-display');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');
    const sidebarCancel = document.getElementById('sidebar-cancel');

    // Open sidebar
    if (sidebarBtn && sidebarDisplay && sidebarOverlay) {
        sidebarBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            sidebarDisplay.classList.add('active');
            sidebarOverlay.classList.add('active');
        });
    }

    // Close sidebar on cancel button
    if (sidebarCancel && sidebarDisplay && sidebarOverlay) {
        sidebarCancel.addEventListener('click', function() {
            sidebarDisplay.classList.remove('active');
            sidebarOverlay.classList.remove('active');
        });
    }

    // Close sidebar on overlay click
    // if (sidebarOverlay && sidebarDisplay) {
    //     sidebarOverlay.addEventListener('click', function() {
    //         sidebarDisplay.classList.remove('active');
    //         sidebarOverlay.classList.remove('active');
    //     });
    // }

    // Close sidebar on ESC key
    // document.addEventListener('keydown', function(e) {
    //     if (e.key === "Escape") {
    //         sidebarDisplay.classList.remove('active');
    //         sidebarOverlay.classList.remove('active');
    //     }
    // });
});


document.addEventListener("DOMContentLoaded", function() {
    const wishlistBtn = document.querySelector('.wishlist');
    const cartBtn = document.querySelector('.cart');
    const wishcartOverlay = document.querySelector('.wishcart-overlay');
    const wishcartDisplay = document.querySelector('.wishcart-display');
    const wishcartCancel = document.getElementById('wishcart-cancel');

    // Open wishcart on wishlist or cart button click
    function openWishcart(e) {
        e.stopPropagation();
        wishcartOverlay.classList.add('active');
        wishcartDisplay.classList.add('active');
    }

    if (wishlistBtn) wishlistBtn.addEventListener('click', openWishcart);
    if (cartBtn) cartBtn.addEventListener('click', openWishcart);

    // Close on cancel button
    if (wishcartCancel) {
        wishcartCancel.addEventListener('click', function() {
            wishcartOverlay.classList.remove('active');
            wishcartDisplay.classList.remove('active');
        });
    }

    // Close on overlay click
    // if (wishcartOverlay) {
    //     wishcartOverlay.addEventListener('click', function(e) {
    //         if (e.target === wishcartOverlay) {
    //             wishcartOverlay.classList.remove('active');
    //             wishcartDisplay.classList.remove('active');
    //         }
    //     });
    // }

    // Close on ESC key
    // document.addEventListener('keydown', function(e) {
    //     if (e.key === "Escape") {
    //         wishcartOverlay.classList.remove('active');
    //         wishcartDisplay.classList.remove('active');
    //     }
    // });
});


document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector('.suggestion-images-track');
    const images = Array.from(track.children);
    const visibleCount = 6;
    let currentIndex = 0;

    for (let i = 0; i < visibleCount; i++) {
        track.appendChild(images[i].cloneNode(true));
    }

    function slide() {
        currentIndex++;
        track.style.transform = `translateX(-${currentIndex * (100 / visibleCount)}%)`;

        if (currentIndex >= images.length) {
            setTimeout(() => {
                track.style.transition = 'none';
                track.style.transform = 'translateX(0)';
                currentIndex = 0;

                void track.offsetWidth;
                track.style.transition = 'transform 0.6s cubic-bezier(0.4,0,0.2,1)';
            }, 600);
        }
    }

    setInterval(slide, 3000);
});


// Set the date we're counting down to
var countDownDate = new Date("Aug 8, 2025 11:17:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector('.section_eight .image-track');
    if (!track) return;

    const visibleCount = 4; // Number of images visible at once
    let items = Array.from(track.children);

    // Clone first N images to the end for seamless looping
    for (let i = 0; i < visibleCount; i++) {
        track.appendChild(items[i].cloneNode(true));
    }
    items = Array.from(track.children);

    let currentIndex = 0;
    let sliding = false;

    // Add fade-out CSS if not present
    if (!document.getElementById('section-eight-fadeout-style')) {
        const fadeOutStyle = document.createElement('style');
        fadeOutStyle.id = 'section-eight-fadeout-style';
        fadeOutStyle.innerHTML = `
            .section_eight .image-container.fade-out {
                opacity: 0;
                transition: opacity 0.6s;
            }
        `;
        document.head.appendChild(fadeOutStyle);
    }

    function slideImages() {
        if (sliding) return;
        sliding = true;

        // Fade out the first image
        items[currentIndex].classList.add('fade-out');

        // Slide to the next image
        const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight || 0);
        track.style.transition = 'transform 0.6s cubic-bezier(0.4,0,0.2,1)';
        track.style.transform = `translateX(-${(currentIndex + 1) * itemWidth}px)`;

        setTimeout(() => {
            // Remove fade-out from the old image
            items[currentIndex].classList.remove('fade-out');
            currentIndex++;

            // If we've reached the end of the original images, reset
            if (currentIndex >= items.length - visibleCount) {
                track.style.transition = 'none';
                track.style.transform = 'translateX(0)';
                currentIndex = 0;
                // Force reflow to apply the transform instantly
                void track.offsetWidth;
                track.style.transition = 'transform 0.6s cubic-bezier(0.4,0,0.2,1)';
            }

            sliding = false;
        }, 600); // Match the transition duration
    }

    // Initial setup
    track.style.transform = 'translateX(0)';

    setInterval(slideImages, 3500); // Slide every 3.5 seconds
});


document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector('.section_eleven .image-track');
    if (!track) return;

    const visibleCount = 2; // Show 2 images at a time
    let items = Array.from(track.children);

    // Clone first N images to the end for seamless looping
    for (let i = 0; i < visibleCount; i++) {
        track.appendChild(items[i].cloneNode(true));
    }
    items = Array.from(track.children);

    let currentIndex = 0;
    let sliding = false;

    // Add fade-out CSS if not present
    if (!document.getElementById('section-eleven-fadeout-style')) {
        const fadeOutStyle = document.createElement('style');
        fadeOutStyle.id = 'section-eleven-fadeout-style';
        fadeOutStyle.innerHTML = `
            .section_eleven .container.fade-out {
                opacity: 0;
                transition: opacity 0.4s;
            }
        `;
        document.head.appendChild(fadeOutStyle);
    }

    function slideImages() {
        if (sliding) return;
        sliding = true;

        // Fade out the current image
        items[currentIndex].classList.add('fade-out');

        // Slide to the next image
        const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight || 0);
        track.style.transition = 'transform 0.6s cubic-bezier(0.4,0,0.2,1)';
        track.style.transform = `translateX(-${(currentIndex + 1) * itemWidth}px)`;

        setTimeout(() => {
            // Remove fade-out from the old image
            items[currentIndex].classList.remove('fade-out');
            currentIndex++;

            // If we've reached the end of the original images, reset
            if (currentIndex >= items.length - visibleCount) {
                track.style.transition = 'none';
                track.style.transform = 'translateX(0)';
                currentIndex = 0;
                // Force reflow to apply the transform instantly
                void track.offsetWidth;
                track.style.transition = 'transform 0.6s cubic-bezier(0.4,0,0.2,1)';
            }

            sliding = false;
        }, 1500); // Match the transition duration
    }

    // Initial setup
    track.style.transform = 'translateX(0)';

    setInterval(slideImages, 4000); // Slide every 4 seconds
});
