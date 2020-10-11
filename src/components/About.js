import React, {Component} from 'react';
import '../css/about.css';
import AboutCard from './AboutCard';
import MySkills from "./MySkills";
import webIcon from '../images/web-design.png';
import androidIcon from '../images/android.png';
import resume from '../files/FATIH_SAYILIR-CV.pdf';


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills:[
                {skill:'Html',width:'80%'},
                {skill:'Css',width:'80%'},
                {skill:'ReactJs',width:'75%'},
                {skill:'NodeJs',width:'50%'},
                {skill:'Java',width:'75%'},
                {skill:'Android',width:'50%'},
                {skill:'Photoshop',width:'75%'},
            ]}
    }
    render() {
        return (
            <div className={'container-about'} id={'about'}>
                <div className={'header-about'}>
                    <i className={'fas fa-user-circle'}/>
                    ABOUT
                </div>
                <div className={'text-about'}>
                    <p>I am self-motivated and problem-solver developer who likes to learn and always bring value to the projects I’m involved in.
                        With a positive mindset and a belief in continuous learning, I make sure that the job gets done.
                        I like to be challenged and has no problem working outside of my comfort zone in order to achieve the best.
                        I have a passion for web and mobile application development.
                        I love to create web apps as well as mobile apps.</p>
                </div>
                <div className={'container-about-card'}>
                    <AboutCard icon={webIcon} header={'Web Development'}
                               text={'I am able to develop effective web solutions, from backend to frontend.' +
                               ' My experience in web development based on modern technologies like HTML5,' +
                               ' responsive website development with ReactJs and backend solutions based on NodeJs.' +
                               ''}/>
                    <AboutCard icon={androidIcon} header={'Mobile Development'}
                               text={'Mobile applications have become the most powerful tool for getting easy access to expected users worldwide. ' +
                               'Do you need help with mobile design? I can help with that. ' +
                               'I do mobile apps development for Android devices.'}/>
                </div>
                <div className={'container-my-skills'}>
                    <div className={'header-about'}>
                        My Skills
                    </div>
                    <div>
                        {this.state.skills.map((value,index)=> {
                                return <MySkills key={index} skill={value.skill} width={value.width}/>
                            }
                        )}
                    </div>
                    <div className={'about-resume'}>
                        <a href={resume} download={'Fatih_Sayilir-CV'}>
                            <button className={'btn-button'}>
                                <i className={'fas fa-download'}/>
                                Download Resume</button></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;

