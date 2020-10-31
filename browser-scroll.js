function browserScroll(elementId, containerId = '') {

    const elementNotFound = (id) => `Element with ID ${id} not found.`;

    function getOffsetTop(element) {
        let offset = 0;
        while (element != null) {
            offset += element.offsetTop;
            element = element.offsetParent;
        }
        return offset;
    }

    const elementToBeShown = document.getElementById(elementId);
    if (!elementToBeShown) return elementNotFound(elementId);

    // If container is not passed, scroll with respect to window.
    const offsetElem = getOffsetTop(elementToBeShown);
    if (containerId === '') {
        window.scrollTo && window.scrollTo({ top: offsetElem, behavior: 'smooth' });
        return `Element with ID ${elementId} scrolled with respect to window.`;
    }

    const container = document.getElementById(containerId);
    if (!container) return elementNotFound(containerId);

    const offsetContainer = getOffsetTop(container);

    container.scrollTo && container.scrollTo({
        top: offsetElem - offsetContainer,
        behavior: 'smooth'
    });

    return `Element with ID ${elementId} scrolled with respect to container with id ${containerId}.`;
}
