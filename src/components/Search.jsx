// import { IoSearch } from "react-icons/io5";

function Search() {
  return (
    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full px-4 z-20">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center bg-white rounded-xl shadow-lg px-4 py-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 text-icon-text mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <input
            type="text"
            className="w-full outline-none text-text-color text-2xl font-medium placeholder:text-text-color max-[600px]:text-[16px] leading-8.5 max-[600px]:font-normal max-[600]:leading-[140%] tracking-[-2%]"
            placeholder="What are you craving for today?"
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
