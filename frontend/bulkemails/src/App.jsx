// EmailForm.js

import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const EmailForm = () => {
  console.log("chcek2");
  const [formData, setFormData] = useState({
    from: '',
    message: '',
    subject: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };
console.log(formData,"formData");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("check1");
      const { from, message, subject, file } = formData;
      const formDataToSend = new FormData();
      formDataToSend.append('from', from);
      formDataToSend.append('message', message);
      formDataToSend.append('subject', subject);
      formDataToSend.append('file', file);

      // Send POST request to Node.js backend API
const  res =    await axios.post('http://65.0.105.87:5001/api/v1/sendemails', formDataToSend);
console.log(res,"res");
      alert('Email sent successfully!');
      // Clear form fields after successful submission
      setFormData({ from: '', message: '', subject: '', file: null });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again later.');
    }
  };

  return (
    <div className="email-form">
      <h2>Send Email</h2>
      <form action="/upload" method='POST' encType='multipart/form-data' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="from">From:</label>
          <input
            type="email"
            id="from"
            name="from"
            value={formData.from}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="file">Attach File:</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default EmailForm;
