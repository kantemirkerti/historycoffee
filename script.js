const box = document.querySelector('.item-box');
const scrollStep = box.clientWidth;
let scrollIndex = 0;
let autoplay = true;

const autoplayInterval = setInterval(() => {
    if (!autoplay) return;
    scrollIndex++;
    if ((scrollIndex + 1) * scrollStep > box.scrollWidth) {
        scrollIndex = 0;
    }
    box.scrollTo({
        left: scrollIndex * scrollStep,
        behavior: 'smooth'
    });
}, 5000);

// Stop autoplay on user interaction
['touchstart', 'mousedown', 'wheel'].forEach(event => {
    box.addEventListener(event, () => {
        autoplay = false;
        clearInterval(autoplayInterval); // optional: permanently stop
    }, { once: true }); // Only stop once
});


    const track = document.getElementById('carouselTrack');
    const wrapper = document.querySelector('.carousel-track-wrapper');
    const totalSlides = track.children.length;
    let currentIndex = 0;
    
    function updateSlidePosition() {
      const offset = currentIndex * wrapper.clientWidth;
      wrapper.scrollTo({ left: offset, behavior: 'smooth' });
    }
    
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlidePosition();
    }
    
    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlidePosition();
    }
    