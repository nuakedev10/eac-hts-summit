import { Route, Routes } from 'react-router-dom';
import App from './App';
import { PartnersPage } from './pages/PartnersPage';
import { SideEventsPage } from './pages/SideEventsPage';

export function RoutedApp() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/index.html" element={<App />} />
      <Route path="/side-events" element={<SideEventsPage />} />
      <Route path="/partners" element={<PartnersPage />} />
      <Route path="*" element={<App />} />
    </Routes>
  );
}