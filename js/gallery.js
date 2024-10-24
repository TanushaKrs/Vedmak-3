// Скрываем прелоадер после полной загрузки страницы
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});

function initSwiper() {
	const params = {
	  loop: true, // Включаем бесконечный цикл прокрутки слайдов галереи
	  speed: 2400, // Устанавливаем скорость переключения слайдов в миллисекундах (2400 мс или 2.4 секунды)
	  spaceBetween: 18, // Устанавливаем пространство (в пикселях) между слайдами
	  mousewheel: { // Настройки для прокрутки мышью
		enabled: true, // Включаем возможность прокрутки с помощью колесика мыши
		sensitivity: 2.4, // Определяем чувствительность прокрутки мыши; чем больше значение, тем быстрее переключаются слайды при прокрутке
	  }
	};
  
	// Проверка ширины экрана для изменения направления и параллакса
	if (window.innerWidth <= 720) {
	  params.direction = 'vertical'; // Вертикальная прокрутка для мобильных устройств
	  params.parallax = false; // Отключаем параллакс
	} else {
	  params.direction = 'horizontal'; // Горизонтальная прокрутка для десктопов
	  params.parallax = true; // Включаем параллакс для десктопов
	}
  
	// Инициализация Swiper с параметрами
	const swiper = new Swiper('.slider', params);
  }
  
  // Инициализация Swiper при загрузке страницы
  initSwiper();
  
  // Обработчик события для изменения размеров окна
  window.addEventListener('resize', initSwiper);

