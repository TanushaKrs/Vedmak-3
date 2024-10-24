// Скрываем прелоадер после полной загрузки страницы
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});

// Ожидание загрузки
document.addEventListener('DOMContentLoaded', function() {

	// ИНнициализация слайдера
	const showSlider = new Swiper('.showcase-carousel', {
	  loop: true, // Зацикливание слайдов
	  slidesPerView: 3, // Количество слайдов, отображаемых одновременно
	  speed: 1800, // Скорость перехода между слайдами в миллисекундах
	  centeredSlides: true, // Центрирование активного слайда
	  navigation: {
		nextEl: '.showcase-navigation__next', // Элемент для кнопки "вперед"
		prevEl: '.showcase-navigation__prev' // Элемент для кнопки "назад"
	  }
	});
  
	// Установка скорости воспроизведения видео
	document.querySelector('video').playbackRate = 2
  
  });
  
