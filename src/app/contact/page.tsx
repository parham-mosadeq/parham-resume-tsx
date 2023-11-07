import ContactPage from '@/components/templates/ContactPage';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Parham',
  description:
    'contact me the way you like, and l will reach out to you as soon as possible',
};

export default function Contact() {
  return (
    <section>
      <ContactPage />
    </section>
  );
}
