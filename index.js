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



document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const content = dropdown.querySelector('.dropdown_content, .home-content, .shop-content, .blog-content, .post_content, .portfolio_content, .pages_content, .account_content');
        if (!content) return;

        dropdown.addEventListener('mouseenter', () => {
            content.style.display = 'block';
            // Access the content here
            console.log('Hovered dropdown content:', content.innerHTML);
            // You can also manipulate content, e.g.:
            // content.style.backgroundColor = "#f0f0f0";
        });

        dropdown.addEventListener('mouseleave', () => {
            content.style.display = 'none';
        });
    });
});



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
    const hoverables = document.querySelectorAll('button, a, .dropdown, .dropdown_content, .home-content');
    hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hide');
            cursorTwo.classList.add('cursor-pointer');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hide');
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

    // Close sidebar on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape") {
            sidebarDisplay.classList.remove('active');
            sidebarOverlay.classList.remove('active');
        }
    });
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
  document.getElementById("countdown").innerHTML = days + " " + hours + " "
  + minutes + " " + seconds ;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector('.section_nine .image-track');
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
    if (!document.getElementById('section-nine-fadeout-style')) {
        const fadeOutStyle = document.createElement('style');
        fadeOutStyle.id = 'section-nine-fadeout-style';
        fadeOutStyle.innerHTML = `
            .section_nine .image-container.fade-out {
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






//cart rendering and management

let cartItems = [
    {
        img: "/images/bgpurp.png",
        name: "Cozy Knit Cardigan Sweater",
        price: "$80",
    },
    {
        img: "/images/gripskirt.png",
        name: "Sophisticated Swagger Suit",
        price: "$120",
    },
    {
        img: "/images/bgpink2.png",
        name: "Athletic Mesh Sports Leggings",
        price: "$60",
    }
];

function renderCartItems() {
    const container = document.querySelector('.cart-items-container');
    container.innerHTML = '';
    cartItems.forEach(item => {
        container.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}" alt="${item.name}">
                <div class="cart-item-details">
                    <div class="cart-item-name">
                        <p>${item.name}</p>
                    </div>
                    <div class="cart-item-price">
                        <span>${item.price}</span>
                    </div>
                </div>
                <div class="cart-item-remove">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M19 6L5 20M5 6L19 20" stroke="#000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
            </div>
        `;
        container.querySelectorAll('.cart-item-remove').forEach((removeBtn, i) => {
            removeBtn.onclick = function() {
                cartItems.splice(i, 1);
                renderCart();
            };
        });
    });
}
document.addEventListener("DOMContentLoaded", renderCartItems);



// Wishlist rendering and management
// Example wishlist array
let wishlistItems = [
    {
        img: "/images/bgpurp.png",
        name: "Cozy Knit Cardigan Sweater",
        price: "$80"
    },
    {
        img: "/images/gripskirt.png",
        name: "Sophisticated Swagger Suit",
        price: "$80"
    },
    {
        img: "/images/bgpink2.png",
        name: "Athletic Mesh Sports Leggings",
        price: "$80"
    }
];

// Render wishlist items
document.addEventListener("DOMContentLoaded", function() {
    const wishlistContainer = document.querySelector(".wishlist-items-container");
    if (wishlistContainer) {
        wishlistContainer.innerHTML = wishlistItems.map(item => `
            <div class="wishlist-item-details">
                <img src="${item.img}" alt="${item.name}">
                <div class="item-details">
                    <p class="name">${item.name}</p>
                    <p class="price">${item.price}</p>
                </div>
                <div class="wishlist-item-remove">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M19 6L5 20M5 6L19 20" stroke="#000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
            </div>
        `).join('');
        wishlistContainer.querySelectorAll('.wishlist-item-remove').forEach((removeBtn, i) => {
            removeBtn.onclick = function() {
                wishlistItems.splice(i, 1);
                renderWishlist();
            };
        });
    }
});





document.addEventListener("DOMContentLoaded", function() {
    const wishlistBtn = document.querySelector('.wishlist'); // SVG icon
    const wishlistButton = document.querySelector('.wishlist-button'); // Button in overlay
    const cartBtn = document.querySelector('.cart'); // SVG icon
    const cartButton = document.querySelector('.shopping-cart-button'); // Button in overlay

    const wishcartOverlay = document.querySelector('.wishcart-overlay');
    const wishcartDisplay = document.querySelector('.wishcart-display');
    const wishlistSection = document.querySelector('.wishlist-display');
    const cartSection = document.querySelector('.shopping-cart');
    const wishcartCancel = document.getElementById('wishcart-cancel');

    function showWishlist() {
        wishcartOverlay.classList.add('active');
        wishcartDisplay.classList.add('active');
        wishlistSection.style.display = 'block';
        cartSection.style.display = 'none';
    }

    function showCart() {
        wishcartOverlay.classList.add('active');
        wishcartDisplay.classList.add('active');
        cartSection.style.display = 'block';
        wishlistSection.style.display = 'none';
    }

    // Show wishlist on icon or button click
    if (wishlistBtn) wishlistBtn.addEventListener('click', showWishlist);
    if (wishlistButton) wishlistButton.addEventListener('click', showWishlist);

    // Show cart on icon or button click
    if (cartBtn) cartBtn.addEventListener('click', showCart);
    if (cartButton) cartButton.addEventListener('click', showCart);

    // Close overlay
    if (wishcartCancel) {
        wishcartCancel.addEventListener('click', function() {
            wishcartOverlay.classList.remove('active');
            wishcartDisplay.classList.remove('active');
        });
    }
});






cartItems = []; // Your shopping cart array

