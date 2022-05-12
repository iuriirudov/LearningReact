import { createContext, useState } from "react";

const StudentsContext = createContext({
	students: [],
	totalStudents: 0,
	addStudent: (user) => {},
	removeStudent: (userId) => {},
	isStudent: (userId) => {},
});

export function StudentsContextProvider(props) {
	const [listStudents, setListStudents] = useState([]);

	function addStudentHandler(user) {
		setListStudents((prevUser) => {
			return prevUser.concat(user);
		});
	}
	function removeStudentHandler(userId) {
		setListStudents((prevUser) => {
			return prevUser.filter((student) => student.id !== userId);
		});
	}
	function isUserFavorite(userId) {
		return listStudents.some((student) => student.id === userId);
	}

	const context = {
		students: listStudents,
		totalStudents: listStudents.length,
		addStudent: addStudentHandler,
		removeStudent: removeStudentHandler,
		isStudent: isUserFavorite,
	};
	return <StudentsContext.Provider value={context}>{props.children}</StudentsContext.Provider>;
}

export default StudentsContext;
