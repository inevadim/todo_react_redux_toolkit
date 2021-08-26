import style from './ControlPanel.module.scss';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { addTodo } from '../../redux/todoSlice';

export const ControlPanel = () =>{

    const[text,setText]=useState('');

    const dispatch = useDispatch();

    const add = (name) =>{
        if(text === "")alert('Введите текст')
        else{
        const item={
            id:Date.now(),
            name,
            cheked:false
        }
        dispatch(addTodo(item))
        setText('');
    }
    }

    const enterInput = (e) =>{
        if(e.keyCode===13){add(text)}
    }

    return(
        <div className={style.controlPanel}>
            
            <input
                value={text}
                placeholder="Введите текст"
                onChange={e=>setText(e.target.value)}
                onKeyDown={e=>enterInput(e)}
            />
            <button
                onClick={()=>add(text)}
            >
                Ввод</button>
            
        </div>
    );
}