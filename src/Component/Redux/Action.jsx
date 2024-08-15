export const TYPE = {
    ADDFLASHCARD:'ADDFLASHCARD'
}

export const addFlashCard = (flashcards) => ({
    type: TYPE.ADDFLASHCARD,
    payload: flashcards,
})