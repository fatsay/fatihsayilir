import React, {Component} from 'react';
import '../css/aboutCard.css';

class AboutCard extends Component {
    render() {
        return (
            <div className={'about-card-row'}>
                <div className={'about-card-column'}>
                    <div className={'about-card'}>
                        <div className={'about-card-icon'}>
                            <img src={this.props.icon} alt={'icon-web'}/>
                        </div>
                        <div className={'about-content'}>
                            <div className={'about-content-header'}>
                                {this.props.header}
                            </div>
                            <div className={'about-content-text'}>
                                {this.props.text}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutCard;

