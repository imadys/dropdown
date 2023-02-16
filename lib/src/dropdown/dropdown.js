class Dropdown {
    constructor($targetEl, $triggerEl, options) {
        this.$targetEl = $targetEl;
        this.$triggerEl = $triggerEl;
        this.options = options;
        this._visible = false;
        this.initEvent();
    }
    initEvent() {
        this.$triggerEl.addEventListener("click", () => {
            this.toggle()
        });
        document.addEventListener("click", (event) => {
            if (this._visible) {
                if (!this.$triggerEl.contains(event.target) && !event.target.classList.contains("dropdown-link")) {
                    this.hide();
                }
            }
        });
    }
    hide() {
        this.$targetEl.classList.add("opacity-0", "invisible");
        this.$targetEl.classList.remove("opacity-1", "visible");
        this._visible = false;
        this?.options?.onHide?.();
    }
    show() {
        this.$targetEl.classList.add("opacity-1", "visible");
        this.$targetEl.classList.remove("opacity-0", "invisible");
        this._visible = true;
        this?.options?.onShow?.();
    }
    toggle() {
        if (this.isVisible()) {
            this.hide();
        } else {
            this.show();
        }
        this?.options?.onToggle?.()
    }
    isVisible() {
        return this._visible;
    }
}

export function initDropdowns() {
    document.querySelectorAll('[data-dropdown-toggle]').forEach(($triggerEl) => {
        const dropdownId = $triggerEl.getAttribute('data-dropdown-toggle');
        const $targetEl = document.querySelector(`#${dropdownId}`);
        new Dropdown($targetEl, $triggerEl);

    })
}

export default Dropdown;
