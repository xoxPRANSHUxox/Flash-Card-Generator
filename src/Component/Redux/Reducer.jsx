import { TYPE } from "./Action";

// Retrieve flashcards from localStorage if available
const storedFlashcards = JSON.parse(localStorage.getItem("flashcards"));

const initialState = {
    flashcards: storedFlashcards || [], // Ensure flashcards is initialized as an array
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.ADDFLASHCARD:
            const updatedFlashcards = [...state.flashcards, action.payload];

            // Store updated flashcards in localStorage
            localStorage.setItem("flashcards", JSON.stringify(updatedFlashcards));

            return {
                ...state,
                flashcards: updatedFlashcards, // Ensure flashcards is updated properly
            };

        default:
            return state;
    }
};
