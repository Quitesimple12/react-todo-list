import React, {useState, useEffect} from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";



//create your first component
const Home = () => {
	const [inputvalue, setinputvalue] = useState('');
	const [listitem, addlistitem] = useState([])

	const addItemToList = (event) => {if (event.key === 'Enter') {
		addlistitem(listitem.concat([inputvalue]))
		setinputvalue('')
	}}
	return (
		<div className="container">
			<h1>TODOS</h1>
			<ul>
				<li><input type="text"  
					value={inputvalue} 
					onChange= {(event) => setinputvalue(event.target.value) && addlistitem } 
					onKeyPress = {addItemToList} 
					placeholder="What are you going to do?"></input></li>
				{listitem.map((item, index) => 
				(<li>{item} <i class = "fas fa-trash-alt" 
				onClick={() => 
				addlistitem(
					listitem.filter((t, currentIndex) => index != currentIndex))}></i></li>))}
			</ul>
			200 tasks
		</div>
	);
	};

export default Home;
