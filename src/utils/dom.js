function getSiblings(e) {
    let siblings = [];
    if (!e.parentNode) {
        return siblings;
    }

    let sibling = e.parentNode.firstChild;

    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }

    return siblings;
}

function setSiblingActive(e, className) {
    const siblings = getSiblings(e);
    siblings.forEach(sibling => sibling.classList.remove(className));
    e.classList.add(className);
}

function blurAfterClick(e) {
    e.blur();
}

function handleClick(e) {
    blurAfterClick(e.currentTarget);
}

export { getSiblings, setSiblingActive, blurAfterClick, handleClick };
