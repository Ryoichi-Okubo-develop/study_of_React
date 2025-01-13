import React, { JSX } from 'react'

const TitleContext = React.createContext('')

const Title = () => {
  return (
    <TitleContext.Consumer>
      {(title) => {
        return <h1>{title}</h1>
      }}
    </TitleContext.Consumer>
  )
}

const Header = () => {
  return (
    <div>
      <Title />
    </div>
  )
}

const Page = () => {
  const title = 'React Book'

  return (
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  )
}

// type ContainerProps = {
//   title: string
//   children: React.ReactNode
// }

// const Container = (props: ContainerProps): JSX.Element => {
//   const { title, children } = props

//   return (
//     <div style={{ background: 'red' }}>
//       <span>{title}</span>
//       <div>{children}</div>
//     </div>
//   )
// }

// const Parent = () => {
//   return (
//     <Container title="Hello" >
//       <p>ここの部分が背景色で囲まれます</p>
//     </Container>
//   )
// }

export default Page