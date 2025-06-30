import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                JUST DO IT
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                The future of sport is here. Shop the latest innovations in performance and style.
              </p>
              <div className="flex space-x-4">
                <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Shop
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative h-[600px]">
              <Image
                src="https://placehold.co/800x600/000000/FFFFFF/png?text=Nike+Air+Max"
                alt="Nike Air Max"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">FEATURED PRODUCTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="relative h-[400px] mb-4 overflow-hidden">
                <Image
                  src="https://placehold.co/400x400/000000/FFFFFF/png?text=Air+Force+1"
                  alt="Nike Air Force 1"
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nike Air Force 1</h3>
              <p className="text-gray-600 mb-2">Men's Shoes</p>
              <p className="font-semibold">$100</p>
            </div>
            <div className="group">
              <div className="relative h-[400px] mb-4 overflow-hidden">
                <Image
                  src="https://placehold.co/400x400/000000/FFFFFF/png?text=Dunk+Low"
                  alt="Nike Dunk Low"
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nike Dunk Low</h3>
              <p className="text-gray-600 mb-2">Women's Shoes</p>
              <p className="font-semibold">$110</p>
            </div>
            <div className="group">
              <div className="relative h-[400px] mb-4 overflow-hidden">
                <Image
                  src="https://placehold.co/400x400/000000/FFFFFF/png?text=Air+Max"
                  alt="Nike Air Max"
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nike Air Max</h3>
              <p className="text-gray-600 mb-2">Men's Shoes</p>
              <p className="font-semibold">$150</p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">BECOME A MEMBER</h2>
            <p className="text-xl mb-8 text-gray-600">Sign up for free. Join the community.</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                Join Us
              </button>
              <button className="border-2 border-black text-black px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-colors">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px]">
              <Image
                src="https://placehold.co/800x600/000000/FFFFFF/png?text=Sustainability"
                alt="Sustainability"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">MOVE TO ZERO</h2>
              <p className="text-xl mb-8 text-gray-600">
                Nike's journey toward zero carbon and zero waste to help protect the future of sport.
              </p>
              <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 