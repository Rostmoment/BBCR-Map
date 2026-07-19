const tooltip = document.getElementById('tooltip');

class CursorTooltip {
    static showTooltipText(tooltipText) {
        tooltip.textContent = tooltipText;
        tooltip.style.display = 'block';

    }
    static hideTooltip() {
        tooltip.style.display = 'none';
    }

    static setTooltipPosition(e) {
        tooltip.style.left = (e.pageX - tooltip.offsetWidth / 2) + 'px';
        tooltip.style.top = (e.pageY - 35) + 'px';
    }
}

document.addEventListener('mousemove', (event) => {
    CursorTooltip.setTooltipPosition(event);
});