/*
 * Copyright (c) 2021 Abdi Hassan
 * Licensed under the MIT Licence
 */

module.exports = (width, height, maxWidth, maxHeight) => {
  if (width !== maxWidth || height !== maxHeight) {
    const widthRatio = width > maxWidth ? maxWidth / width : 1
    width = Math.max(Math.round(width * widthRatio), 0)
    height = Math.max(Math.round(height * widthRatio), 0)

    const heightRatio = height > maxHeight ? maxHeight / height : 1
    width = Math.max(Math.round(width * heightRatio), 0)
    height = Math.max(Math.round(height * heightRatio), 0)
  }

  return {
    width,
    height
  }
}
