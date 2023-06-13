import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TicketManagement from './pages/TicketManagement';
import TicketReconciliation from './pages/TicketReconciliation';
import Setting from './pages/Setting';

function App() {
  return (
    <Router>
      <div className="w-full h-screen bg-[#E5E5E5]">
        <div className="flex h-screen ">
          <Sidebar />
          <div className="flex w-full justify-between flex-col">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/TicketManagement" element={<TicketManagement />} />
              <Route
                path="/TicketReconciliation"
                element={<TicketReconciliation />}
              />
              <Route path="/Setting" element={<Setting />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
