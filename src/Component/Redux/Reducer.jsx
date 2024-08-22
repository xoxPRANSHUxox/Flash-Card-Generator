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

            // console.log("Updated State:", { ...state, flashcards: updatedFlashcards });
            // Remove comment from above line if you want to see the updated state

            return {
                ...state,
                flashcards: updatedFlashcards, // Ensure flashcards is updated properly
            };
        
            case TYPE.DELETEFLASHCARD:
                // Ensure only the flashcard at the given index is removed
                const filteredFlashcards = state.flashcards.filter((_, idx) => idx !== action.payload);
            
                // Store updated flashcards in localStorage
                localStorage.setItem("flashcards", JSON.stringify(filteredFlashcards));
            
                return {
                    ...state,
                    flashcards: filteredFlashcards,
                };
                
        default:
            return state;
    }
};
