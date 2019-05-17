// This needs to be at the top of the html:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js"></script>
// For GSAP animations



//============================ANIMATIONS============================//

/**The pressCheck() function sets buttonPress=false,
 * then sets a timeout for buttonPress=true
 * Inside the clickLeft() abd clickRight() functions, this is a cushion so the user
 * cannot spam-click the left or right button and create animation glitches.
 */
let buttonPress;
function pressCheck() {
    buttonPress = false;
    setTimeout(() => buttonPress = true, 1200);
    console.log('booye');
}
pressCheck()



/**This distance variable tells each animation how far to move each image.
 * Screens can all have different sizes, right? 
 * When each image slides away on the carousel,
 * we need it to fully move off camera before we make it disappear.
 * by using .offsetWidth, we can find the width of our carousel at any time.
 * distance is the variable that holds this width number for each function.
 * And of course,
 * If we need a negative number, then
 * distance = distance - (distance * 2)
 */
let distance;

/**When each image leaves:
 * - It slides away with no easing (Power0.easeNone)
 * - It slides just a little bit PAST the carousel width to keep a smoother animation
 * We also setTimeout, so after 0.5 seconds, or 500 milliseconds, 
 * The image will disappear.
 */
function slideLeftOut(img) {
    distance = carousel.offsetWidth * 1.1;
    distance = distance - (distance * 2);
    TweenMax.to(img, 0.5, {x: distance, ease: Power0.easeNone})
    setTimeout(() => {
        img.style.display = "none";
        TweenMax.set(img, {x:0});
    }, 500);
}
function slideRightOut(img) {
    distance = carousel.offsetWidth * 1.1;
    TweenMax.to(img, 0.5, {x: distance, ease: Power0.easeNone})
    setTimeout(() => {
        img.style.display = "none";
        TweenMax.set(img, {x:0});
    }, 500);
}


/**Here, there's a delay on both the animation and the image appearance.
 * This gives the leaving image enough time to fully disappear so that 
 * our new image doesn't glitch as it slides in.
 */
function slideLeftIn(img) {
    distance = carousel.offsetWidth;
    TweenMax.from(img, 1, {x: distance, delay: 0.5})
    setTimeout(() => img.style.display = "block", 500);
}
function slideRightIn(img) {
    distance = carousel.offsetWidth;
    distance = distance - (distance * 2);
    TweenMax.from(img, 1, {x: distance, delay: 0.5})
    setTimeout(() => img.style.display = "block", 500);
}



class Carousel {
    constructor(carousel) {

        // Defining what is what
        this.carousel = carousel;
        this.leftBtn = carousel.querySelector(".left-button");
        this.rightBtn = carousel.querySelector(".right-button");
        this.images = carousel.querySelectorAll("img");

        // Set initial display image and slide in
        this.displayImg = this.images[0];
        this.displayIndex = 0;
        slideRightIn(this.displayImg);

        // Each event listener
        this.leftBtn.addEventListener("click", () => this.clickLeft())
        this.rightBtn.addEventListener("click", () => this.clickRight())
    }
    clickLeft() {

        //AS LONG AS buttonPress==true
        if(buttonPress) {
            // Set current Img and new display image&index.
            let currentImg = this.displayImg;
            this.displayIndex--;
            if(this.displayIndex < 0) {
                this.displayIndex = this.images.length - 1;
            }
            this.displayImg = this.images[this.displayIndex];

            // Slide out and slide in, moving Left.
            slideLeftOut(currentImg);
            slideLeftIn(this.displayImg);

            pressCheck()
        }
    }
    clickRight() {

        //AS LONG AS buttonPress==true
        if(buttonPress) {
            // Set current Img and new display image&index.
            let currentImg = this.displayImg;
            this.displayIndex++;
            if(this.displayIndex >= this.images.length) {
                this.displayIndex = 0;
            }
            this.displayImg = this.images[this.displayIndex];

            // Slide out and slide in, moving Right.
            slideRightOut(currentImg);
            slideRightIn(this.displayImg);
            
            pressCheck()
        }
    }

}

let carousel = document.querySelector(".carousel");
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

