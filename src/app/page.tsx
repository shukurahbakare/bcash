import React from 'react'
import HomeComponent from '@/components/modules/home'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "BCash App", 
  description: "Home",
};

const HomePage = () => {
  return (
    <div><HomeComponent /></div>
  )
}

export default HomePage