function Search() {
  return (
    <div className="w-full px-4 pb-8 max-[630px]:px-3 max-[630px]:pb-6">
      <div className="w-full bg-white rounded-3xl shadow-2xl px-5 py-4 sm:px-6 sm:py-5">
        <div className="flex items-center gap-3 sm:gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 sm:w-8 sm:h-8 text-icon-text shrink-0"
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
            type="search"
            className="w-full outline-none text-text-color text-lg sm:text-[22px] font-medium placeholder:text-text-color max-[600px]:text-base max-[600px]:font-normal"
            placeholder="What are you craving for today?"
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
