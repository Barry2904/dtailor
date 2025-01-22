// const feedback = () => {
//     return (
//         <h1>Feed Back Form fill be here soon</h1>
//     )
// }

// export default feedback;

'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';

interface FormData {
  name: string;
  email: string;
  mobile: string;
  category: string;
  description: string;
}

const FeedbackForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    mobile: '',
    category: '',
    description: ''
  });

  const categoryOptions = [
    'Technical Issue',
    'Account Support',
    'Billing Question',
    'Feature Request',
    'General Inquiry'
  ];

  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   // Here you would typically send the data to your backend
  //   console.log('Form submitted:', formData);
  //   toast.success('Feedback submitted successfully!', {
  //     duration: 4000,
  //     position: 'top-right',
  //     style: {
  //       background: '#333',
  //       color: '#fff',
  //     },
  //   });
  //   // Reset form
  //   setFormData({
  //     name: '',
  //     email: '',
  //     mobile: '',
  //     category: '',
  //     description: ''
  //   });
  // };

  // send formData to the B/E to send email to the user and the admin
  // the backend is in the pages folder outside app directory
  
  // ├── dtailor/
  // │   ├── app/
  // │   │   ├── feedback_form/
  // │   │   │   ├── page.tsx    <-- The feedback form frontend
  // │   │   │
  // │   ├── pages/
  // │       ├── api/
  // │           ├── submitFeedback.ts  <-- The backend API logic


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      // Send form data to the backend API route
      const response = await fetch('/api/submitFeedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (data.success) {
        console.log('Form submitted:', formData);
        toast.success('Feedback submitted successfully!', {
          duration: 4000,
          position: 'top-right',
          style: {
            background: '#333',
            color: '#fff',
          },
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          mobile: '',
          category: '',
          description: ''
        });
      } else {
        toast.error('There was an error submitting your feedback. Please try again.', {
          duration: 4000,
          position: 'top-right',
          style: {
            background: '#f44336',
            color: '#fff',
          },
        });
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.', {
        duration: 4000,
        position: 'top-right',
        style: {
          background: '#f44336',
          color: '#fff',
        },
      });
    }
  };
  

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg relative">
      <Toaster />
      <h1 className="text-4xl font-extrabold text-blue-800 mb-4">Feedback Form</h1>
      <p className="text-lg text-gray-700 mb-6">
        We value your feedback. Please fill out the form below to help us improve our services.
      </p>

      <div className="mt-8 p-6 bg-white rounded-lg shadow-md border border-blue-200">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your mobile number"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option value="">Select a category</option>
              {categoryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description of the Problem
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Please describe your issue or feedback"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-md shadow flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;