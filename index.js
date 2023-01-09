let blume = document.getElementById('blume')
let clickAnzeige = document.getElementById('clickAnzeige')
let coins = 0;
let pic = 0;
let zählerAnimation = 1;
let AnimationSchalter = 0;
let ShopButton = document.getElementById('shopButton')
let storeWindow = document.getElementById('storeWindow')
let storeOpen = false;
//Shop Items (Blumen)
let shopItemSonneBlume = document.getElementById('shopItemSonnenblume');
let shopItemPinkeBlume = document.getElementById('shopItemPinkBlume');

// Klick event ,Coins farmen;
blume.addEventListener('click', () => {
    getCoins();
})
// Funktion für das coin sammeln
function getCoins() {
    clickAnzeige.classList.add('animationClick')
    setTimeout(() => {
        clickAnzeige.classList.remove('animationClick')
    }, 300)
    coins++;
    document.getElementById('money').innerText = coins;
}


// Shop öffnen und schließen funktion
ShopButton.addEventListener('click', () => {
    if (storeOpen == false) {
        storeWindow.classList.remove('closeStore')
        storeWindow.classList.add('openStore')
        setTimeout(() => {
            storeWindow.style.height = '100%';
            storeOpen = true;
            storeWindow.classList.remove('openStore')
        }, 900)
    }
    else if (storeOpen == true) {
        storeWindow.classList.add('closeStore')
        setTimeout(() => {
            storeWindow.style.height = '0%';
            storeOpen = false;
            storeWindow.classList.remove('closeStore')
        }, 900)
    }
})


// Blumen shop Sektion
shopItemSonneBlume.addEventListener('click', () => {
    blume.src = 'textures/Sonnenblume-Texturen/sonnenblume-Texture.png'
    breakUpAllAnimation();
    sonnenBlumenAnimation();
})
shopItemPinkeBlume.addEventListener('click', () => {
    blume.src = 'textures/Pink-Blume-Texturen/PinkBlumeAnimation/pinkBlumeAnimation1.png'
    breakUpAllAnimation();
    pinkBlumeAnimation();
})


// Löscht alle Animation Intervalle
function breakUpAllAnimation() {
    clearInterval(sonnenBlumeAnimation)
    clearInterval(PinkBlumeAnimation)
}

// Lädt und löscht alle animationen. (nötig um breakUpAllAnimation auszuführen)
function loadAnimation() {
    pinkBlumeAnimation()
    sonnenBlumenAnimation()
}


// Animation Area
function pinkBlumeAnimation() {
    PinkBlumeAnimation = setInterval(() => {
        if (zählerAnimation < 57 && AnimationSchalter == 0) {
            zählerAnimation++
            blume.src = `textures/Pink-Blume-Texturen/PinkBlumeAnimation/pinkBlumeAnimation${zählerAnimation}.png`
            if (zählerAnimation == 56 && AnimationSchalter == 0) {
                AnimationSchalter = 1;
            }
        }
        else if (zählerAnimation < 57 && AnimationSchalter == 1) {
            zählerAnimation--
            blume.src = `textures/Pink-Blume-Texturen/PinkBlumeAnimation/pinkBlumeAnimation${zählerAnimation}.png`
            if (zählerAnimation == 1 && AnimationSchalter == 1) {
                AnimationSchalter = 0;
            }
        }
    }, 100)
}
function sonnenBlumenAnimation() {
    sonnenBlumeAnimation = setInterval(() => {
        if (zählerAnimation < 61 && AnimationSchalter == 0) {
            zählerAnimation++
            blume.src = `textures/Sonnenblume-Texturen/AnimationVerbessert/Animation${zählerAnimation}.png`
            if (zählerAnimation == 60 && AnimationSchalter == 0) {
                AnimationSchalter = 1;
            }
        }
        else if (zählerAnimation < 61 && AnimationSchalter == 1) {
            zählerAnimation--
            blume.src = `textures/Sonnenblume-Texturen/AnimationVerbessert/Animation${zählerAnimation}.png`
            if (zählerAnimation == 1 && AnimationSchalter == 1) {
                AnimationSchalter = 0;
            }
        }
    }, 100)
}

loadAnimation()
breakUpAllAnimation()