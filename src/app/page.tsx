import HomePage from '@/components/templates/HomePage';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Parham',
  description: 'home page of my portfolio',
};

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
