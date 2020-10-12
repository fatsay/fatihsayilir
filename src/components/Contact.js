import React, {Component} from 'react';
import '../css/contact.css';
import Alert from './Alert';
import firebase from './Firebase';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            email:'',
            subject:'',
            message:'',
            emailResult:'',
            error:''
        }
    }
    handleChange =(event)=> {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    handleSubmit =(event)=>{
        event.preventDefault();
        const email={
            name:this.state.name,
            email: this.state.email,
            subject:this.state.subject,
            message:this.state.message
        }
        const getMail=firebase.functions().httpsCallable('getMail');
        getMail(email).then(result=>{
            this.setState({emailResult:result.data})
        }).catch(error=>
            this.setState({error:error.message}))
    }
    render() {
        return (
            <div className={'container-contact'} id={'contact'}>
                <div className={'header-contact'}>
                    <i className="fas fa-id-card"/>CONTACT
                </div>
                <div className={'container-contact-info'}>
                    <ul>
                        <li><i className={'fas fa-map-marker-alt'}/>Malmö, SWEDEN</li>
                        <li><i className="fas fa-phone-alt"/>Phone: (+46) 766 29 98 87</li>
                        <li><i className="fas fa-envelope"/>Email: work.fatih.sayilir@gmail.com </li>
                    </ul>
                </div>
                <div className={'container-contact-form'}>
                    <form onSubmit={this.handleSubmit}>
                        <div className={'contact-form-left'}>
                            <div className={'contact-form-group'}>
                                <input type={'text'} id={'name'}
                                       value={this.state.name}
                                       onChange={this.handleChange}
                                       placeholder={'Name'}
                                       required
                                />
                            </div>
                            <div className={'contact-form-group'}>
                                <input type={'email'} id={'email'}
                                       value={this.state.email}
                                       onChange={this.handleChange}
                                       placeholder={'Email'}
                                       required
                                />
                            </div>
                            <div className={'contact-form-group'}>
                                <input type={'text'} id={'subject'}
                                       value={this.state.subject}
                                       onChange={this.handleChange}
                                       placeholder={'Subject'}
                                       required
                                />
                            </div>
                        </div>
                        <div className={'contact-form-right'}>
                            <div className={'contact-form-group'}>
                            <textarea id={'message'}
                                      value={this.state.message}
                                      onChange={this.handleChange}
                                      placeholder={'Message'}
                                      required
                            />
                            </div>
                            <div className={'contact-form-group'} style={{float:'right'}}>
                                <button type={'submit'} className={'btn-button'}>
                                    <i className={'fas fa-paper-plane'}/>Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                    {this.state.emailResult.length>0 &&<Alert text={this.state.emailResult}/>}
                </div>
            </div>
        );
    }
}

export default Contact;
