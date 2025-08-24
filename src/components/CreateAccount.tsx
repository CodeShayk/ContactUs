import React, { Component } from 'react';
import './PastelForm.css';

export class CreateAccount extends Component {
    constructor(props) {
        super(props);

        // Initial form state
        this.initialFormState = {
            fullName: '',
            email: '',
            phone: '',
            subscribe: false,
            offers: false,
            message: '',
            submittedAt: null,
            status: null
        };

        this.state = {
            formState: this.initialFormState,
            errors: {},
            isSubmitting: false,
            submitSuccess: false
        };
    }

    // Handle input changes
    handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        this.setState(prevState => ({
            formState: {
                ...prevState.formState,
                [name]: type === 'checkbox' ? checked : value
            }
        }), () => {
            // Clear error when user starts typing
            if (this.state.errors[name]) {
                this.setState(prevState => ({
                    errors: {
                        ...prevState.errors,
                        [name]: ''
                    }
                }));
            }
        });
    };

    // Form validation
    validateForm = () => {
        const { formState } = this.state;
        const newErrors = {};

        if (!formState.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        }

        if (!formState.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formState.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formState.phone)) {
            newErrors.phone = 'Phone number is invalid';
        }

        return newErrors;
    };

    // Handle form submission
    handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form
        const newErrors = this.validateForm();
        if (Object.keys(newErrors).length > 0) {
            this.setState({ errors: newErrors });
            return;
        }

        // Set submitting state
        this.setState({
            isSubmitting: true,
            submitSuccess: false
        });

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Update formState with submission status
            this.setState(prevState => ({
                formState: {
                    ...prevState.formState,
                    submittedAt: new Date().toISOString(),
                    status: 'submitted'
                },
                submitSuccess: true,
                errors: {}
            }));

            // Optional: Reset form after successful submission
            // this.setState({ formState: this.initialFormState });

        } catch (error) {
            this.setState(prevState => ({
                errors: {
                    ...prevState.errors,
                    submit: 'Failed to submit form. Please try again.'
                }
            }));
        } finally {
            this.setState({ isSubmitting: false });
        }
    };

    render() {
        const { formState, errors, isSubmitting, submitSuccess } = this.state;

        return (
            <form className="form-container" onSubmit={this.handleSubmit}>
                <h2 className="form-title">Create Account</h2>
                <p className="form-subtitle">Join our community today</p>

                {submitSuccess && (
                    <div className="form-success-message" style={{
                        color: '#16a34a',
                        padding: '0.75rem',
                        backgroundColor: '#f0fff4',
                        borderRadius: '6px',
                        marginBottom: '1rem',
                        textAlign: 'center'
                    }}>
                        Form submitted successfully!
                    </div>
                )}

                {errors.submit && (
                    <div className="form-error" style={{
                        color: '#dc2626',
                        padding: '0.75rem',
                        backgroundColor: '#fff5f5',
                        borderRadius: '6px',
                        marginBottom: '1rem'
                    }}>
                        {errors.submit}
                    </div>
                )}

                <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        className={`form-input ${errors.fullName ? 'error' : ''}`}
                        placeholder="Enter your full name"
                        value={formState.fullName}
                        onChange={this.handleChange}
                    />
                    {errors.fullName && <div className="form-error">{errors.fullName}</div>}
                </div>

                <div className="form-row">
                    <div className="form-group form-col">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className={`form-input ${errors.email ? 'error' : ''}`}
                            placeholder="your@email.com"
                            value={formState.email}
                            onChange={this.handleChange}
                        />
                        {errors.email && <div className="form-error">{errors.email}</div>}
                    </div>

                    <div className="form-group form-col">
                        <label className="form-label">Phone</label>
                        <div className="form-input-group">
                            <input
                                type="tel"
                                name="phone"
                                className={`form-input ${errors.phone ? 'error' : ''}`}
                                placeholder="(123) 456-7890"
                                value={formState.phone}
                                onChange={this.handleChange}
                            />
                            <div className="form-input-group-append">US</div>
                        </div>
                        {errors.phone && <div className="form-error">{errors.phone}</div>}
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                        name="message"
                        className="form-textarea"
                        placeholder="Tell us about yourself..."
                        value={formState.message}
                        onChange={this.handleChange}
                    ></textarea>
                </div>

                <fieldset className="form-fieldset">
                    <legend className="form-legend">Preferences</legend>
                    <div className="form-group">
                        <label className="form-checkbox-label">
                            <input
                                type="checkbox"
                                name="subscribe"
                                className="form-checkbox"
                                checked={formState.subscribe}
                                onChange={this.handleChange}
                            />
                            <span>Subscribe to newsletter</span>
                        </label>

                        <label className="form-checkbox-label">
                            <input
                                type="checkbox"
                                name="offers"
                                className="form-checkbox"
                                checked={formState.offers}
                                onChange={this.handleChange}
                            />
                            <span>Receive promotional offers</span>
                        </label>
                    </div>
                </fieldset>

                <button
                    type="submit"
                    className="form-submit-btn"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Submitting...' : 'Create Account'}
                </button>

                {/* Debug display of formState (remove in production) */}
                <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f0f8ff', borderRadius: '4px' }}>
                    <h4>Form State (Debug):</h4>
                    <pre style={{ fontSize: '0.8rem', whiteSpace: 'pre-wrap' }}>
            {JSON.stringify(formState, null, 2)}
          </pre>
                </div>
            </form>
        );
    }
}

export default CreateAccount;