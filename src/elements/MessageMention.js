/*
 * Copyright (c) 2021 Abdi Hassan
 * Licensed under the MIT Licence
 */

import { copy, contextMenu, createUserPopout } from '../utils'

class MessageMention extends HTMLElement {
  connectedCallback () {
    contextMenu(this, [ {
      name: `Copy ${this.dataset.type[0].toUpperCase() + this.dataset.type.slice(1)} ID`,
      callback: () => copy(this.dataset.id)
    } ])
    if (this.dataset.type === 'user') {
      createUserPopout(this, {
        id: this.dataset.id || '',
        username: this.dataset.username || '',
        discriminator: this.dataset.discriminator || '',
        avatar: this.dataset.avatar || '',
        badge: this.dataset.badge || ''
      })
    }
  }
}

customElements.define('message-mention', MessageMention)
