'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import Image from 'next/image';

const GalleryShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Modern Minimalist Kitchen',
      location: 'Chelsea, London',
      style: 'Contemporary',
      image: '/images/gallery/kitchen-1.jpg',
      description: 'Clean lines and premium German cabinetry create a sophisticated cooking space.',
    },
    {
      id: 2,
      title: 'Traditional German Kitchen',
      location: 'Richmond, London',
      style: 'Traditional',
      image: '/images/gallery/kitchen-2.jpg',
      description: 'Classic German craftsmanship meets timeless design elements.',
    },
    {
      id: 3,
      title: 'Industrial Style Kitchen',
      location: 'Shoreditch, London',
      style: 'Industrial',
      image: '/images/gallery/kitchen-3.jpg',
      description: 'Bold industrial aesthetics with German precision engineering.',
    },
    {
      id: 4,
      title: 'Luxury Open Plan Kitchen',
      location: 'Mayfair, London',
      style: 'Luxury',
      image: '/images/gallery/kitchen-4.jpg',
      description: 'Expansive kitchen island with premium German appliances.',
    },
    {
      id: 5,
      title: 'Compact German Kitchen',
      location: 'Notting Hill, London',
      style: 'Compact',
      image: '/images/gallery/kitchen-5.jpg',
      description: 'Maximizing space efficiency without compromising on German quality.',
    },
    {
      id: 6,
      title: 'Family-Friendly Kitchen',
      location: 'Hampstead, London',
      style: 'Family',
      image: '/images/gallery/kitchen-6.jpg',
      description: 'Durable German surfaces perfect for busy family life.',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-primary-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl text-primary-900 mb-8 max-w-4xl mx-auto leading-tight">
            Our German Kitchen Gallery
          </h2>
          <p className="text-xl md:text-2xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of precision-crafted German kitchens, each designed to perfection
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group cursor-pointer overflow-hidden transition-transform hover:scale-105"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay */}
                <div 
                  className={`absolute inset-0 bg-black transition-opacity ${
                    hoveredProject === project.id ? 'bg-opacity-60' : 'bg-opacity-0'
                  }`}
                >
                  {/* Project Details Overlay */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity ${
                      hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="text-center text-white p-6">
                      <h3 className="text-xl mb-2">{project.title}</h3>
                      <p className="text-sm mb-2">{project.location}</p>
                      <p className="text-sm mb-4">{project.description}</p>
                      <Button 
                        size="sm" 
                        variant="secondary"
                        className="bg-white text-primary-900 hover:bg-primary-100"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Style Tag */}
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded-full px-3 py-1">
                  <span className="text-sm font-medium text-primary-900">{project.style}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg text-primary-900 mb-1">
                  {project.title}
                </h3>
                <p className="text-primary-600 text-sm mb-2">{project.location}</p>
                <p className="text-primary-700 text-sm">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button size="lg" className="mr-4">
            View All Projects
          </Button>
          <Button size="lg" variant="secondary">
            Request Similar Design
          </Button>
        </div>

        {/* Filter Pills (for future enhancement) */}
        <div className="flex flex-wrap justify-center gap-2 mt-8 opacity-60">
          <span className="text-sm text-primary-600">Filters:</span>
          {['All', 'Modern', 'Traditional', 'Industrial', 'Luxury', 'Compact'].map((filter) => (
            <button
              key={filter}
              className="px-3 py-1 text-sm rounded-full border border-primary-300 text-primary-600 hover:bg-primary-100 transition-colors"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryShowcase;