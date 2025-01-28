import { useState } from "react"

function App() {
  const [inputOne, setinputOne] = useState(0);
  const [inputTwo, setinputTwo] = useState(0);
  const [outputValue, setoutputValue] = useState(0.00);

  const performAction = action => {
    let result = 0
    action = String(action).toLowerCase()
    if (action == "add") result = parseFloat(inputOne) + parseFloat(inputTwo)
    if (action == "sub") result = parseFloat(inputOne) - parseFloat(inputTwo)
    if (action == "mul") result = parseFloat(inputOne) * parseFloat(inputTwo)
    if (action == "div") result = parseFloat(inputOne) / parseFloat(inputTwo)
    setoutputValue(result.toFixed(2))
  }

  const clear = () => {setinputOne(0);setinputTwo(0);setoutputValue(0)}

  return (
    <main>
      <h1 className="text-3xl text-center text-blue-900 font-semibold">Elementary Algebra</h1>
      <div id="output">{outputValue}</div>
      <div id="input" className="fr">
        <input onChange={(e) => setinputOne(e.target.value)} type="number" name="input_1" id="input_1" value={inputOne} />
        <input onChange={(e) => setinputTwo(e.target.value)} type="number" name="input_2" id="input_2" value={inputTwo} />
      </div>
      <div id="buttons" className="fr">
        {["Add", "Sub", "Mul", "Div"].
          map(x => <button key={x} onClick={() => performAction(x)}>{x}</button>)}
      </div>
      <div className="fr">
        <button onClick={()=>clear()} id="clear">Clear</button>
      </div>
    </main>
  )
}

export default App
