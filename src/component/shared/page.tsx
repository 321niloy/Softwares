import Link from "next/link";

const Signin = () => {
  return (
    <div className="ml-4 flex justify-center sm:ml-0"> {/* Center the button on smaller screens */}
      <Link
        href="/signup"
        className="px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 font-extrabold text-base sm:text-sm" // Use different text sizes for small screens
      >
        লগিন/সাইনআপ
      </Link>
    </div>
  );
};

export default Signin;
