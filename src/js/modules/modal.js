const modal = (layoutSelector) => {
    const layout = document.querySelector(layoutSelector);

    if (layout.classList.contains('layout_active')) {
        document.body.style.overflow = 'hidden';
    }

    layout.addEventListener('click', (e) => {
        layout.classList.remove('layout_active');
        document.body.style.overflow = 'auto';
    });
};

export default modal;