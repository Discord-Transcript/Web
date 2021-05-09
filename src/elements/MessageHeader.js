/*
 * Copyright (c) 2021 Abdi Hassan
 * Licensed under the MIT Licence
 */

import { lateDefine, createUserPopout } from '../utils'

class MessageHeader extends HTMLElement {
  connectedCallback () {
    const image = this.parentElement.previousElementSibling.previousElementSibling
    createUserPopout(this.querySelector('.name'), {
      id: this.parentElement.parentElement.dataset.author,
      username: this.querySelector('.name').textContent,
      discriminator: image.dataset.discriminator,
      avatar: image.src,
      badge: this.querySelector('.badge').textContent
    })
  }
}

lateDefine('message-header', MessageHeader)
