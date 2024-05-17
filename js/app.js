const $ = document
const imgContainer = $.querySelector('.container')
const img = $.querySelector('img')

imgContainer.addEventListener('mousemove', event => {
    
    const xPos = event.clientX - event.target.offsetLeft
    const yPos = event.clientY - event.target.offsetTop

    img.style.transformOrigin = `${xPos}px ${yPos}px`
    img.style.transform = 'scale(2)'

})

imgContainer.addEventListener('mouseleave', () => {
    img.style.transformOrigin = `center`
    img.style.transform = 'scale(1)'
})