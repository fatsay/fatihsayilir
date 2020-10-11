import React, {Component} from 'react';
import '../css/linksLeft.css'
import imgProfile from '../images/profile.png';
import resume from '../files/FATIH_SAYILIR-CV.pdf';

class LinksLeft extends Component {
    render() {
        return (
            <div className={'links-left-link'}>
                <div className={'container-image'}>
                    <img className={'img-profile'} src={imgProfile} alt={'img'}/>
                </div>
                <div className={'links-left-icon'}>
                    <ul>
                        <li onClick={(event) => {event.preventDefault(); window.open("https://linkedin.com/in/fatih-sayilir-32bb91135");}}>
                            <i className={'fab fa-linkedin fa-2x'}/>LinkedIn</li>
                        <li onClick={(event) => {event.preventDefault(); window.open("https://github.com/fatsay/");}}>
                            <i className={'fab fa-github-square fa-2x'}/>GitHub
                        </li>
                        <li onClick={(event) => {event.preventDefault(); window.open("https://twitter.com/@fatih_sayilir");}}>
                            <i className={'fab fa-twitter-square fa-2x'}/>Twitter
                        </li>
                        <li onClick={(event) => {event.preventDefault(); window.open("https://www.instagram.com/fatihsay/");}}>
                            <i className={'fab fa-instagram-square fa-2x'}/>Instagram
                        </li>
                    </ul>
                </div>
                <div className={'left-resume'}>
                    <a href={resume} download={'Fatih_Sayilir-CV'}>
                        <button className={'btn-button'}>
                            <i className="fas fa-download fa-2x"/>
                            Download Resume</button></a>
                </div>
            </div>
        );
    }
}

export default LinksLeft;
