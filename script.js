const box = document.querySelector('.item-box');
    const scrollStep = box.clientWidth;
    let scrollIndex = 0;

    setInterval(() => {
        scrollIndex++;
        if ((scrollIndex + 1) * scrollStep > box.scrollWidth)
          {
            scrollIndex = 0;
        }
        box.scrollTo({
            left: scrollIndex * scrollStep,
            behavior: 'smooth'
        });
    }, 5000);

    const images = [
        'images/IMG_3964',
        'images/IMG_3982'
      ];
      
      let currentIndex = 0;
      const carouselImage = document.getElementById('carouselImage');
      
      function updateImage() {
        carouselImage.src = images[currentIndex];
      }
      
      function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
      }
      
      function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
      }
      
      // Optional: auto-advance every 5 seconds
      // setInterval(nextSlide, 5000);
      