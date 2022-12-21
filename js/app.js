

const headerToggleBtn = document.querySelector(".header__toggle-btn")
const headerInnerWrapper = document.querySelector(".header__inner-wrapper")
const headerInnerWrapperBtn = document.querySelector(
  ".header__inner-wrapper-btn"
)
headerToggleBtn.addEventListener('click', () => { headerInnerWrapper.classList.add('show-nav') })
headerInnerWrapperBtn.addEventListener('click', () => { headerInnerWrapper.classList.remove('show-nav')})
