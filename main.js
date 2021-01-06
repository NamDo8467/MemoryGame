const app = () => {
    const cards = document.querySelectorAll('.memory-card')
    let hasFlipped = false
    let lockBoard = false
    let firstCard
    let secondCard


    function flipCard() {

        if (lockBoard == true) {
            return
        }
        if (this === firstCard) {
            return
        }
        this.classList.add('flip')
        if (hasFlipped == false) {

            firstCard = this

            hasFlipped = true

        } else {

            secondCard = this
            hasFlipped = false
            checkForMatch(firstCard, secondCard)
        }

    }
    function checkForMatch(firstCard, secondCard) {

        if (firstCard.getAttribute("data-id") === secondCard.getAttribute("data-id")) {
            disableCards()
            deleteCards()

        } else {

            unFlip()

        }
    }
    function disableCards() {

        firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)


    }

    function unFlip() {
        lockBoard = true
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBoard()
        }, 700);
    }
    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }
    function deleteCards() {
        lockBoard = true
        setTimeout(() => {
            firstCard.classList.add("delete-image")
            secondCard.classList.add("delete-image")
            lockBoard = false
        }, 700)


    }

    for (x = 0; x < cards.length; x++) {
        cards[x].addEventListener('click', flipCard)
    }

}


app();