import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';

// Home / søk
import { HomePage } from '@/pages/Home/HomePage';
import { SearchResults } from '@/pages/SearchResults';

// Kurs
import { KursPage } from '@/pages/Courses/KursPage';

// Trening
import { TreningstiderPage } from '@/pages/Training/TreningstiderPage';
import TerminlistePage from '@/pages/Training/TerminlistePage';

// Grupper, trenere, utstyr (ligger i egne mapper nå)
import GroupsPage from '@/pages/Groups/GroupsPage';
import GroupA from '@/pages/Groups/GroupA';
import GroupB from '@/pages/Groups/GroupB';
import GroupC from '@/pages/Groups/GroupC';
import GroupD from '@/pages/Groups/GroupD';
import GroupE from '@/pages/Groups/GroupE';
import GroupF from '@/pages/Groups/GroupF';
import { CoachesPage } from '@/pages/Coaches/CoachesPage';
import { EquipmentPage } from '@/pages/Equipment/EquipmentPage';

// About
import AboutPage from '@/pages/About/AboutPage';
import ValuesGoalsPage from '@/pages/About/ValuesGoalsPage';
import BoardOrgPage from '@/pages/About/BoardOrgPage';
import AnnualMeetingsPage from '@/pages/About/AnnualMeetingsPage';

// Membership
import MembershipPage from '@/pages/Membership/MembershipPage';
import { NewToClubPage } from '@/pages/Membership/NewToClubPage';
import { PricesPage } from '@/pages/Membership/PricesPage';
import { WithdrawPage } from '@/pages/Membership/WithdrawPage';

// Volunteers
import { VolunteersPage } from '@/pages/Volunteers/VolunteersPage';

// Contact
import ContactPage from '@/pages/Contact/ContactPage';
import VenuesPage from '@/pages/Contact/VenuesPage';
import { SocialPage } from '@/pages/Contact/SocialPage';

// Legal
import PrivacyPage from '@/pages/Legal/PrivacyPage';
import CookiesPage from '@/pages/Legal/CookiesPage';

// Skagerrak
import SkagerrakPage from '@/pages/Skagerrak/SkagerrakPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-background text-text">
        <Header />
        <main className="flex-1 p-4">
          <Routes>
            {/* Forside & søk */}
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchResults />} />

            {/* Kurs */}
            <Route path="/kurs" element={<KursPage />} />

            {/* Trening */}
            <Route path="/treningstider" element={<TreningstiderPage />} />
            <Route path="/terminliste" element={<TerminlistePage />} />
            <Route path="/grupper" element={<GroupsPage />} />
            <Route path="/grupper/a" element={<GroupA />} />
            <Route path="/grupper/b" element={<GroupB />} />
            <Route path="/grupper/c" element={<GroupC />} />
            <Route path="/grupper/d" element={<GroupD />} />
            <Route path="/grupper/e" element={<GroupE />} />
            <Route path="/grupper/f" element={<GroupF />} />
            <Route path="/trenere" element={<CoachesPage />} />
            <Route path="/utstyr" element={<EquipmentPage />} />

            {/* Om klubben */}
            <Route path="/om" element={<AboutPage />} />
            <Route path="/om/verdier-mal" element={<ValuesGoalsPage />} />
            <Route path="/om/styret" element={<BoardOrgPage />} />
            <Route path="/om/arsmoter" element={<AnnualMeetingsPage />} />

            {/* Medlemskap */}
            <Route path="/medlemskap" element={<MembershipPage />} />
            <Route path="/ny-i-klubben" element={<NewToClubPage />} />
            <Route path="/medlemskap/priser" element={<PricesPage />} />
            <Route path="/medlemskap/utmelding" element={<WithdrawPage />} />

            {/* Dugnad */}
            <Route path="/dugnad" element={<VolunteersPage />} />

            {/* Kontakt */}
            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="/kontakt/steder" element={<VenuesPage />} />
            <Route path="/sosiale-medier" element={<SocialPage />} />

            {/* Juridisk */}
            <Route path="/personvern" element={<PrivacyPage />} />
            <Route path="/cookies" element={<CookiesPage />} />

            {/* Skagerrak */}
            <Route path="/skagerrak-swim" element={<SkagerrakPage />} />
          </Routes>
        </main>

        <Footer />
        <div className="fixed bottom-4 right-4 z-50">
          <ThemeToggle />
        </div>
      </div>
    </BrowserRouter>
  );
}
