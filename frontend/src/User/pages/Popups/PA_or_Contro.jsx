import React, { useState, useEffect } from 'react';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');

  // Open popup when the page loads
  useEffect(() => {
    setIsOpen(true);
  }, []);

  // Handle form submission
  const handleNextClick = () => {
    if (selectedRole === 'contributor') {
      window.location.href = 'https://forms.gle/7RPb5ZbnZubJZTCN7';
    } else if (selectedRole === 'admin') {
      window.location.href = 'https://forms.gle/FMGP7c4KkBY9bdQb6';
    } else {
      alert('Please select a role!');
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-10 rounded-lg w-2/3 shadow-xl max-w-4xl">
            <h2 className="text-2xl font-bold mb-6 text-center">READY TO REGISTER !</h2>
            <p className="mb-8 text-lg text-center">What role are you? We want to tailor your experience.</p>
            
            <div className="grid grid-cols-2 gap-6">
              {/* Contributor Option */}
              <div
                className={`border-2 rounded-lg p-6 flex flex-col items-center justify-center bg-cover bg-center text-center cursor-pointer hover:shadow-lg transition-all ${selectedRole === 'contributor' ? 'border-green-500' : 'border-transparent'}`}
                style={{
                  backgroundImage: 'url("https://openedx.org/wp-content/uploads/2018/12/contribute@2x.png")',
                  height: '200px',
                  backgroundSize: 'cover',
                  color: 'white',
                }}
                onClick={() => setSelectedRole('contributor')}
              >
                <input
                  type="radio"
                  name="role"
                  id="contributor"
                  value="contributor"
                  className="hidden"
                />
                <label htmlFor="contributor" className="cursor-pointer text-black font-bold text-lg">
                  Contributor
                </label>
              </div>

              {/* Project Admin Option */}
              <div
                className={`border-2 rounded-lg p-6 flex flex-col items-center justify-center bg-cover bg-center text-center cursor-pointer hover:shadow-lg transition-all ${selectedRole === 'admin' ? 'border-green-500' : 'border-transparent'}`}
                style={{
                  backgroundImage: 'url("https://cdn.dribbble.com/users/1946759/screenshots/4596801/admin.png")',
                  height: '200px',
                  backgroundSize: 'cover',
                  color: 'white',
                }}
                onClick={() => setSelectedRole('admin')}
              >
                <input
                  type="radio"
                  name="role"
                  id="admin"
                  value="admin"
                  className="hidden"
                />
                <label htmlFor="admin" className="cursor-pointer text-black font-bold text-lg">
                  Project Admin
                </label>
              </div>
            </div>
            
            {/* Centered Next Button */}
            <div className="flex justify-center mt-8">
              <button
                className="bg-green-500 text-white py-3 px-8 rounded-full hover:bg-green-600 transition duration-300"
                onClick={handleNextClick}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
