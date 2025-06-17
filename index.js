// const products = fetch('https://fakestoreapi.com/products/')
//     .then(res=>res.json())
//     .then(data=>{
//         const productContainer = document.querySelector(".section_five");
//         data.map(product => {
//             console.log(product);
//             return productContainer.innerHTML += `
//                 <div class="section_five_items">
//                     <div class="images">
//                         <img src="${product.image}" alt="Product Image">
//                     </div>
//                 </div>`
//         });
//     })


function displayContent() {
    const content = document.querySelector(".dropdown_content") 
    
    if(content.classList.contains("hide")){
        content.classList.remove("hide")
    }else {
        content.classList.add("hide")
    }
}

// function refreshPage() {
//         window.location.reload();
// }

// window.onscroll = function() { scrollFunction(); };

// function scrollFunction() {
//     const header = document.querySelector(".header");
//     if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
//         header.classList.add("header-visible");
//         header.style.backgroundColor = "#fff";
//         header.style.boxShadow = "0 2px 4px rgba(107, 107, 107, 0.1)";
//     } else {
//         header.classList.remove("header-visible");
//         header.style.backgroundColor = "transparent";
//         header.style.boxShadow = "none";
//     }
// }

// document.addEventListener("DOMContentLoaded", function() {
//     document.querySelector(".header").classList.remove("header-visible");
// });

// document.querySelector(".header").addEventListener("scroll", function(){
//         const header = document.querySelector(".header");
//     if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
//         header.classList.add("header-visible");
//         header.style.backgroundColor = "#fff";
//         header.style.boxShadow = "0 2px 4px rgba(107, 107, 107, 0.1)";
//     } else {
//         header.classList.remove("header-visible");
//         header.style.backgroundColor = "transparent";
//         header.style.boxShadow = "none";
//     }
// })