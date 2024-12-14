'use client'
import HeroBanner  from '@/app/Components/home/HeroBanner';
import Departments from './Components/home/Departments';
import Products from './Components/home/Products';
import AboutUs from './Components/home/AboutUs';
import ContactForm from './Components/home/ContactForm';
import Footer from './Components/Common/Footer';

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Departments/>
      <AboutUs/>
      <Products/>
      <ContactForm/>
      <Footer/>
    </main>
  );
}