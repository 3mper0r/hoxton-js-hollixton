{/* <header>
        <h1 class="logo">Hollixton</h1>

        <div class="navLeft">
            <ul>
                <li>Girls</li>
                <li>Guys</li>
                <li>Sale</li>
            </ul>
        </div>
        <div class="navRight">
            <ul>
                <li>🔍</li>
                <li>🤦</li>
                <li>👜</li>
            </ul>
        </div>
    </header>
    <main>  
        <img src="https://img.hollisterco.com/is/image/anf/KIC_324-1085-0123-100_prod1" alt="">
    </main> */}

const headerEl = document.createElement('header')

const logo = document.createElement('h1')
logo.setAttribute('class', 'logo')
logo.textContent = 'Hollixton'

headerEl.append(logo)


const navLeft = document.createElement('div')
navLeft.setAttribute('class', 'navLeft')

const ulLeft = document.createElement('ul')
const liGirls = document.createElement('li')
liGirls.textContent = 'Girls'

ulLeft.append(liGirls)

const liGuys = document.createElement('li')
liGuys.textContent = 'Guys'

ulLeft.append(liGuys)

const liSale = document.createElement('li')
liSale.textContent = 'Sale'

ulLeft.append(liSale)

navLeft.append(ulLeft)


const navRight = document.createElement('div')
navRight.setAttribute('class', 'navRight')

const ulRight = document.createElement('ul')
const liSearch = document.createElement('li')
liSearch.textContent = '🔍'

ulRight.append(liSearch)

const liProfile = document.createElement('li')
liProfile.textContent = '🤦'

ulRight.append(liProfile)

const liCart = document.createElement('li')
liCart.textContent = '👜'

ulRight.append(liCart)

navRight.append(ulRight)

document.body.append(headerEl, navLeft, navRight)