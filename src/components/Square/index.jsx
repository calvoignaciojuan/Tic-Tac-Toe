
export const Square = ({children, isSelected, updateBoard, index}) => {

    const className = isSelected ? "is-selected" : "";
    
    const handlerOnClick = (index)=>{
        updateBoard(index);
    }

    return(
        <div 
            className={`square ${className}`}
            onClick={()=>{handlerOnClick(index)}}
        >
            {children}
        </div>
    );
};