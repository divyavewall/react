function customRender(reactElement, container){
    /* ------------------------------------------VERSION 1----------------------------------------------------
        const domElement = document.createElement(reactElement.type)
        domElement.innerHTML = reactElement.children
        domElement.setAttribute('href', reactElement.props.href)
        domElement.setAttribute('target', reactElement.props.target) 
        container.appendChild(domElement)
    */

   /*---------------------------------- VERSION 2 MODULAR APPROACH --------------------------------------------*/
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   for(const prop in reactElement.props){
        if(prop == reactElement.children) continue
        domElement.setAttribute(prop, reactElement.props[prop])
   }
   container.appendChild(domElement)
}

//behind the scene it is given as 
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',        
    },
    children: 'Click me to visit google'    
}

const mainContainer = document.querySelector('#root') 
//we have to render anchor tag 

//we want a method which helps us in rendering
customRender(reactElement, mainContainer)