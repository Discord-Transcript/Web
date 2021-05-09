/*
 * Copyright (c) 2021 Abdi Hassan
 * Licensed under the MIT Licence
 */

import { lateDefine } from '../utils'

class MessageVideo extends HTMLDivElement {
  constructor () {
    super()
    this.onClick = this.onClick.bind(this)
  }

  connectedCallback () {
    this.querySelector('.play').addEventListener('click', this.onClick)
  }

  onClick () {
    this.innerHTML = ''
    const iframe = document.createElement('iframe')
    iframe.width = parseInt(this.style.width).toString()
    iframe.height = parseInt(this.style.height).toString()
    iframe.frameBorder = '0'
    iframe.allowFullscreen = true
    const url = new URL(this.dataset.url)
    url.searchParams.append('autoplay', '1')
    url.searchParams.append('auto_play', '1')
    iframe.src = url.href
    this.appendChild(iframe)
  }
}

lateDefine('message-video', MessageVideo, { extends: 'div' })
