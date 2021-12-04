// can only return a single parent element (JSX expressions must have 1 parent element)
// can have multiple elements, but must be inside of a single div or fragment <> (empty angle bracket)

// can add expressions and variables inside of the func
// conditionals as ternary operators
function App() {

  const name = 'Moog'
  const x = true

  return (
    <div className='container'>
      <h1>Hello from React</h1>
      <h2>hello again {name}</h2>
      <h3>can also do math inside of curly brackts like 1 + 2 <code>{1 + 2}</code> and can even wrap that in code</h3>
      <h3>woah. I can even use ternary operators <em>inside</em> of curly brackers, like this {x ? 'Yes' : 'No'} </h3>
    </div>
  );
}

export default App;
