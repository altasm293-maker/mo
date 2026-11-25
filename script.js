document.addEventListener('DOMContentLoaded', () => {


    // تحديث السنة تلقائياً

    document.querySelectorAll('.year').forEach(el => {

        el.textContent = new Date().getFullYear();

    });



    // القائمة المتحركة للجوال

    const toggle = document.querySelector('.menu-toggle');

    const nav = document.querySelector('.nav-links');


    if (toggle && nav) {

        toggle.addEventListener('click', () => {

            const opened = nav.classList.toggle('open');

            toggle.setAttribute('aria-expanded', String(opened));

            toggle.setAttribute(
                'aria-label',
                opened ? 'إغلاق القائمة' : 'فتح القائمة'
            );

            toggle.textContent = opened ? '×' : '☰';

        });


        nav.querySelectorAll('a').forEach(link => {

            link.addEventListener('click', () => {

                nav.classList.remove('open');

                toggle.setAttribute('aria-expanded', 'false');

                toggle.setAttribute('aria-label', 'فتح القائمة');

                toggle.textContent = '☰';

            });

        });


        window.addEventListener('resize', () => {

            if (window.innerWidth > 700) {

                nav.classList.remove('open');

                toggle.setAttribute('aria-expanded', 'false');

                toggle.textContent = '☰';

            }

        });

    }



    // تصنيف المنتجات

    const filters = document.querySelectorAll('.filter');

    const cards = document.querySelectorAll('.product');


    filters.forEach(button => {

        button.addEventListener('click', () => {

            filters.forEach(item => {

                item.classList.toggle('active', item === button);

            });


            cards.forEach(card => {

                card.hidden =

                    button.dataset.filter !== 'all' &&

                    card.dataset.category !== button.dataset.filter;

            });

        });

    });



    // رقم واتساب المتجر

    // غيّر الرقم إلى رقم متجرك بصيغة دولية دون +

    const whatsappNumber = '966500000000';



    // طلب المنتجات عبر واتساب

    document.querySelectorAll('.order').forEach(link => {

        link.addEventListener('click', event => {

            event.preventDefault();

            const message =

                'مرحباً، أرغب بالاستفسار عن: ' +

                link.dataset.product;


            window.open(

                'https://wa.me/' +

                whatsappNumber +

                '?text=' +

                encodeURIComponent(message),

                '_blank',

                'noopener'

            );

        });

    });



    // نموذج التواصل

    const form = document.getElementById('contactForm');


    if (form) {

        form.addEventListener('submit', event => {

            event.preventDefault();


            if (!form.reportValidity()) return;


            const data = new FormData(form);


            const message = [

                'مرحباً، لدي استفسار من موقع مدار للابتوبات.',

                'الاسم: ' + data.get('name'),

                'رقم التواصل: ' + data.get('phone'),

                'نوع الاستفسار: ' + data.get('subject'),

                'التفاصيل: ' + data.get('message')

            ].join('\n');


            window.open(

                'https://wa.me/' +

                whatsappNumber +

                '?text=' +

                encodeURIComponent(message),

                '_blank',

                'noopener'

            );

        });

    }

});