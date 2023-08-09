
export const saveGame = (stringKey,itemToSave) =>{
  window.localStorage.setItem(stringKey,JSON.stringify(itemToSave))
}

export const readGameBoard = () =>{
  return JSON.parse(window.localStorage.getItem('board'))
}

export const readGameTurn = () =>{
    return window.localStorage.getItem('turn')
  }

export const deleteGame = () =>{
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}
