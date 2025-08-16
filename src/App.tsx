import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { TreningstiderPage } from './pages/TreningstiderPage';
import { ThemeToggle } from '@/components/ThemeToggle';
import { HomePage } from '@/pages/HomePage/HomePage';
import { NyIKlubbenPage } from './pages/NyIKlubbenPage';
import { SkagerakSwimPage } from './pages/SkagerakSwimPage';
import { SponsorPage } from './pages/SponsorPage';
import { KursPage } from './pages/KursPage';
import { SearchResults } from './pages/SearchResults';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/treningstider" element={<TreningstiderPage />} />
            <Route path="/ny-i-klubben" element={<NyIKlubbenPage />} />
            <Route path="/skagerak-swim" element={<SkagerakSwimPage />} />
            <Route path="/sponsorer" element={<SponsorPage />} />
            <Route path="/kurs" element={<KursPage />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </main>

        <Footer />
        {/* Theme Toggle flytende nede til høyre */}
        <div className="fixed bottom-4 right-4 z-50">
          <ThemeToggle />
        </div>
      </div>
    </BrowserRouter>
  );
}
