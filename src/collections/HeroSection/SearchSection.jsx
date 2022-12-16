import { SearchBar } from '../../components/SearchBar';

export const SearchSection = () => {
  return (
    <div>
      <p className='text-xl mt-3 lg:mt-[-40px]'>Please enter your code to redeem your NFT</p>
      <div className='w-[70%] mx-auto my-12'>
        <SearchBar />
      </div>
    </div>
  );
};
