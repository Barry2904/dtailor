// This is a hard coded design

'use client';
import toast, { Toaster } from 'react-hot-toast';


const CodeBlock= () => {
  const copyToClipboard = () => {
    const code = `fetch('https://api.ourplatform.com/v1/data')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error('Error fetching data:', error));`;
    navigator.clipboard.writeText(code);
    toast.success('Copied!', {
      duration: 4000,
      position: 'top-right',
      style: {
        background: '#333',
        color: '#fff',
      },
    });
    toast.success('Code copied to clipboard!');
    // alert('Code copied to clipboard!');
  };

  return (
    <div className="relative bg-black text-white text-sm font-mono p-4 rounded-lg">
      <Toaster /> 
      <button 
        onClick={copyToClipboard} 
        className="absolute top-2 right-2 bg-gray-800 hover:bg-gray-600 text-white font-medium py-1 px-3 rounded-md">
        Copy
      </button>
      <pre>
        <code className="font-sans rounded-md">
{`fetch('https://api.ourplatform.com/v1/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));`}
        </code>
      </pre>
    </div>
  );
};

const InfoSection = () => {
  const exportToPDF = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg relative">
      <button 
        onClick={exportToPDF} 
        className="absolute top-4 right-4 flex items-center bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-3 rounded-md shadow">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
        Export to PDF
      </button>
      <h1 className="text-4xl font-extrabold text-blue-800 mb-4">Sub-heading 1.1</h1>
      <p className="text-lg text-gray-700 mb-6">
        Discover the key benefits and features of our services below.
      </p>

      <ul className="list-disc list-inside space-y-3">
        <li className="text-lg font-medium text-blue-700">User-friendly Interface</li>
        <li className="text-lg font-medium text-blue-700">High Performance</li>
        <li className="text-lg font-medium text-blue-700">24/7 Customer Support</li>
        <li className="text-lg font-medium text-blue-700">Advanced Security Features</li>
      </ul>

      <div className="mt-8 p-6 bg-white rounded-lg shadow-md border border-blue-200">
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">Why Choose Us?</h2>
        <p className="text-md text-gray-600 leading-relaxed mb-4">
          Our platform is designed to cater to your needs, offering seamless integration, scalability, and robust performance. Join thousands of satisfied customers who trust our services.
        </p>
        <p className="text-md text-gray-600 leading-relaxed">
          Below is an example of how to get started with our API:
        </p>
        <br />
        <CodeBlock />
      </div>
    </div>
  );
};

export default InfoSection;


  
  
  