const Rightbox = () => {
  return (
    <div className="relative flex flex-col bg-white p-4 rounded-lg w-1/4 text-md shadow-lg">
      <input
        type="text"
        placeholder="Email address or Phone number"
        className="px-4 h-12 my-2 border border-1 border-gray-200 rounded-md outline-blue-500"
      />
      <input
        type="password"
        placeholder="Password"
        className="px-4 h-12 my-2 border border-1 border-gray-200 rounded-md outline-blue-500"
      />
      <button className="px-3 h-12 my-2 bg-blue-600 rounded-md text-white font-bold text-xl hover:bg-blue-700">
        Log In
      </button>
      <span className="my-2 text-center text-blue-900 cursor-pointer hover:underline">
        Forgotten password?
      </span>
      <hr className="my-2" />
      <button className="px-3 h-12 my-2 w-fit mx-auto bg-green-600 hover:bg-green-700 rounded-md text-white font-bold text-xl">
        Create new account
      </button>
      <span className="absolute -bottom-10 text-sm"><span className="font-bold hover:cursor-pointer">Create a page</span> for a celebrity,brand or business.</span>
    </div>
  );
};

export default Rightbox;
