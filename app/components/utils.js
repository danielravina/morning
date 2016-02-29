module.exports = {
  linkTo(text, link) {
    // return `&lt;a href='${link}'&gt;${text}&lt;/a&gt;`
    return `<a href="${link}">${text}</a>`
  }
}
