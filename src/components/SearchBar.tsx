import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { filterSearchValue } from '../features/ticketsSlice';
import { TicKetType } from '../@types/myTypes';
import { useState } from 'react';

interface ISearch {
  placeholder: string;
  handleSearch?: (value: string) => void;
}

const SearchBar = ({ placeholder, handleSearch }: ISearch) => {
  const [filteredTickets, setFilteredTickets] = useState<TicKetType[]>([]);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (handleSearch) {
      handleSearch(event.target.value);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchValue = event.currentTarget.search.value;
    dispatch(filterSearchValue(searchValue));
    setFilteredTickets(filteredTickets);
    console.log(filteredTickets);
    event.currentTarget.reset();
  };

  return (
    <form className="relative w-[500px]" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder={placeholder}
        className="h-[50px] w-[500px] pl-5 pr-10 rounded-lg bg-[#EDE6E6]"
        onChange={handleChange}
        name="search" // Add this line
      />
      <button type="submit" className="absolute right-0 h-[48px] w-[48px]">
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
      </button>
    </form>
  );
};

export default SearchBar;
