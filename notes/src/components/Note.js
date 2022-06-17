import { useState } from 'react';
import { MdDeleteForever, MdOutlineModeEdit } from 'react-icons/md';
import ColorPicker from './ColorPicker';

const Note = ({ id, title, text, date, handleDeleteNote, handleEditNote }) => {
const [color, setColor] = useState ("")
const style = {}
if ( color !== "" ) {
    style.backgroundColor = color
}
    return(
    <div className='note' style={style}>
        <span>{title}</span>
        <span>{text}</span>
        <div className="note-footer">
            <small>{ date }</small>
            <MdOutlineModeEdit 
            onClick={() => handleEditNote(id)}
                className="edit-icon"
                size="1.3em"
            /> 
            <MdDeleteForever 
            onClick={ () => handleDeleteNote(id)} 
            className='delete-icon' 
            size='1.3em'/>
            <ColorPicker 
            handleChangeColor = {setColor}/>
        </div>

    </div>
    )
};

export default Note;