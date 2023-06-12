import {
  faEnvelope,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  return (
    <div className="flex mx-auto w-full">
      <div className="h-[50px] w-[100%] bg-[#EDE6E6]">
        <form className=" relative flex space-x-0 bg-[#EDE6E6] border-r-12">
          <input
            type="search"
            placeholder="search"
            className="h-[50px] w-[500px] rounded-md pl-5 pr-10"
          />
          <button type="submit" className="absolute right-0 h-[48px] w-[48px]">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          </button>
        </form>
      </div>
      <div className="">
        <FontAwesomeIcon icon={faEnvelope} size="lg" className="icon-svg" />
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
      </div>
    </div>
  );
};

export default Navbar;
