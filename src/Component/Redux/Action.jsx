export const TYPE = {
    ADDFLASHCARD:'ADDFLASHCARD',
    DELETEFLASHCARD:"DELETEFLASHCARD"
}

export const addFlashCard = (flashcards) => ({
    type: TYPE.ADDFLASHCARD,
    payload: flashcards,
})

export const deleteFlashCard = (flashcards) => ({
    type: TYPE.DELETEFLASHCARD,
    payload: flashcards,
})