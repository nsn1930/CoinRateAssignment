import email from '../assets/email-footer.svg';

function Contact() {
    return (
        <div className="contact">
            <h1>Contact</h1>
            <div className="contactMail">
                <img className='email' src={email} alt="email" />
                <a href=".">hi@ratepunk.com</a>
            </div>
        </div>
    )
}
export default Contact;