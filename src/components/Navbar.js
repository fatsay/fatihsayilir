import React, {Component} from 'react';
import '../css/navbar.css'

class NavBar extends Component {
    openNav=()=> {
        document.getElementById("myOverlay").style.width = "100%";
    }
    closeNav=(e)=> {
        e.preventDefault();
        document.getElementById("myOverlay").style.width = "0%";
    }
    closeOverlay=()=> {
        document.getElementById("myOverlay").style.width = "0%";
    }
    render() {
        return (
            <div className={'container-navbar'}>
                <i className={'fa fa-bars fa-2x'} id='icon' onClick={this.openNav}/>
                <div className={'navbar'}>
                    <ul>
                        <li><a className={'left-link'} href={'#home'}>HOME</a></li>
                        <li><a className={'left-link'} href={'#about'}>ABOUT</a></li>
                        <li><a className={'left-link'} href={'#contact'}>CONTACT</a></li>
                    </ul>
                </div>
                <div className={'overlay'} id={'myOverlay'}>
                    <a href={{javascript:void(0)}} className='closeBtn' onClick={this.closeNav}>
                        &times;</a>
                    <div className={'overlay-content'}>
                        <a href={'#home'} onClick={this.closeOverlay}>HOME</a>
                        <a href={'#about'} onClick={this.closeOverlay}>ABOUT</a>
                        <a href={'#contact'} onClick={this.closeOverlay}>CONTACT</a>
                    </div>

                </div>
            </div>
        );
    }
}

export default NavBar;
