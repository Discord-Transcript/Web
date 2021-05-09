/*
 * Copyright (c) 2021 Abdi Hassan
 * Licensed under the MIT Licence
 */

function copy (text) {
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.style.opacity = '0'
  textarea.style.position = 'absolute'
  textarea.style.pointerEvents = 'none'
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
}

export default copy
