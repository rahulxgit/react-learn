function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if(prop === 'children') {
            continue;
        }
        domElement.setAttribute(prop, reactElement.props[prop])
        
    }
    container.appendChild(domElement)
}

const reactElement = {  // task - render a tag in a browser
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google '
}
const mainContainer = document.querySelector('#root'); 
// #root is an HTML container where React renders and updates the UI automatically.


// i want to build a methos to render reactElement means add in root id
// (kya inject kru, kaha inject kru)
customRender(reactElement, mainContainer);  // make a function to execute this method