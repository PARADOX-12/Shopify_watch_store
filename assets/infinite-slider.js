class SliderComponent extends HTMLElement {
  constructor() {
    super();
    this.slider = this.querySelector('.slideshow__slides');
    this.slides = this.querySelectorAll('.slideshow__slide:not(.slideshow__slide--clone)');
    this.prevButton = this.querySelector('.slideshow__arrow--prev');
    this.nextButton = this.querySelector('.slideshow__arrow--next');
    
    this.autoSlide = this.dataset.autoSlide === 'true';
    this.slideSpeed = parseInt(this.dataset.slideSpeed) || 5;
    
    this.currentIndex = 0;
    this.slideWidth = 0;
    this.isTransitioning = false;
    
    this.init();
  }

  init() {
    if (!this.slider || this.slides.length < 2) return;
    
    this.calculateDimensions();
    this.setupEventListeners();
    
    if (this.autoSlide) {
      this.startAutoSlide();
    }
    
    // Recalculate on resize
    window.addEventListener('resize', () => this.calculateDimensions());
  }

  calculateDimensions() {
    this.slideWidth = this.slides[0].offsetWidth;
  }

  setupEventListeners() {
    this.prevButton?.addEventListener('click', () => this.navigate(-1));
    this.nextButton?.addEventListener('click', () => this.navigate(1));
    
    // Pause auto-slide on hover
    if (this.autoSlide) {
      this.addEventListener('mouseenter', () => this.stopAutoSlide());
      this.addEventListener('mouseleave', () => this.startAutoSlide());
    }
  }

  navigate(direction) {
    if (this.isTransitioning) return;
    
    this.isTransitioning = true;
    this.currentIndex += direction;
    
    const newPosition = -this.currentIndex * this.slideWidth;
    
    // Temporarily disable animation for CSS
    if (this.autoSlide) {
      this.slider.style.animation = 'none';
    }
    
    this.slider.style.transform = `translateX(${newPosition}px)`;
    
    setTimeout(() => {
      this.checkAndResetPosition();
      this.isTransitioning = false;
      
      // Re-enable animation
      if (this.autoSlide) {
        this.slider.style.animation = '';
      }
    }, 500);
    
    // Reset auto-slide timer
    if (this.autoSlide) {
      this.stopAutoSlide();
      this.startAutoSlide();
    }
  }

  checkAndResetPosition() {
    const totalSlides = this.slides.length;
    
    // If we've scrolled past the last real slide
    if (this.currentIndex >= totalSlides) {
      this.currentIndex = 0;
      this.slider.style.transition = 'none';
      this.slider.style.transform = `translateX(0)`;
      setTimeout(() => {
        this.slider.style.transition = '';
      }, 50);
    }
    
    // If we've scrolled before the first slide
    if (this.currentIndex < 0) {
      this.currentIndex = totalSlides - 1;
      this.slider.style.transition = 'none';
      this.slider.style.transform = `translateX(-${this.currentIndex * this.slideWidth}px)`;
      setTimeout(() => {
        this.slider.style.transition = '';
      }, 50);
    }
  }

  startAutoSlide() {
    this.stopAutoSlide();
    this.autoSlideInterval = setInterval(() => {
      this.navigate(1);
    }, this.slideSpeed * 1000);
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }
}

customElements.define('slider-component', SliderComponent);
