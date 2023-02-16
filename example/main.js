import {Dropdown} from '@imadys/dropdown'

const $triggerEl = document.getElementById('coolDropdownBtn');
const $targetEl = document.getElementById(`coolDropdown`);
const options = {
    onHide: () => {
        console.log('hide event!');
    },
    onShow: () => {
        console.log('show event!');
    },
    onToggle: () => {
        console.log('toggle event!');
    }
}
new Dropdown($targetEl, $triggerEl, options)
