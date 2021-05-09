/*
 * Copyright (c) 2021 Abdi Hassan
 * Licensed under the MIT Licence
 */

class MessageSpoiler extends HTMLSpanElement {
  constructor () {
    super()
    this.onClick = this.onClick.bind(this)
  }

  connectedCallback () {
    this.addEventListener('click', this.onClick)
  }

  onClick () {
    this.classList.add('revealed')
    this.removeEventListener('click', this.onClick)
  }
}

customElements.define('message-spoiler', MessageSpoiler, { extends: 'span' })
