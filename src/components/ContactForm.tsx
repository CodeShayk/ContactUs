
import {useState} from 'react'
import '../index.css'

const FormData = {
    name: "",
    email: "",
    phone: "",
    subscribe: false,
    offers: false,
    message: '',
};

export const ContactForm =()=>  {

    const  [formState, setFormSate]= useState(FormData);

    const HandleInputChange = (e) => {

        const { name, value } = e.target;
        setFormSate({...formState, [name] : value});
    }

    const SubmitForm=(e)=>{
      e.preventDefault();
      console.log(formState)
    }
    return (
        <form className="form-container">
            <h2 className="form-title">Contact Form</h2>

            <div className="form-group">
                <label className="form-label">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-input"
                    placeholder="Enter your name"
                    value={formState.name}
                    onChange={HandleInputChange}
                />
            </div>

            <div className="form-row">
                <div className="form-group form-col">
                    <label className="form-label">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-input error"
                        placeholder="your@email.com"
                        value={formState.email}
                        onChange={HandleInputChange}
                    />
                    <div className="form-error">Please enter a valid email</div>
                </div>

                <div className="form-group form-col">
                    <label className="form-label">Phone</label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="form-input success"
                        placeholder="(123) 456-7890"
                        value={formState.phone}
                        onChange={HandleInputChange}
                    />
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Your message..."
                    value={formState.message}
                    onChange={HandleInputChange}
                ></textarea>
            </div>

            <div className="form-group">
                <label className="form-checkbox-label">
                    <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        className="form-checkbox"
                        onChange={HandleInputChange}
                        checked={formState.offers}
                    />
                    <span>I agree to the terms</span>
                </label>
            </div>

            <button type="submit" className="form-submit-btn" onSubmit={SubmitForm}>
                Submit
            </button>
        </form>
    );
}