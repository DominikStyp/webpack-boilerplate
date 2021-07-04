import strCss from '!css-loader!sass-loader!./styles/oneFile.scss'
// import strCss from '!css-loader!./styles/regular.css'

const stringCss = strCss.toString()
console.log(stringCss)

const style = document.createElement('style')
style.innerHTML = stringCss

document.querySelector('head').appendChild(style)
