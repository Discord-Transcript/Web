/*
 * Copyright (c) 2021 Abdi Hassan
 * Licensed under the MIT Licence
 */

import { showLargerImage } from '../utils'

class MessageImage extends HTMLImageElement {
  constructor () {
    super()
    this.onClick = () => showLargerImage(this)
    this.onError = this.onError.bind(this)
  }

  connectedCallback () {
    this.addEventListener('error', this.onError)
    if (this.dataset.clickable !== void 0) {
      this.addEventListener('click', this.onClick)
    }
  }

  onError () {
    this.removeEventListener('error', this.onError)
    this.removeEventListener('click', this.onClick)
    this.removeAttribute('data-clickable')
    this.src = 'https://discord.com/assets/e0c782560fd96acd7f01fda1f8c6ff24.svg'
  }
}

class MessageGifv extends HTMLVideoElement {
  constructor () {
    super()
    this.onClick = () => showLargerImage(this)
  }

  connectedCallback () {
    this.addEventListener('click', this.onClick)
  }
}

customElements.define('message-image', MessageImage, { extends: 'img' })
customElements.define('message-gifv', MessageGifv, { extends: 'video' })
