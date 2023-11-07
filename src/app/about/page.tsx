import AboutPage from '@/components/templates/AboutPage';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Parham',
  description: 'get to know me better and  ',
};

export default function About() {
  return (
    <section>
      <AboutPage />
    </section>
  );
}
