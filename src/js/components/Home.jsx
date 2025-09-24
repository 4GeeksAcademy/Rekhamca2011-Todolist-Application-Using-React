import React, { useState } from "react";

const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [todos, setTodos] = useState(["Make the bed", "Wash my hands", "Eat", "Walk the dog"]);


	return (
		<div className="container">
			<h1>todos</h1>
			<ul>
				<li><input type="text"
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							setTodos(todos.concat([inputValue]));
							setInputValue("");
						}
					}}
					placeholder="what needs to be done?"></input>
				</li>
				{todos.length === 0 ? (
					<li>No tasks, add a task</li>
				) : (
					todos.map((item, index) => (
						<li className="todo-delete">
							{item}{""}
							<i className="fas fa-trash-alt delete-icon"
								onClick={() =>
									setTodos(
										todos.filter(
											(t, currentIndex) => index != currentIndex
										)
									)
								}></i>
						</li>
					)))}

			</ul>
			<div>{todos.length} item left</div>
		</div>

	);

};
export default Home;