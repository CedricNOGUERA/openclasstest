import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PlantItem from "./components/PlantItem";
import App from "./pages/App";
// import Rumble from "./pages/PlantItem";
import { render } from "@testing-library/react";




const rootElement = document.getElementById("root");
render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/components/PlantItem" element={<PlantItem />} />
			{/* <Route path="/pages/Rumble" element={<Rumble />} /> */}
		</Routes>
	</BrowserRouter>,
	rootElement
);

// ReactDOM.render(
// 	<React.StrictMode>
// 		<BrowserRouter>
// 			<App />
// 		</BrowserRouter>
// 	</React.StrictMode>,
// 	document.getElementById("root")
// );

// function App() {
// 	return (
// 		<BrowserRouter>
// 			<Routes>
// 				<Route path="/" element={<App />} />
// 				<Route path="/PlantItem" element={<PlantItem />} />
// 			</Routes>
// 		</BrowserRouter>
// 	);
// }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
