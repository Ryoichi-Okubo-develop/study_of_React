import React, { useState, useCallback } from 'react'

type ButtonProps = {
  onClick: () => void
}

const DecrementButton = (props: ButtonProps) => {
  const { onClick } = props

  console.log('DecrementButtonが再描画されました')

  return <button onClick={onClick}>Decrement</button>
}

const IncrementButton = React.memo((props: ButtonProps) => {
  const { onClick } = props

  console.log('IncrementButtonが再描画されました')

  return <button onClick={onClick}>Increment</button>
}
)

const DoubleButton = React.memo((props: ButtonProps) => {
  const { onClick } = props

  console.log('DoubleButtonが再描画されました')

  return <button onClick={onClick}>Double</button>
}
)

export const Parent = () => {
  const [count, setCount] = useState(0)

  const decrement = () => {
    setCount((prevCount) => prevCount - 1)
  }

  const increment = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const double = useCallback(() => {
    setCount((prevCount) => prevCount * 2)
  }, [])

  return (
    <div>
      <p>Count: {count}</p>
      <DecrementButton onClick={decrement} />
      <IncrementButton onClick={increment} />
      <DoubleButton onClick={double} />
    </div>
  )
}