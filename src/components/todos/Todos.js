import style from './Todos.module.scss';
import { useSelector,useDispatch } from 'react-redux';
import {deleteTodo,chekedTodo} from './../../redux/todoSlice';
import { useEffect } from 'react';

export const Todos = () =>{

    const dispatch=useDispatch();
    const todo = useSelector(state => state.todo.todo);

    const deleteTd = (id) =>{
        dispatch(deleteTodo(id))
    }

    const cheked = (id) =>{
        dispatch(chekedTodo(id))
    }

    useEffect(() => {
        localStorage.setItem("todos",JSON.stringify(todo))
    }, [todo])

    return(
        <div className={style.todos}> 
            {                
                todo.map(item=>
                        <div 
                            key={item.id}
                            className={style.wrapperTodo}
                        >
                            
                            <div
                                className={item.cheked ? style.unItemTodo : style.itemTodo }
                                onClick={()=>cheked(item.id)}
                            >
                                {item.name}
                            </div>

                            <div 
                                className={style.delete}
                                onClick={()=>deleteTd(item.id)}
                            >
                                &times;
                            </div>
                        </div>
                        )
            }         
        </div>
    );
}