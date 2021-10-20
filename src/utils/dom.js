function blurAfterClick(e) {
    e.blur();
}

function handleClick(e) {
    blurAfterClick(e.currentTarget);
}

export { blurAfterClick, handleClick };
