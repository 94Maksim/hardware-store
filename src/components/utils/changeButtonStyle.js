export function changeButtonStyle(e) {
    const item = e.target;
    const ripple = document.createElement("span");
    const diameter = Math.max(item.clientWidth, item.clientHeight);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${
        e.pageX - (item.getBoundingClientRect().left + scrollX) - radius
    }px`;
    ripple.style.top = `${
        e.pageY - (item.getBoundingClientRect().top + scrollY) - radius
    }px`;
    ripple.classList.add("ripple");

    if (item.dataset.ripple === "once" && item.querySelector(".ripple")) {
        item.querySelector(".ripple").remove();
    }
    item.appendChild(ripple);

    const timeOut = getAnimationDuration(ripple);

    setTimeout(() => {
        return ripple ? ripple.remove() : null;
    }, timeOut);

    function getAnimationDuration() {
        const aDuration = window.getComputedStyle(ripple).animationDuration;
        return aDuration.includes("ms")
            ? aDuration.replace("ms", "")
            : aDuration.replace("s", "") * 1000;
    }
}
