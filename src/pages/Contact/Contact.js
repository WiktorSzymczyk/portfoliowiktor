import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  // State to track the form inputs
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // State for the success/error message and loading state
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  // EmailJS function to send email
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);  // Set loading to true when the email is being sent

    // Replace these with your actual keys from EmailJS
    const serviceID = 'service_1rl2zzq';
    const templateID = 'template_lf11s6z';
    const userID = 'tA3tCOhihnrbnmp4b';

    const templateParams = {
      email,
      subject,
      message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('Message sent successfully:', response);
        setStatus('Message sent successfully!');
        setLoading(false);  // Stop loading
        setEmail('');  // Reset the form fields
        setSubject('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Failed to send message:', error);
        setStatus('Failed to send message. Please try again later.');
        setLoading(false);  // Stop loading in case of error
      });
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Me</h2>
        <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Reach out to me with any queries!</p>
        <form onSubmit={sendEmail} className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="johndoe@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
  type="submit"
  className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  disabled={loading}
>
  {loading ? 'Sending...' : 'Send message'}
</button>

        </form>
        {status && <p className="mt-4 text-center text-gray-500 dark:text-gray-400">{status}</p>}
      </div>
    </section>
  );
}

export default Contact;
