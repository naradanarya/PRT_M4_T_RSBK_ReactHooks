//dari React lakukan import useCallback
import React, {useState, useCallback} from 'react'
const Title = React.memo(() => {
  console.log('Title component')
  return (
    <h2>useCallBackTest </h2>
  )
})

const Button = React.memo(({handleClick,value}) => {
  console.log('Button child component', value)
  return <button type="button" onClick={handleClick}>{value}</button>
})

const Count = React.memo(({text, countState}) => {
  console.log('Count child component', text)
  return <p>{text}:{countState}</p>
})

const Back = () => {

  const [firstCountState, setFirstCountState] = useState(0)
  const [secondCountState, setSecondCountState] = useState(10)

  const incrementFirstCounter = useCallback(() => setFirstCountState(firstCountState + 1),[firstCountState])
  const incrementSecondCounter = useCallback(() => setSecondCountState(secondCountState + 10),[secondCountState])

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