import design1 from 'sources/images/design.png'
import design2 from 'sources/images/design-2.png'

import battery1 from 'sources/images/battery1.png' 
import battery2 from 'sources/images/battery2.png' 
import battery3 from 'sources/images/battery3.png' 

import safety1 from 'sources/images/safety-2.png'
import safety2 from 'sources/images/safety-3.png'
import safety3 from 'sources/images/safety-4.png'
import safety4 from 'sources/images/safety-5.png'

export const navItems = [
  { id: 0, link: './', title: 'О продукте' },
  { id: 1, link: './', title: 'Внешний вид' },
  { id: 2, link: './', title: 'Безопасность' },
  { id: 3, link: './', title: 'Отзывы' },
  { id: 4, link: './', title: 'FAQ' },
]


export const cards = [
  {
    id: 0,
    title: 'Минималистичный дизайн',
    text: `Рама, компоненты и аксессуары скутера выдержаны в едином стиле, где удобство
    пользователя выходит на первое место. Одного прикосновения достаточно, чтобы
    запустить самокат.`,
    imgUrl: design1,
  },
  {
    id: 1,
    title: 'Удобная панель управления',
    text: `Удобно расположенные элементы управления. Отображение 8 типов данных в реальном
    времени: скорость, режим, заряд аккумулятора, состояние блокировки и другая
    информация.`,
    imgUrl: design2,
  },
]

export const batteryList = [
  {
    id: 0,
    title: 'Три режима скорости',
    text: `Три режима езды позволяют почуствовать себя комфортно в любой ситуации. Режим «S»
      увеличитвает скорость, если опаздываете на работу. Во время прогулки по парку
      активируйте режим «D». Включите режим «Пешеход», когда двигаетесь по оживлённой улице.`,
    imgUrl: battery1
  },
  {
    id: 1,
    title: 'Система восстановления энергии',
    text: `Во время торможения и движения по инерции система преобразовывает кинетическую энергию в
        электрическую, позволяя увеличить общий запас хода самоката.`,
    imgUrl: battery2
  },
  {
    id: 2,
    title: 'Мощная батарея',
    text: ` Самокат оснащен аккумулятором емкостью 12 800 мАч. Это позволяет преодолевать расстояния
        до 45 км без подзарядки.`,
    imgUrl: battery3
  },
]

export const securityList = [
  {
    id: 0,
    title: 'Яркие ходовые огни',
    text: `Продуманный угол рассеивания света позволяет сохранять хорошую видимость, не ослепляя других участников движения.`,
    imgUrl: safety1,
  },
  {
    id: 1,
    title: 'Двойная тормозная система',
    text: `При нажатии наручку тормоза системы переднего и заднего колеса активируются последовательно, сокращая тормозной путь и обеспечивая безопасную и плавную остановку.`,
    imgUrl: safety2,
  },
  {
    id: 2,
    title: 'Яркая задняя фара',
    text: `При включении ходовых огней задняя фара включается автоматически. При нажатии на ручку тормоза она начинает мигать, предупреждая других участников движения.`,
    imgUrl: safety3,
  },
  {
    id: 3,
    title: 'Отражатели спереди, сбоку и сзади',
    text: `Улучшенные отражатели, размещенные с четырех сторон, делают вашу поездку в темное время суток безопаснее.`,
    imgUrl: safety4,
  },
]

export const questionsList = [
  {
    id: 0,
    title: 'На него нужны права категории M?',
    text: `Продуманный угол рассеивания света позволяет сохранять хорошую видимость, не ослепляя
        других участников движения.`,
  },
  {
    id: 1,
    title: 'У меня вес 135 кг, выдержит ли этот самокат?',
    text: `Самокат определенно выдержит и будет ехать, но не с максимальной скоростью.`,
  },
  {
    id: 2,
    title: 'Есть ли влагозащита?',
    text: `Электросамокат имеет степень защиты IP54. Он защищен от попадания пыли и брызг, падающих в
    любом направлении. Погружение в воду может привести к поломке.`,
  },
  {
    id: 3,
    title: 'Это версия для Китая или Европы?',
    text: `Это Европейская версия, со всеми обновлениями и евро-вилкой.`,
  },
]

export const setList = [
  {
    id: 0,
    text: 'Адаптер питания',
  },
  {
    id: 1,
    text: 'Шестигранный ключ',
  },
  {
    id: 2,
    text: 'Удлинитель для насоса',
  },
  {
    id: 3,
    text: 'Винты x 5 шт.',
  },
  {
    id: 4,
    text: 'Запасная шина',
  },
  {
    id: 5,
    text: 'Руководство пользователя',
  },
  {
    id: 6,
    text: 'Буклет с информацией',
  },
]