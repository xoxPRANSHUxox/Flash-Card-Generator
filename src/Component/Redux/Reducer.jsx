import { TYPE } from "./Action";

// Retrieve flashcards from localStorage if available
const storedFlashcards = JSON.parse(localStorage.getItem("flashcards"));

const initialState = {
    groupName: "",
    groupImage: "",
    groupDescription: "",
    cards: [{
        term: "",
        definition: "",
        cardImage: ""
    }],
    flashcards: storedFlashcards || [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.ADDFLASHCARD:
            const updatedFlashcards = [...state.flashcards, action.payload];

            // Store updated flashcards in localStorage
            localStorage.setItem("flashcards", JSON.stringify(updatedFlashcards));

            return {
                ...state,
                flashcards: updatedFlashcards,
                groupName: action.payload.groupName,
                groupImage: action.payload.groupImage,
                groupDescription: action.payload.description,
                cards: action.payload.cards,
            };

        default:
            return state;
    }
};
