
export const saveGame = (stringKey,itemToSave) =>{
    window.localStorage.setItem(stringKey,JSON.stringify(itemToSave))
}

export const readGame = (stringKey) =>{
    return JSON.parse(window.localStorage.getItem(stringKey))
}

export const deleteGame = () =>{
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}
