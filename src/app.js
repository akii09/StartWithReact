const heading = React.createElement("h1", {id: 'main', class: 'app'}, "Hello world from react !");
const paragraph = React.createElement("p", {id: 'main', class: 'app'}, "This is made using react");
const parent = React.createElement("div", {id: 'parent'}, React.createElement("div", {id: 'child'}, [heading,paragraph]))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);