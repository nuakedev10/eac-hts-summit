import { Route, Routes } from 'react-router-dom';
import App from './App';
import { PartnersPage } from './pages/PartnersPage';
import { SideEventsPage } from './pages/SideEventsPage';
import DemoVillagePage from './pages/demovillage';
import StartupAwards from './pages/startupaward';
import RegisterPage from './pages/register';

export function RoutedApp() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/index.html" element={<App />} />
      <Route path="/side-events" element={<SideEventsPage />} />
      <Route path="/partners" element={<PartnersPage />} />
      <Route path="/demo-village" element={<DemoVillagePage />} />
      <Route path="/startup-awards" element={<StartupAwards />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<App />} />
    </Routes>
  );
}