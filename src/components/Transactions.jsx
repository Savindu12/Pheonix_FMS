import React from "react";

import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Our People',
    description:
      'We offer a wide range of professional services to our people and we assure that our clients receive the best experience.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Our Communities',
    description:
      'Our community consists of a group of well trained, experienced aviators and we provide the opportunity to grow and rise together.',
    icon: AnnotationIcon,
  },
  {
    name: 'Our features',
    description:
      'We have developed numerous features to improve cost-efficiency and optimize your operations.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Our Rates',
    description:
      'We offer the most reasonable and affordable rates. Plan your holiday with our latest travel deals and promotions.',
      icon: ScaleIcon,
  },
]

export default function Example() {
  return (
    <div className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-7xl text-amber-500 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-5 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to Identify Pheonix
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Phoenix Airline System is a web application with a small online flight booking system. Processes such as user management, flight management
          </p>
        </div>

        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-indigo">
                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}