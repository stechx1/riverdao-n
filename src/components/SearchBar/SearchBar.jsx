/* eslint-disable @next/next/no-img-element */
export const SearchBar = () => {
  return (
    // <div className='pt-2  mx-auto text-gray-600'>
    //   <input
    //     className='relative border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none'
    //     type='search'
    //     name='search'
    //     placeholder='Search'
    //   />
    //   <button type='submit' className='absolute right-0 top-0 mt-5 mr-4'>
    //     <img src='/icons/search-icon.svg' alt='search-icon' />
    //   </button>
    // </div>
    <form>
      <label for='simple-search' className='sr-only'>
        Search
      </label>
      <div className='relative w-full'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <svg
            aria-hidden='true'
            className='w-5 h-5 text-gray-500'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
              clip-rule='evenodd'
            ></path>
          </svg>
        </div>
        <input
          type='text'
          id='simple-search'
          className='border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-4'
          required
        />
      </div>
    </form>
  );
};
