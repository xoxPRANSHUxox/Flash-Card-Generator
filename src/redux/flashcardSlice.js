
const storedFlashCards = JSON.parse(localStorage.getItem("flashcards"));

const initialState = {
    formData: {
        groupname:"",
        groupImage:"",
        groupDescription:"",
        term:[
            {
                termName
            }
        ]
    }
}