document.addEventListener('DOMContentLoaded', () => {
 //custom select
    const selects = document.querySelectorAll('.custom-select');
    selects.forEach(select => {
        const trigger = select.querySelector('.custom-select__trigger');
        const options = select.querySelector('.custom-options');
        const optionNodes = select.querySelectorAll('.custom-option');

        trigger.addEventListener('click', e => {
            e.stopPropagation(); // чтобы клик не дошёл до document
            const isOpen = options.classList.contains('show');
            selects.forEach(s => {
                if (s !== select) {
                    s.querySelector('.custom-options').classList.remove('show');
                    s.querySelector('.custom-select__trigger').classList.remove('small_border');
                }
            });
            options.classList.toggle('show', !isOpen);
            trigger.classList.toggle('small_border', !isOpen);
        });

        optionNodes.forEach(opt => {
            opt.addEventListener('click', () => {
                trigger.textContent = opt.textContent;
                optionNodes.forEach(o => o.classList.remove('selected'));
                opt.classList.add('selected');
                options.classList.remove('show');
                trigger.classList.remove('small_border');
            });
        });
    });

    document.addEventListener('click', () => {
        selects.forEach(s => {
            s.querySelector('.custom-options').classList.remove('show');
            s.querySelector('.custom-select__trigger').classList.remove('small_border');
        });
    });


//Burger menu
    const burger = document.querySelector('.nav__burger');
    const menu = document.querySelector('.nav__menu');

    if (burger && menu) {
        burger.addEventListener('click', e => {
            e.stopPropagation();
            menu.classList.toggle('show');
        });

        document.addEventListener('click', e => {
            if (!menu.contains(e.target) && !burger.contains(e.target)) {
                menu.classList.remove('show');
            }
        });
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('show');
            });
        });
    }


//filters
    const filterTrigger = document.querySelector('.filters__mobile');
    const filterForm = document.querySelector('.filters__form');
    const FormLayer = document.querySelector('.form-layer');

    if (filterTrigger && filterForm && FormLayer) {
        filterTrigger.addEventListener('click', e => {
            e.stopPropagation();
            FormLayer.classList.toggle('active');
            filterForm.classList.toggle('mobile_show');
        });
        document.addEventListener('click', e => {
            if (
                !filterForm.contains(e.target) &&
                !filterTrigger.contains(e.target)
            ) {
                FormLayer.classList.remove('active');
                filterForm.classList.remove('mobile_show');
            }
        });

        const closeBtn = document.querySelector('.filters__close');
        const applyBtn = document.querySelector('.btn-red');

        function closeForm() {
            FormLayer.classList.remove('active');
            filterForm.classList.remove('mobile_show');
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', closeForm);
        }

        if (applyBtn) {
            applyBtn.addEventListener('click', e => {
                e.preventDefault();
                closeForm();
            });
        }
    }

 //search
 const searchIcon = document.querySelector('.nav__search-icon-mobile');
 const searchInput = document.querySelector('.search_mobile');
 
 if (searchIcon && searchInput) {
     searchIcon.addEventListener('click', e => {
         e.stopPropagation();
         searchInput.classList.toggle('show_search');
     });
 
     document.addEventListener('click', e => {
         if (!searchInput.contains(e.target) && !searchIcon.contains(e.target)) {
             searchInput.classList.remove('show_search');
         }
     });
     searchInput.querySelectorAll('a').forEach(link => {
         link.addEventListener('click', () => {
             searchInput.classList.remove('show_search');
         });
     });
 }

});
