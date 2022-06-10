import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } 
       from "react-router-dom";

function App() {
	return (
		<div>
			<nav class="navbar background">
				<ul class="nav-list">
					<div class="logo">
						<img src="data:image/png;base64,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" />
					</div>
					<li><a href="#men">Men</a></li>
					<li><a href="#women">Women</a></li>
					<li><a href="#new">New Collection</a></li>
					<li><a href={'Shopnow\shopnow.html'}>Shop Now</a></li>
				</ul>

				<div class="rightNav">
					<input type="text" name="search" id="search" />
					<button class="btn btn-sm">Search</button>
				</div>
			</nav>
			</div>
	)
}

export default App;
