/*
 * Copyright (c) 2021 Abdi Hassan
 * Licensed under the MIT Licence
 */

class ThemeSwitch extends HTMLElement {
  constructor () {
    super()
    this.toggle = this.toggle.bind(this)
  }

  connectedCallback () {
    this.addEventListener('click', this.toggle)
  }

  toggle () {
    if (document.body.classList.contains('theme-dark')) {
      document.body.classList.remove('theme-dark')
      document.body.classList.add('theme-light')
    } else {
      document.body.classList.remove('theme-light')
      document.body.classList.add('theme-dark')
    }
  }
}

customElements.define('theme-switch', ThemeSwitch)
