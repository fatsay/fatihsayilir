import React, {Component} from 'react';
import '../css/header.css'

class Header extends Component {
    render() {
        return (
            <div className={'container-header'} id={'home'}>
                <div className={'name-header'}>
                    Fatih Sayilir
                </div>
                <p className={'title-header'}>Software Developer</p>
                <a href='mailto:work.fatih.sayilir@gmail.com'>
                    <button className={'btn-button'}>
                        <i className={'fas fa-envelope'}/>
                        Send Message</button></a>
            </div>
        );
    }
}

export default Header;
