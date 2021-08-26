import style from './App.module.scss';
import { ControlPanel } from './components/controlPanel/ControlPanel';
import { Todos } from './components/todos/Todos';
import {useSelector} from 'react-redux';

function App() {

  const todo = useSelector(state => state.todo.todo)

  return (
    <div className={style.App}>
      <div className={style.todo}>
      <h1>Количество задач: {todo.length}</h1>
        <ControlPanel />
        <Todos />
      </div>
    </div>
  );
}

export default App;
