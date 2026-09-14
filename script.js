// Welcome Message
window.onload = function () {
    alert("Welcome to Monu CSS Website!");
    };

    // Dark Mode
    const darkBtn = document.createElement("button");
    darkBtn.innerText = "🌙 Dark Mode";
    darkBtn.style.position = "fixed";
    darkBtn.style.top = "20px";
    darkBtn.style.right = "20px";
    darkBtn.style.padding = "10px 15px";
    darkBtn.style.cursor = "pointer";
    darkBtn.style.zIndex = "1000";
    document.body.appendChild(darkBtn);

    let dark = false;

    darkBtn.onclick = function () {
        if (!dark) {
                document.body.style.background = "#111";
                        document.body.style.color = "#fff";
                                darkBtn.innerText = "☀ Light Mode";
                                        dark = true;
                                            } else {
                                                    document.body.style.background = "#f4f4f4";
                                                            document.body.style.color = "#333";
                                                                    darkBtn.innerText = "🌙 Dark Mode";
                                                                            dark = false;
                                                                                }
                                                                                };

                                                                                // Back To Top Button
                                                                                const topBtn = document.createElement("button");
                                                                                topBtn.innerHTML = "⬆";
                                                                                topBtn.style.position = "fixed";
                                                                                topBtn.style.bottom = "20px";
                                                                                topBtn.style.right = "20px";
                                                                                topBtn.style.padding = "15px";
                                                                                topBtn.style.display = "none";
                                                                                topBtn.style.cursor = "pointer";
                                                                                topBtn.style.borderRadius = "50%";
                                                                                topBtn.style.border = "none";
                                                                                topBtn.style.background = "#0d6efd";
                                                                                topBtn.style.color = "white";
                                                                                document.body.appendChild(topBtn);

                                                                                window.onscroll = function () {
                                                                                    if (document.documentElement.scrollTop > 200) {
                                                                                            topBtn.style.display = "block";
                                                                                                } else {
                                                                                                        topBtn.style.display = "none";
                                                                                                            }
                                                                                                            };

                                                                                                            topBtn.onclick = function () {
                                                                                                                window.scrollTo({
                                                                                                                        top: 0,
                                                                                                                                behavior: "smooth"
                                                                                                                                    });
                                                                                                                                    };

                                                                                                                                    // Card Hover Effect
                                                                                                                                    const cards = document.querySelectorAll(".card");

                                                                                                                                    cards.forEach(card => {
                                                                                                                                        card.addEventListener("mouseover", function () {
                                                                                                                                                this.style.background = "#0d6efd";
                                                                                                                                                        this.style.color = "white";
                                                                                                                                                            });

                                                                                                                                                                card.addEventListener("mouseout", function () {
                                                                                                                                                                        this.style.background = "white";
                                                                                                                                                                                this.style.color = "black";
                                                                                                                                                                                    });
                                                                                                                                                                                    });

                                                                                                                                                                                    // Contact Form
                                                                                                                                                                                    const form = document.querySelector("form");

                                                                                                                                                                                    form.addEventListener("submit", function (e) {
                                                                                                                                                                                        e.preventDefault();
                                                                                                                                                                                            alert("Thank You! Your message has been sent.");
                                                                                                                                                                                                form.reset();
                                                                                                                                                                                                });

                                                                                                                                                                                                // Hero Button
                                                                                                                                                                                                const heroBtn = document.querySelector(".hero button");

                                                                                                                                                                                                heroBtn.addEventListener("click", function () {
                                                                                                                                                                                                    alert("Let's Explore the Website!");
                                                                                                                                                                                                    });

                                                                                                                                                                                                    // Gallery Click
                                                                                                                                                                                                    const images = document.querySelectorAll(".gallery img");

                                                                                                                                                                                                    images.forEach(img => {
                                                                                                                                                                                                        img.addEventListener("click", function () {
                                                                                                                                                                                                                window.open(this.src, "_blank");
                                                                                                                                                                                                                    });
                                                                                                                                                                                                                    });

                                                                                                                                                                                                                    console.log("Website Loaded Successfully!");