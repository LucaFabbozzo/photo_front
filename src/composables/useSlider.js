import { ref, onMounted } from 'vue';

export function useSlider() {
    let slideIndex = 0;
    let intervalId = null;
    const slides = ref([]);

    onMounted(() => {
        initializeSlider();
    });

    function initializeSlider(){
        slides.value = document.querySelectorAll(".slides .box");
        if (slides.value.length > 0) {
            slides.value[slideIndex].classList.add("displaySlide");
            intervalId = setInterval(nextSlide, 5000);
        }
    }

    function showSlide(index){
        if (index >= slides.value.length) {
            slideIndex = 0;
        } else if(index < 0) {
            slideIndex = slides.value.length - 1;
        }

        slides.value.forEach(slide => {
            slide.classList.remove("displaySlide");
        });
        slides.value[slideIndex].classList.add("displaySlide");
    }

    function prevSlide(){
        clearInterval(intervalId);
        slideIndex--;
        showSlide(slideIndex);
    }

    function nextSlide(){
        slideIndex++;
        showSlide(slideIndex);
    }

    return {
        prevSlide,
        nextSlide
    };
}