// На js
document.addEventListener('DOMContentLoaded', () => {

    // 1-ый способ реализации табов через перебор элементов с помощью цикла forEach и навешивание события клика на каждый элемент
    // const tabsItem = document.querySelectorAll('.tabs__item');

    // tabsItem.forEach((item) => {     
    //     item.addEventListener('click', function(event) {
    //         event.preventDefault();
    //         const activeContent = this.getAttribute('href');
    //         document.querySelector('.tabs-content--visible').classList.toggle('tabs-content--visible');
    //         document.querySelector(activeContent).classList.toggle('tabs-content--visible'); 
    //         document.querySelector('.tabs__item--active').classList.toggle('tabs__item--active');
    //         this.classList.toggle('tabs__item--active');               
    //     });
    // });

    // 2-ой способ реализации табов через делегирование событий, навешивание события на родителя
    const tabs = document.querySelector('.tabs');

    tabs.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target;
        if (target.classList.contains('tabs__item')) {
            const activeContent = target.getAttribute('href');
            document.querySelector('.tabs-content--visible').classList.toggle('tabs-content--visible');
            document.querySelector(activeContent).classList.toggle('tabs-content--visible');
            document.querySelector('.tabs__item--active').classList.toggle('tabs__item--active');
            target.classList.toggle('tabs__item--active');           
        }
    });

});

// На jquery
// $(document).ready(function() {
   
//     const tabsItem = $('.tabs__item');

//     tabsItem.on('click', function(event) {
//         event.preventDefault();
//         const activeContent = $(this).attr('href');
//         $('.tabs-content--visible').toggleClass('tabs-content--visible');
//         $(activeContent).toggleClass('tabs-content--visible');
//         $('.tabs__item--active').toggleClass('tabs__item--active');
//         $(this).toggleClass('tabs__item--active');
//     });    

// });