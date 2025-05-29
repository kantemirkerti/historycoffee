const box = document.querySelector('.item-box');
    const scrollStep = box.clientWidth;
    let scrollIndex = 0;

    setInterval(() => {
        scrollIndex++;
        if (scrollIndex * scrollStep >= box.scrollWidth) {
            scrollIndex = 0;
        }
        box.scrollTo({
            left: scrollIndex * scrollStep,
            behavior: 'smooth'
        });
    }, 5000);