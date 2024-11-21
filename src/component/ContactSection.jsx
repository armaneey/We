import React, {useState} from 'react'

const ContactSection = () => {
      const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      message: "",
      isAgreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData,[name]: type === "checkbox" ? checked : value, });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted Successfully", formData);
  };

  return (
    <div className=" max-w- w-full mx-auto p-6 flex items-center justify-center  w-100vh h-100vh bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-lg max-w-md" >
    

        <div className="mb-6"> 
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700" >
            FULL NAME
          </label>

          <input type="text" id="fullName"name="fullName" value={formData.fullName} onChange={handleChange}
            className="mt-1 block w-full border-b border-gray-400 focus:border-black focus:ring-0 outline-none"/>
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700" >
            EMAIL ADDRESS
          </label>

          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
            className="mt-1 block w-full border-b border-gray-400 focus:border-black focus:ring-0 outline-none" />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700" >
            MESSAGE
          </label>

          <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange}
            className="mt-1 block w-full border-b border-gray-700 focus:border-black focus:ring-0 outline-none resize-none" ></textarea>
        </div>

        <div className="mb-6 flex items-start">
          <input type="checkbox"id="isAgreed" name="isAgreed" checked={formData.isAgreed} onChange={handleChange}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />

          <label htmlFor="isAgreed" className="ml-2 text-sm text-gray-600 flex-1">
            I’d like to receive more information about COM. I have read and understand the{" "}
            <a href="#"  className="text-blue-600 underline hover:text-blue-800" >
              Privacy Policy</a> . </label>
        </div>

        <button type="submit" className="w-full bg-[#003255] text-white py-3 font-bold text-lg hover:bg-[#001F3D] transition duration-300" >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
}

export default ContactSection
