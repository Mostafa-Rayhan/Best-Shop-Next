import React from 'react'
import Banner from "@/components/Banner";
import { groq } from "next-sanity";
import { client } from '../../../sanity/lib/client';
import NewArrival from '@/components/NewArrival';


export const revalidate = 10;
const bannerQuery = groq`*[_type == 'banner']{
  image,
  _id
} | order(_createdAt asc)`;

const newArrivalQuery = groq`*[_type == 'product' && position == 'New Arrivals']{
  ...
  } | order(_createdAt asc)`;


const HomePage = async () => {
  const banners = await client.fetch(bannerQuery);
  const newArrivalProducts = await client.fetch(newArrivalQuery);
  return (
    <main className="text-sm overflow-hidden min-h-screen">
      <Banner banners={banners} />
      <NewArrival products={newArrivalProducts} />
    </main>
   
  )
}

export default HomePage