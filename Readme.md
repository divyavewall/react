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

In vite react we have index.html as our entery point and i main.jsx we have root which is rendering our app
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