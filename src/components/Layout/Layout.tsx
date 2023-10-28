import Navbar from './Navbar';
import Footer from './Footer';
import { ComponentsChildren } from '@/types/types';
export default function Layout({ children }: ComponentsChildren) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
