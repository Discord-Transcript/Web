/*
 * Copyright (c) 2021 Abdi Hassan
 * Licensed under the MIT Licence
 */

import { lateDefine, createTooltip } from '../utils'

class MessageEmoji extends HTMLImageElement {
  constructor () {
    super()
    this.onError = this.onError.bind(this)
  }

  connectedCallback () {
    this.addEventListener('error', this.onError)
    createTooltip(this, this.alt)
  }

  onError () {
    this.parentNode.replaceChild(document.createTextNode(this.alt), this)
  }
}

lateDefine('message-emoji', MessageEmoji, { extends: 'img' })
