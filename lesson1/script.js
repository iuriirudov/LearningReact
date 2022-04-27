// ReactDOM.render(<h1>Hello Everyone! This is embedded text.</h1>, document.getElementById("root"));

function ChildComponent() {
	return (
		<div>
			<h3>Hi! This is a child component inside of a parent</h3>
		</div>
	);
}

function MainComponent() {
	return (
		<div className="container">
			<ChildComponent />
			<h1>Main Component</h1>
			<p>Paragraph of the main component</p>
			<ol>
				<li>First</li>
				<li>Second</li>
				<li>Third</li>
				<li>Fourth</li>
			</ol>
		</div>
	);
}
ReactDOM.render(<MainComponent />, document.getElementById("root"));
