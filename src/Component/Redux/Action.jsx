export const TYPE = {
    CREATEFINALCARD:'CREATEFINALCARD',
    CREATEGROUP:'CREATEGROUP',
    CREATECARDS:'CREATECARDS'
}

export const createGroup = (group) => ({
    type: TYPE.CREATEGROUP,
    payload: group,
})