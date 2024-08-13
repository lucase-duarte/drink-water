const smCups = document.querySelectorAll('.small')
const bigCup = document.querySelector('.big')
const percentage = document.querySelector('.percentage')

smCups.forEach((cup, index) => {

    cup.addEventListener('click', () => {

        smCups.forEach((c, idx)  => {

            if(idx <= index) {
                c.classList.add('filled')
            }

        })

        const filled = document.querySelectorAll('.filled')
        const fill = bigCup.children[1]

        fill.style.height = filled.length * 12.5 + '%'
        percentage.textContent = filled.length * 12.5 + '%'

    })


})