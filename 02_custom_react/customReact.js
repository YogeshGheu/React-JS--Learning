function customRender(reactElement, mainContainer) {
	/*console.log(typeof reactElement)
	const domElement = document.createElement(reactElement.type);
	domElement.innerHTML = reactElement.children;
	domElement.setAttribute("href", reactElement.props.href);
	domElement.setAttribute("target", reactElement.props.target);
    mainContainer.appendChild(domElement)*/

	const domElement = document.createElement(reactElement.type);
	domElement.innerHTML = reactElement.children;
	for (const prop in reactElement.props) {
		if (prop.key == "children") continue;
		domElement.setAttribute(prop, reactElement.props[prop]);
	}
	mainContainer.appendChild(domElement);
}

const reactElement = {
	type: "a",
	props: {
		href: "https://www.google.com",
		target: "_blank",
	},
	children: "click me to visit google!",
};

let mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);
