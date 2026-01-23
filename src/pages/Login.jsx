import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8">

        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Sign In
        </h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="button"
            className="w-full bg-blue-700 text-white py-2 rounded font-semibold hover:bg-blue-800"
            onClick={() => navigate("/")}
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?
          <button
            onClick={() => navigate("/signup")}
            className="text-blue-700 font-semibold ml-1 hover:underline"
          >
            Sign Up
          </button>
        </p>

        <button
          onClick={() => navigate("/")}
          className="block mx-auto mt-6 text-sm text-gray-500 hover:underline"
        >
          ← Back to Home
        </button>

      </div>
    </div>
  );
};

export default Login;
