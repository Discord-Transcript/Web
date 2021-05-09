/*
 * Copyright (c) 2021 Abdi Hassan
 * Licensed under the MIT Licence
 */

import { lateDefine } from '../utils'

class MessageMarkup extends HTMLElement {
  connectedCallback () {
    const actualNodes = [ ...this.childNodes ].filter(n => !(n instanceof HTMLBRElement))
    if (actualNodes.length < 28 && !actualNodes.find(n => !n.classList || !n.classList.contains('emoji'))) {
      actualNodes.forEach(n => n.classList.add('jumbo'))
    }
  }
}

lateDefine('message-markup', MessageMarkup)
