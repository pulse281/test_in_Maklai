const modal = (layoutSelector) => {
    const layout = document.querySelector(layoutSelector);

    layout.addEventListener('click', (e) => {
        layout.classList.remove('layout_active');
    });
};

export default modal;