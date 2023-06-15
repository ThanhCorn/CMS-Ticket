import Logo from './Logo';
import { Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router';
import {
  faFileInvoice,
  faGear,
  faHouse,
  faTicket,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[20%] flex flex-col mx-10 mt-4 relative">
      <Logo />
      <div className="flex flex-col">
        <Menu
          className="w-[350px] bg-transparent"
          mode="inline"
          defaultSelectedKeys={['/']}
          onClick={(item) => navigate(item.key)}
          defaultOpenKeys={['/Setting']}
          items={[
            {
              label: 'Trang chủ',
              icon: <FontAwesomeIcon icon={faHouse} className="icon-svg" />,
              key: '/',
            },
            {
              label: 'Quản lý vé',
              icon: <FontAwesomeIcon icon={faTicket} className="icon-svg" />,
              key: '/TicketManagement',
            },
            {
              label: 'Đối soát vé',
              icon: (
                <FontAwesomeIcon icon={faFileInvoice} className="icon-svg" />
              ),
              key: '/TicketReconciliation',
            },
            {
              label: 'Cài đặt',
              icon: <FontAwesomeIcon icon={faGear} className="icon-svg" />,
              key: '/Setting/',
              children: [
                {
                  label: 'Gói dịch vụ',
                  key: '/Setting',
                },
              ],
            },
          ]}
        />
      </div>
      <div className="absolute bottom-0">
        <p>Copyright @ {new Date().getFullYear()} Alta Software</p>
      </div>
    </div>
  );
};

export default Sidebar;
