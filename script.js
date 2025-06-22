const box = document.querySelector('.item-box');
const items = box.querySelectorAll('.item');
const itemsPerPage = 4;

const itemWidth = items[0].offsetWidth;
const scrollStep = itemWidth * itemsPerPage;

let scrollIndex = 0;
let autoplay = true;

const autoplayInterval = setInterval(() => {
  if (!autoplay) return;
  scrollIndex++;

  const maxScroll = box.scrollWidth - box.clientWidth;
  if (scrollIndex * scrollStep > maxScroll) scrollIndex = 0;

  box.scrollTo({
    left: scrollIndex * scrollStep,
    behavior: 'smooth',
  });
}, 5000);

// Stop autoplay on interaction
['touchstart', 'mousedown', 'wheel'].forEach(event => {
  box.addEventListener(event, () => {
    autoplay = false;
    clearInterval(autoplayInterval);
  }, { once: true });
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
    