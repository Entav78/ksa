import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { TreningstiderPage } from './pages/TreningstiderPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 p-4">
          <Routes>
            <Route
              path="/"
              element={
                <h1 className="text-3xl font-bold">Velkommen til KSA</h1>
              }
            />
            <Route path="/treningstider" element={<TreningstiderPage />} />
            {/* Add more routes here */}
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
