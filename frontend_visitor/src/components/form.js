import React, { Component } from 'react';
import './form.css'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            fullName: '',
            contactInfo: '',
            contactType: '',
            email: '',
            feedback: '',

        }
    }

    handleFullNameChange = (event) => {
        this.setState({
            fullName: event.target.value
        })
    }

    handleContactInfoChange = (event) => {
        this.setState({
            contactInfo: event.target.value
        })
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleFeedbackChange = (event) => {
        this.setState({
            feedback: event.target.value
        })
    }

    handleContactTypeChange = (event) => {
        this.setState({
            contactType: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`Contacts submitted successfully! An email containing the details will be sent to you shortly.`)
        event.preventDefault()
    }

    render() {
        const { fullName, contactInfo, contactType, email, feedback } = this.state
        return (
            <form onSubmit={this.handleSubmit} className='form'>

                <div className = 'header'>Contact Form</div>

                <div className ='fullName'>
                    <label>Full Name* </label>
                    <input
                        type='text'
                        value={fullName}
                        onChange={this.handleFullNameChange}
                    />
                </div>
                

                <div className='contactInfo'>
                    <label>Mobile No/Telegram ID*</label>
                    <input
                        type='text'
                        value={contactInfo}
                        onChange={this.handleContactInfoChange}
                        pattern = "[a-zA-Z][a-zA-Z0-9]{4,31}|[8-9]{1}[0-9]{7}"
                    />
                </div>

                <div className='contactType'>
                    <label>Preferred Contact Type</label>
                    <select value={contactType} onChange={this.handleContactTypeChange}>
                        <option value='whatsapp'>Whatsapp</option>
                        <option value='telegram'>Telegram</option>
                    </select>
                </div>

                <div>
                    <label className='email'>Email*</label>
                    <input
                        type='email'
                        placeholder='(Meetup details will be sent to this email)'
                        value={email}
                        onChange={this.handleEmailChange}
                    />
                </div>

                <div className='feedback'>
                    <label>Feedback</label>
                    <textarea
                        value={feedback}
                        onChange={this.handleFeedbackChange}
                        placeholder = '(Optional)'
                    />
                </div>

                <button type='submit'>Submit</button>
            </form>
        );
    };
};

export default Form;
