/*
 * Copyright (c) 2021 Abdi Hassan
 * Licensed under the MIT Licence
 */

import { lateDefine, copy, contextMenu } from '../utils'

class DiscordMessage extends HTMLElement {
  connectedCallback () {
    contextMenu(this, [ {
      name: 'Copy Message ID',
      callback: () => copy(this.dataset.id)
    } ])
    contextMenu(this.querySelector('.avatar'), [ {
      name: 'Copy Avatar URL',
      callback: () => copy(this.querySelector('.avatar').src)
    }, {
      name: 'Copy User ID',
      callback: () => copy(this.dataset.author)
    } ])
    contextMenu(this.querySelector('message-header .name'), [ {
      name: 'Copy User ID',
      callback: () => copy(this.dataset.author)
    } ])
  }
}

lateDefine('discord-message', DiscordMessage)
