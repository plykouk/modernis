import { Card, CardContent } from '@/components/ui/Card';
import Image from 'next/image';

const SocialProof = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Chelsea, London',
      text: 'Modernis transformed our kitchen beyond our wildest dreams. The German engineering and attention to detail is evident in every cabinet door and drawer.',
      image: '/images/testimonials/sarah.jpg',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Canary Wharf, London',
      text: 'The precision and quality of our German kitchen is outstanding. Three years later, it still looks and functions like new.',
      image: '/images/testimonials/michael.jpg',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emma Thompson',
      location: 'Richmond, London',
      text: 'From consultation to installation, the team was professional and the result exceeded expectations. True German craftsmanship.',
      image: '/images/testimonials/emma.jpg',
      rating: 5,
    },
  ];

  const trustBadges = [
    {
      name: 'German Quality Certified',
      image: '/images/badges/german-quality.svg',
    },
    {
      name: 'BBB A+ Rating',
      image: '/images/badges/bbb-rating.svg',
    },
    {
      name: 'NKBA Member',
      image: '/images/badges/nkba.svg',
    },
    {
      name: '15 Year Warranty',
      image: '/images/badges/warranty.svg',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl text-primary-900 mb-8 max-w-4xl mx-auto leading-tight">
            Trusted by Homeowners Across London
          </h2>
          <p className="text-xl md:text-2xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            See why our customers choose German precision for their dream kitchens
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-primary-700 mb-6">
                  "{testimonial.text}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-primary-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-primary-600">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-900 mb-2">50+</div>
            <div className="text-primary-600">Kitchens Designed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-900 mb-2">15+</div>
            <div className="text-primary-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-900 mb-2">100%</div>
            <div className="text-primary-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-900 mb-2">24/7</div>
            <div className="text-primary-600">Customer Support</div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {trustBadges.map((badge) => (
            <div key={badge.name} className="flex flex-col items-center text-center">
              <div className="relative w-16 h-16 mb-2">
                <Image
                  src={badge.image}
                  alt={badge.name}
                  fill
                  className="object-contain"
                  sizes="64px"
                />
              </div>
              <span className="text-sm text-primary-600">{badge.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;