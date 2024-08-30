## Understand the react flow and structure 
In index.httml, we have only div whose id is root 
In entry point we have:
```
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
```

In vite react we have index.html as our entry point and in main.jsx we have root which is rendering our app
```
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        </App>
    </React.StrictMode>
)
```

Best Practices to follow:
- In vite react we can only create jsx file
- component name should start with capital letter
- in simple react we can create js files and jsx files too but component name should start with capital letter only 
- in app.jsx all the components should be wrapped inside one tag means we can return only one tag so we wrap everyrhing inside div on in fragments

## Importance of hooks
```
import './App.css'
function App() {
  let counter = 15
  const incrementCount = () => {
    counter = counter + 1
    console.log('increment count : ', counter)
  }
  const decrementCount = () => {
    counter = counter -1
    console.log('Decrement count : ', counter)
  }
  return (
    <>
      <h2>COUNTER - increments and decrements your count value</h2>
      <h3>Count : {counter}</h3>
      <button
        onClick = {incrementCount}
      > 
        Increment Count
      </button>
      <button
        onClick = {decrementCount}
      >
        Decrement Count</button>
    </>
  )
}
export default App
```
In this code we have a amajor problem everything works fine like icrement count increments the value and decrement count 
decrements the value but it does not reflec on ui, means on our ui count remains same

**This is problem of UI updation**

- React reacts on the updation of variable 
- When we are updating the variable anything that will change in UI handled by the react which handles ui updation using hooks 
- In this counter project we will use useState hook.
- useState - this hook is responsible for state change and this change has been propagated in our DOM. 

**Solution of this problem**
```
import { useState } from 'react'
import './App.css'
function App() {
  // let counter = 15
  let [ counter, setCounter ] = useState(10)
  const incrementCount = () => {
    // counter = counter + 1
    setCounter( counter + 1 )
    console.log('increment count : ', counter)
  }
  const decrementCount = () => {
    // counter = counter -1
    if(counter > 0){
      setCounter(counter - 1)
    }
    console.log('Decrement count : ', counter)
  }
  return (
    <>
      <h2>COUNTER - increments and decrements your count value</h2>
      <h3>Count : {counter}</h3>
      <button
        onClick = {incrementCount}
      > 
        Increment Count
      </button>
      <button
        onClick = {decrementCount}
      >
        Decrement Count</button>
    </>
  )
}
export default App
```
