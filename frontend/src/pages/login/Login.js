import { useEffect, useState } from "react";
import { Eye, EyeOff, RefreshCw } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);

    const isValid = newFormData.email && newFormData.password;
    setIsFormValid(isValid);

    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    setIsLoading(true);
    setError("");


    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/login`, {
        username: formData.email,
      });

      console.log('Login successful:', response.data);

      if (response.data.length > 0) {
        navigate('/');
      } else {
        setError("Username is incorrect. Please check your login ID.");
      }

    } catch (error) {
      console.error('Login failed:', error);

      // Handle different error scenarios
      if (error.response?.status === 401) {
        setError("Invalid credentials. Please check your email and password.");
      } else if (error.response?.status === 500) {
        setError("Server error. Please try again later.");
      } else {
        setError("Login failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full flex">
        {/* Left Section */}
        <div className="flex-1 p-12 flex flex-col justify-center">
          <div className="flex items-center mb-5">
            <img
              src="https://www.eplglobal.com/wp-content/uploads/2024/06/main_logo.svg"
              alt="EPL India"
              className="w-20 h-auto rounded-lg mr-5"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#0a2f6f] to-[#9ac943] bg-clip-text text-transparent">
              EPL India
            </span>
          </div>

          {/* Welcome Text */}
          <div className="mb-8">
            <h1 className="text-xl font-bold mb-2" style={{ color: "#0a2f6f" }}>
              Welcome Back
            </h1>
            <p className="text-gray-500 text-sm">
              Welcome Back, Please enter your details
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}

            {/* Email Field */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Login ID
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full text-sm px-2 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your login Id"
                  required
                  disabled={isLoading}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Password Field */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full text-sm px-2 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all pr-12"
                  placeholder="Enter your password"
                  required
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={!isFormValid || isLoading}
              className={`w-full py-3 rounded-xl font-semibold text-white transition-all transform hover:scale-105 flex items-center justify-center ${isFormValid && !isLoading
                  ? "bg-blue-600 hover:bg-blue-700 shadow-lg"
                  : "bg-gray-300 cursor-not-allowed"
                }`}
              style={{ backgroundColor: isFormValid && !isLoading ? "#0a2f6f" : undefined }}
            >
              {isLoading ? (
                <>
                  <RefreshCw size={20} className="animate-spin mr-2" />
                  Logging in...
                </>
              ) : (
                "Continue"
              )}
            </button>
          </form>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center p-12">
          <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl shadow-2xl flex items-center justify-center transform rotate-12 hover:rotate-6 transition-transform duration-500">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#7ac943" }}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}