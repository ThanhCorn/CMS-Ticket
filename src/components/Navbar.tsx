import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <div className="flex mx-auto w-full justify-between h-[50] mt-5 mb-5 ">
      <div className="h-[50px] w-[50%] bg-[#EDE6E6]">
        <div className="flex space-x-0 ">
          <SearchBar placeholder="search" />
        </div>
      </div>
      <div className=" flex items-center justify-center mr-10">
        <FontAwesomeIcon icon={faEnvelope} size="xl" className="icon-navbar" />
        <FontAwesomeIcon icon={faBell} size="xl" className="icon-navbar" />
        <img
          src="https://lh3.googleusercontent.com/ogw/AOLn63HJtqLcVkGQ9ON8evBrqkP47WPeT3Nae1ohqC6w=s32-c-mo"
          alt="avatar"
          className="img-navbar"
        />
      </div>
    </div>
  );
};

export default Navbar;
