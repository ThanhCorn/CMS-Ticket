import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = ({ placeholder }: { placeholder: string }) => {
  return (
    <form className="relative w-[500px]">
      <input
        type="search"
        placeholder={placeholder}
        className="h-[50px] w-[500px] pl-5 pr-10 rounded-lg bg-[#EDE6E6] "
      />
      <button type="submit" className="absolute right-0 h-[48px] w-[48px]">
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
      </button>
    </form>
  );
};

export default SearchBar;
