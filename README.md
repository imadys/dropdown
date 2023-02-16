Dropdown component  

- Tailwindcss is required (you can use the cdn)
- if you are using vite you can use this example [here](https://github.com/imadys/dropdown-example "link")
- [live preview](https://dropdown-example.vercel.app/ "@imadys/dropdown")

##### To install the package
`npm install @imadys/dropdown`

##### Usage
If you are going to use the by using the dropdown-data-toggle as I showed in the [example](https://github.com/imadys/dropdown-example "link") you can just write this line .

`import '@imadys/dropdown'`

Or you can specify the way you want to call it :

`import { Dropdown } from './components';`

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
