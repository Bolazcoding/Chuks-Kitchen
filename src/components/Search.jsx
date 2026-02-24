// import { IoSearch } from "react-icons/io5";

function Search() {
  return (
    <div class="absolute -bottom-27.5 left-1/2 -translate-x-1/2 w-full px-4 z-20">
      <div class="max-w-3xl mx-auto">
        <div class="flex items-center bg-white rounded-xl shadow-lg px-4 py-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 text-icon-text mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <input
            type="text"
            class="w-full outline-none text-text-color text-2xl leading-8.5 font-medium placeholder:text-text-color"
            placeholder="What are you craving for today?"
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
