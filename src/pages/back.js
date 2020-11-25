//dari React lakukan import useCallback
import React, {useState, useCallback} from 'react'

//Title component(子)
//React.memoでラップ
const Title = React.memo(() => {
  console.log('Title component')
  return (
    <h2>useCallBackTest </h2>
  )
})

//Button componet(child)
//React.memoでラップ
const Button = React.memo(({handleClick,value}) => {
  console.log('Button child component', value)
  return <button type="button" onClick={handleClick}>{value}</button>
})

//Countコンポーネント(子)
//React.memoでラップ
const Count = React.memo(({text, countState}) => {
  console.log('Count child component', text)
  return <p>{text}:{countState}</p>
})

//Counter component（parent）
const Back = () => {

  const [firstCountState, setFirstCountState] = useState(0)
  const [secondCountState, setSecondCountState] = useState(10)

//+ 1 ボタンのstateセット用関数
//useCallbackで関数をラップし、依存配列には関数内で利用しているfirstCountStateを入れます。
  const incrementFirstCounter = useCallback(() => setFirstCountState(firstCountState + 1),[firstCountState])

//+ 10 ボタンのstateセット用関数
//useCallbackで関数をラップし、依存配列には関数内で利用しているsecondCountStateを入れます。
  const incrementSecondCounter = useCallback(() => setSecondCountState(secondCountState + 10),[secondCountState])

//子コンポーネントを呼び出す
  return (
    <>
      <Title/>
      <Count text="+ 1 Button" countState={firstCountState}/>
      <Count text="+ 10 Button" countState={secondCountState}/>
      <Button handleClick={incrementFirstCounter} value={'+1 Button'}/>
      <Button handleClick={incrementSecondCounter} value={'+10 Button'}/>
    </>
  )
}

export default Back