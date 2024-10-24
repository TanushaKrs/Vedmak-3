// 3D Scroll

// Скрываем прелоадер после полной загрузки страницы
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});

// Параметры для 3D-прокрутки
let zSpacing = -1000, // Расстояние между кадрами по оси Z
		lastPos = zSpacing / 5, // Последняя позиция прокрутки, используется для вычисления изменения
		$frames = document.getElementsByClassName('frame'), // Получаем все элементы с классом 'frame'
		frames = Array.from($frames), // Преобразуем HTMLCollection в массив для удобной работы
		zVals = [] // Массив для хранения значений оси Z для каждого кадра

// Обработчик события прокрутки страницы
window.onscroll = function() {
	// Получаем текущее значение прокрутки страницы
	let top = document.documentElement.scrollTop,
			delta = lastPos - top // Вычисляем изменение прокрутки

	// Обновляем последнюю позицию
	lastPos = top

	// Обрабатываем каждый кадр
	frames.forEach(function(n, i) {
		// Вычисляем новое значение для оси Z для текущего кадра
		zVals.push((i * zSpacing) + zSpacing)
		zVals[i] += delta * -5.5 // Корректируем значение Z в зависимости от изменения прокрутки

		let frame = frames[i], // Текущий кадр
				transform = `translateZ(${zVals[i]}px)`, // Преобразование для оси Z
				opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0 // Определяем прозрачность в зависимости от положения

		// Применяем стили к кадру
		frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
	})
}

// Прокручиваем страницу на 1 пиксель при загрузке, чтобы активировать обработчик прокрутки
window.scrollTo(0, 1)

// Audio

// Получаем элементы кнопки звука и аудио
let soundButton = document.querySelector('.soundbutton'),
		audio = document.querySelector('.audio')

// Обработчик клика по кнопке звука
soundButton.addEventListener('click', e => {
	// Переключаем класс 'paused' у кнопки
	soundButton.classList.toggle('paused')
	// Воспроизводим или приостанавливаем аудио в зависимости от его текущего состояния
	audio.paused ? audio.play() : audio.pause()
})

// Обработчик события фокуса окна
window.onfocus = function() {
	// Воспроизводим аудио, если кнопка не в состоянии паузы
	soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

// Обработчик события потери фокуса окна
window.onblur = function() {
	// Приостанавливаем воспроизведение аудио
	audio.pause()
}
