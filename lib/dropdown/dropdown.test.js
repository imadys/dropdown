import {
  describe,
  test,
  expect,
  beforeAll,
  vi,
  afterAll
} from "vitest";

import Dropdown, {
  initDropdowns
} from './dropdown.js';

const {
  JSDOM
} = require('jsdom');

let dropEl;

beforeAll(() => {
  let dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
  global.document = dom.window.document;
  global.window = dom.window;
  dropEl = document.createElement('div');
  dropEl.innerHTML = [
    '<button data-dropdown-toggle="awesomeDropdown" id="someId" class="bg-blue-500 focus:ring-2 ring-offset-2 ring-blue-500 outline-none px-4 py-3 rounded-xl text-white font-bold dropdown-toggler">',
    'Awesome dropdown',
    '</button>',
    '<div class="opacity-0 invisible absolute transform transition-all" id="awesomeDropdown">',
    '<ul class="overflow-hidden shadow-md w-44 m-0 border rounded-xl bg-white transition-all">',
    '<li class="hover:bg-gray-100 text-sm"><a href="#" class="block p-2 h-full w-full dropdown-link">awesome item</a></li>',
    '<li class="hover:bg-gray-100 text-sm"><a href="#" class="block p-2 h-full w-full dropdown-link">awesome item</a></li>',
    '<li class="hover:bg-gray-100 text-sm"><a href="#" class="block p-2 h-full w-full dropdown-link">awesome item</a></li>',
    '</ul>',
    '</div>'
  ].join('');
});

describe('dropdown', () => {

  describe('Dropdown click events', () => {
    test('it should show the dropdown', () => {
      let button = dropEl.querySelector('[data-dropdown-toggle="awesomeDropdown"]');
      let dropdownContent = dropEl.querySelector('#awesomeDropdown');
      let dropdown = new Dropdown(dropdownContent, button);
      dropdown.show();
      expect(dropdownContent.classList.contains('visible') && dropdownContent.classList.contains('opacity-1')).toBe(true)
    });
    test('it should hide the dropdown', () => {
      let button = dropEl.querySelector('[data-dropdown-toggle="awesomeDropdown"]');
      let dropdownContent = dropEl.querySelector('#awesomeDropdown');
      let dropdown = new Dropdown(dropdownContent, button);
      dropdown.hide();
      expect(dropdownContent.classList.contains('invisible') && dropdownContent.classList.contains('opacity-0')).toBe(true)
    });
    test('it should toggle the dropdown', () => {
      let button = dropEl.querySelector('[data-dropdown-toggle="awesomeDropdown"]');
      let dropdownContent = dropEl.querySelector('#awesomeDropdown');
      let dropdown = new Dropdown(dropdownContent, button);
      dropdown.toggle();
      expect(dropdownContent.classList.contains('invisible') || dropdownContent.classList.contains('visible')).toBe(true)
    });
  });

  describe('Dropdown declaration', () => {
    test('it should have same value (id,data-dropdown-toggle)', () => {
      // Data dropdown toggle value should be same as dropdown content id
      let button = dropEl.querySelector('[data-dropdown-toggle="awesomeDropdown"]');
      let dropdownContent = dropEl.querySelector('#awesomeDropdown');

      let buttonDataToggleValue = button.getAttribute('data-dropdown-toggle');
      let dropdownId = dropdownContent.getAttribute('id')
      expect(buttonDataToggleValue).toBe(dropdownId);
    });
    test('it should let the user to declare the dropdown the way he want', () => {
      let button = dropEl.querySelector('#someId');
      let dropdownContent = dropEl.querySelector('#awesomeDropdown');
      let dropdown = new Dropdown(button, dropdownContent, null, true);
      dropdown.show();
      expect(dropdownContent.classList.contains('visible')).toBe(true);
    });
  });

  describe('Check initEvent', () => {
    test('it should add visible class if button is clicked', () => {
      let button = dropEl.querySelector('[data-dropdown-toggle="awesomeDropdown"]');
      let dropdownContent = dropEl.querySelector('#awesomeDropdown');
      let dropdown = new Dropdown(dropdownContent, button);
      button.click();
      expect(dropdownContent.classList.contains('visible')).toBe(true)
    });
    test('it shoud hide the dropdown content if clicked the body element', () => {
      let button = dropEl.querySelector('[data-dropdown-toggle="awesomeDropdown"]');
      let dropdownContent = dropEl.querySelector('#awesomeDropdown');
      let dropdown = new Dropdown(dropdownContent, button);
      document.querySelector('body').click();
      if (!dropdownContent.classList.contains('visible')) {
        expect(dropdownContent.classList.contains('invisible')).toBe(true)
      }
    });
  });
  describe('Dropdowns init', () => {

    test('it should add dropdowns on page load', () => {
      initDropdowns();

      let createBtn = document.createElement('button');
      createBtn.setAttribute('data-dropdown-toggle', 'dropdown1');
      let createDropdownContent = document.createElement('div');
      createDropdownContent.id = 'dropdown1';
      createDropdownContent.classList.add('visible');

      document.body.appendChild(createBtn)
      document.body.appendChild(createDropdownContent)

      let btn = document.querySelector("[data-dropdown-toggle]");
      let dropdownContent = document.querySelector("#dropdown1");
      btn.click();
      expect(dropdownContent.classList.contains('visible')).toBe(true);

    })
  });
});