//useReducerをimport
import React, {useReducer} from 'react'
import '../App.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

//counter satet awal diberi nilai 0
const initialState = 0
//bikin nilai reducer
//berikan countState dan action lalu、dibikin bisa dapat countState balik 
const reducerFunc = (countState, action)=> {
//reducer関数にincrement、increment、reset処理を書く
//どの処理を渡すかはactionを渡すことによって判断する
  switch (action){
    case 'increment':
      return countState + 1
    case 'decrement':
      return countState - 1
    case 'reset':
      return initialState
    default:
      return countState
  }
}
const Reducer = () => {
//作成したreducerFunc関数とcountStateをuseReducerに渡す
//useReducerはcountStateとdispatchをペアで返すので、それぞれを分割代入
  const [count, dispatch] = useReducer(reducerFunc, initialState)
//カウント数とそれぞれのactionを実行する<Button/>を設置する
  return (
    <>
      <h2>Count：{count}</h2>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={()=>dispatch('increment')}>increment</Button>
        <Button onClick={()=>dispatch('decrement')}>decrement</Button>
        <Button onClick={()=>dispatch('reset')}>reset</Button>
      </ButtonGroup>
    </>
  )
}

export default Reducer