document.addEventListener("DOMContentLoaded", function() {
    // ...existing code...

    // Store current item info when an image is clicked
    let currentItem = null;

    const clickableImages = document.querySelectorAll(
        ".image-container img, .container img, .suggestion-image-item img"
    );
    const overlay = document.querySelector('.item-slide-overlay');
    const content = document.querySelector('.item-slide-content');
    const closeBtn = document.querySelector('.item-slide-close');
    const addCartBtn = document.querySelector('.item-slide-addcart');

    clickableImages.forEach(img => {
        img.style.cursor = "pointer";
        img.addEventListener("click", function() {
            let parent = img.closest('.image-container, .container, .suggestion-image-item');
            let name = "";
            let price = "";
            let oldPrice = "";
            let desc = "";

            if (parent.querySelector('.product-name')) {
                name = parent.querySelector('.product-name').textContent;
            } else if (parent.querySelector('h1')) {
                name = parent.querySelector('h1').textContent;
            } else if (parent.querySelector('span')) {
                name = parent.querySelector('span').textContent;
            }

            if (parent.querySelector('.discount-price')) {
                price = parent.querySelector('.discount-price').textContent;
            } else if (parent.querySelector('.price h1')) {
                price = parent.querySelector('.price h1').textContent;
            } else if (parent.querySelector('.amount')) {
                price = parent.querySelector('.amount').textContent;
            } else if (parent.querySelector('span')) {
                price = parent.querySelector('span').textContent;
            }

            if (parent.querySelector('s')) {
                oldPrice = parent.querySelector('s').textContent;
            }

            if (parent.querySelector('.discount')) {
                desc = parent.querySelector('.discount').textContent;
            } else if (parent.querySelector('.product-delivery')) {
                desc = parent.querySelector('.product-delivery').textContent;
            } else if (parent.querySelector('.overlay-text p')) {
                desc = parent.querySelector('.overlay-text p').textContent;
            }

            // Save current item info for add to cart
            currentItem = {
                img: img.src,
                name: name || "Product",
                price: price || "",
                oldPrice: oldPrice || "",
                desc: desc || ""
            };

            content.innerHTML = `
                <img src="${currentItem.img}" alt="${currentItem.name}">
                <h2>${currentItem.name}</h2>
                <p>${currentItem.desc}</p>
                <p style="font-size:1.2em;font-weight:600;">${currentItem.price} ${currentItem.oldPrice ? `<s style="color:#888;font-size:0.9em;">${currentItem.oldPrice}</s>` : ""}</p>
            `;

            overlay.classList.add('active');
        });
    });

    closeBtn.addEventListener("click", function() {
        overlay.classList.remove('active');
    });
    overlay.addEventListener("click", function(e) {
        if (e.target === overlay) overlay.classList.remove('active');
    });

    // Add to cart logic
    addCartBtn.addEventListener("click", function() {
        if (currentItem) {
        cartItems.push(currentItem);
        saveCartToStorage();
        renderCart();
        overlay.classList.remove('active');
        showSuccessMessage("Item has been added to cart");
        }
    });

    // Example cart rendering function
    function renderCart() {
        const cartContainer = document.querySelector(".cart-items-container");
        if (cartContainer) {
            cartContainer.innerHTML = cartItems.map((item, idx) => `
                <div class="cart-item" data-index="${idx}">
                    <img src="${item.img}" alt="${item.name}">
                    <div class="cart-item-details">
                        <div class="cart-item-name"><p>${item.name}</p></div>
                        <div class="cart-item-price"><span>${item.price}</span></div>
                    </div>
                    <div class="cart-item-remove" style="cursor:pointer;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19 6L5 20M5 6L19 20" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
                </div>
            `).join('');
            // Remove logic for cart items
            cartContainer.querySelectorAll('.cart-item-remove').forEach((removeBtn, i) => {
                removeBtn.onclick = function() {
                    if (confirm("Do you want to remove this item from cart?")) {
                    cartItems.splice(i, 1);
                    saveCartToStorage();
                    renderCart();
                    }
                };
            });
        }
    }
});







cartItems = loadCartFromStorage();
wishlistItems = loadWishlistFromStorage();



function saveCartToStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function loadCartFromStorage() {
    const data = localStorage.getItem('cartItems');
    return data ? JSON.parse(data) : [];
}

function saveWishlistToStorage() {
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
}

function loadWishlistFromStorage() {
    const data = localStorage.getItem('wishlistItems');
    return data ? JSON.parse(data) : [];
}

// After adding to cart
cartItems.push(currentItem);
saveCartToStorage();
renderCart();

// After removing from cart
cartItems.splice(i, 1);
saveCartToStorage();
renderCart();

// After removing from wishlist
wishlistItems.splice(i, 1);
saveWishlistToStorage();
renderWishlist();

document.addEventListener("DOMContentLoaded", function() {
    cartItems = loadCartFromStorage();
    wishlistItems = loadWishlistFromStorage();
    renderCart();
    renderWishlist();
});



// Success message function
function showSuccessMessage(message) {
    let msgDiv = document.createElement('div');
    msgDiv.textContent = message;
    msgDiv.style.position = 'fixed';
    msgDiv.style.top = '30px';
    msgDiv.style.right = '30px';
    msgDiv.style.background = '#222';
    msgDiv.style.color = '#fff';
    msgDiv.style.padding = '14px 28px';
    msgDiv.style.borderRadius = '10px';
    msgDiv.style.fontSize = '1.1em';
    msgDiv.style.zIndex = '4000';
    msgDiv.style.boxShadow = '0 4px 24px rgba(0,0,0,0.13)';
    document.body.appendChild(msgDiv);
    setTimeout(() => {
        msgDiv.remove();
    }, 1500);
}