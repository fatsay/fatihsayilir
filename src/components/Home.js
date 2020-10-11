import React, {Component} from 'react';
import '../css/home.css';
import LinkLeft from './LinkLeft';
import NavBar from './Navbar';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

class Home extends Component {

    render() {
        return (
            <div className={'container-home'}>
                <div className={'container-left'}>
                    <LinkLeft/>
                </div>
                <div className={'container-right'}>
                    <NavBar/>
                    <Header/>
                    <About/>
                    <Contact/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Home;
