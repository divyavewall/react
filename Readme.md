## 1. Understand the react flow and structure 
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

## 2. Importance of hooks
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
## 3. Virtual DOM, Fiber and Reconcilliation
Goal of react fiber is to increase its suitability for areas like animation, layout and gestures. Its headline feature is incremental rendering- the ability to split rendering work into chunks and spread it out over multiple frames.

**Key features of react fibre :**
- ability to pause
- abort
- reuse work as new updates comes in
- ability to assign priority to different types of updates

**Reconcilliation**
The algorithm react uses to diff one tree with another to determine which parts need to be changed. It is the algorithm behind what is popularly understood as ***VirtualDOM***.
A high level description goes something like this - when you render a react application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering enviornment (example - in the case of browser application, it's translated to a set of DOM operations), When the app is updated usually via setState a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

***Although fiber is a ground up rewrite of the reconciler, the high level algo described in the react docs will be largely the same. the key points are:***
- Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.
- Diffing of lists is performed using keys. keys should be 'stable, predictable and unique'.

**Reconcilliation versus rendering**
The DOM is just one of the rendering enviornments, react can render to the the other major targets being native ios and android views via React native.
The reason it can support so many targets is because react is designed so that recioncilliation and rendering are separate phases. the reconciler does the work of computing which parts of a tree have changed the renderer then uses that information to actually update the rendered app. 

## 4. Interview question on Counter
```
  function App(){
    const [counter, setCounter] = useState(15)
    const incrementValue = () => {
      setCounter(counter+1)
      setCounter(counter+1)
      setCounter(counter+1)
      setCounter(counter+1)
    }
    const decrementValue = () => {
      setCounter(counter-1)
    }

    return(
      <>
        <h1> Count : {counter} </h1>
        <button onClick={incremetValue}> + </button>
        <button onClick={decrementValue}> - </button> 
      </>
    )
  }
```
**here when we increment value what will we get in count 16 or 19 ?**
we will get 16 because useState sends all the updates in UI in batches which are more controllable after the implementation of react-fiber, here each of this setCounter function doing same thing hence it will considered in single batch.
instead of counter = counter+1 we got last updated state using 

setCounter(prevCounter => prevCounter+1)

When it comes through callback after then after completing again it's called and changes propagated by doing these we can update 15 to 19 on a single click.

```
  function App(){
    const [counter, setCounter] = useState(15)
    const incrementValue = () => {
      setCounter(prevCounter = prevCounter+1)
      setCounter(prevCounter = prevCounter+1)
      setCounter(prevCounter = prevCounter+1)
      setCounter(prevCounter = prevCounter+1)
    }
    const decrementValue = () => {
      setCounter(counter-1)
    }

    return(
      <>
        <h1> Count : {counter} </h1>
        <button onClick={incremetValue}> + </button>
        <button onClick={decrementValue}> - </button> 
      </>
    )
  }
```