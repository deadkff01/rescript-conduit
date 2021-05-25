GlobalStyles.includeStyle()

@react.component
let make = () => {

  let (count, setCount) = React.useState(_ => 0)

  let increment = () => {
    setCount(prev => prev + 1)
  }

  let decrease = () => {
    setCount(prev => prev - 1)
  }

  <div> 
   <h1>{React.string("hello rescript")}</h1> 
   <h2>{React.int(count)}</h2>
   <Button onClick={_ => increment()}>{React.string("increment")}</Button>
   <Button onClick={_ => decrease()}>{React.string("decrease")}</Button>
  </div>
}
