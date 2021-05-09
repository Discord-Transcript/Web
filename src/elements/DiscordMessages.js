/*
 * Copyright (c) 2021 Abdi Hassan
 * Licensed under the MIT Licence
 */

import { lateDefine, createElement } from '../utils'

const months = [
  'January', 'February', 'March',
  'April', 'May', 'June', 'July',
  'August', 'September', 'October',
  'November', 'December'
]

class DiscordMessages extends HTMLElement {
  connectedCallback () {
    let before = -1
    this.querySelectorAll('discord-message').forEach(msg => {
      const time = parseInt(msg.querySelector('message-date').dataset.timestamp)
      if (before > 0) {
        if (Math.floor((time - before) / 1000 / 60 / 60 / 24) > 0) {
          if (!msg.classList.contains('group-start')) msg.classList.add('group-start')
          const date = new Date(time)
          this.insertBefore(
            createElement('div', { class: 'divider' }, `${date.getDate().toString().padStart(2, '0')} ${months[date.getMonth()]} ${date.getFullYear()}`),
            msg
          )
        }
      }
      before = time
    })
  }
}

lateDefine('discord-messages', DiscordMessages)
