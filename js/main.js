// Скрываем прелоадер после полной загрузки страницы
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});


// Инициализируем Swiper с настройкамим
const swiper = new Swiper('.swiper', {
	mousewheel: true,  // Включаем прокрутку колесиком мыши
	direction: 'vertical',  // Устанавливаем вертикальное направление
	speed: 1700,  // Задаем скорость анимации слайда
	parallax: true  // Включаем параллакс-эффект для слоев
})

// Анимация заголовков
document.querySelectorAll('.main-content h1').forEach(e => {
	// Заменяем в тексте символы и разбиваем каждое слово на отдельные элементы <span>
	e.innerHTML = e.textContent.replace(/ (-|#|@){1}/g, s => s[1]+s[0]).replace(/(\S*)/g, m => {
		// Оборачиваем каждую букву в <span> для последующей анимации
		return m.replace(/\S(-|#|@)?/g, '<span class="letter">$&</span>')
	})
	// Устанавливаем стили для каждой буквы с задержкой анимации
	e.querySelectorAll('.letter').forEach(function(l, i) {
		l.setAttribute('style', `z-index: -${ i }; transition-duration: ${ i/5 + 1 }s`)
	})
})

// Управляем сменой активного слайда
swiper.on('slideChange', function() {
	// Переключаем активный класс для слайдов
	document.querySelectorAll('.main-content__slide').forEach(function(e, i) {
		// Если индекс активного слайда совпадает, добавляем класс active
		return swiper.activeIndex === i ? e.classList.add('active') : e.classList.remove('active')
	})
})

// Открытие формы при нажатии на кнопку "Купить сейчас"
document.getElementById('buy-now-btn').addEventListener('click', function() {
    document.getElementById('buy-form').classList.add('show');
});

// Закрытие формы после отправки (или можно добавить кнопку "Закрыть")
document.getElementById('purchase-form').addEventListener('submit', function(event) {
    alert('Спасибо за покупку!');
    document.getElementById('buy-form').classList.remove('show');
    event.preventDefault(); // Остановим стандартное отправление формы
});

function closeForm() {
    document.getElementById('buy-form').classList.remove('show');
}



