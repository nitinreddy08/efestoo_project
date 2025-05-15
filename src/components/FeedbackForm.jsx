import React from 'react';

const FeedbackForm = () => {
  return (
    <div className="py-14 bg-gray-100">
      <div className="max-w-4xl mx-auto border-2 border-blue-500 rounded-lg p-6 bg-white">
        {/* Title */}
        <div className=" mb-4">
          <h2 className="text-2xl font-bold text-gray-800">
            We appreciate your feedback!
          </h2>
          
        </div>

        {/* Subtitle */}
        <div className='flex justify-between items-center mb-4'>
        <p className="text-sm text-gray-600 mb-4">
          Share your thoughts on the event and help us deliver better.
        </p>
        {/* Star Rating */}
        <div className="flex">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className="w-7 h-7 text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
        

        {/* Textarea */}
        <textarea
          className="w-full h-24 border border-gray-300 rounded-lg p-3 text-gray-700 resize-none"
          placeholder=""
        ></textarea>

        {/* Submit Button */}
        <div className="flex justify-end mt-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Submit my feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;