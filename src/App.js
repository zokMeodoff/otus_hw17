import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Courses from './Courses';


class App extends Component {
	render() {
        return (
            <React.Fragment>
			<body>
				<Header/>
				<main>
					<Courses/>
				</main>
				<Footer/>
			</body>
            </React.Fragment>
        )
    }
};

export default App;


