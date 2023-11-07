import WorkPage from '@/components/templates/WorkPage';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work | Parham',
  description: 'see what i have up to :)',
};
export default function Work() {
  return (
    <div>
      <WorkPage />
    </div>
  );
}
