import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <Outlet />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default MainLayout;