import React, {Component} from 'react';
import '../css/mySkills.css';

class MySkills extends Component {
    render() {
        return (
            <div className={'my-skills'}>
                <div className={'my-skills-header'}>
                    {this.props.skill}
                </div>
                <div className={'skill-bar-container'}>
                    <div className={'bar'} style={{width:this.props.width, backgroundColor:'chocolate'}}>
                        {this.props.width>='70' && 'Skillful'}{ this.props.width<='69' && 'Beginner'}
                    </div>
                </div>
            </div>
        );
    }
}

export default MySkills;
