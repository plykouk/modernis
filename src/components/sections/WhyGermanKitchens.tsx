import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import Image from 'next/image';

const WhyGermanKitchens = () => {
  const benefits = [
    {
      title: 'Unmatched Quality',
      description: 'German engineering standards ensure every cabinet, hinge, and drawer meets the highest quality benchmarks for decades of use.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: ['Premium materials', '15-year warranty', 'Rigorous testing', 'ISO certification']
    },
    {
      title: 'Precision Engineering',
      description: 'Every component is manufactured to tolerances of 0.1mm, ensuring perfect alignment and smooth operation for life.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      features: ['0.1mm tolerances', 'Soft-close mechanisms', 'Perfect alignment', 'German hardware']
    },
    {
      title: 'Exceptional Durability',
      description: 'Built to withstand daily use for generations, German kitchens represent a lifetime investment in your home.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      features: ['Lifetime construction', 'Scratch resistance', 'Moisture protection', 'Color fastness']
    },
    {
      title: 'Innovative Design',
      description: 'German design philosophy combines functional excellence with aesthetic beauty, creating kitchens that are both stunning and practical.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: ['Cutting-edge design', 'Space optimization', 'Smart storage', 'Ergonomic layouts']
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-primary-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content Side */}
          <div>
            <h2 className="text-4xl md:text-6xl text-primary-900 mb-8 leading-tight">
              Why Choose German Kitchens?
            </h2>
            <p className="text-xl md:text-2xl text-primary-600 mb-12 leading-relaxed">
              German kitchens represent the pinnacle of design excellence, engineering precision, and manufacturing quality. 
              When you invest in a German kitchen, you're choosing a legacy of craftsmanship that spans generations.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="text-primary-900">Heritage of Excellence</h4>
                  <p className="text-primary-600">Over 100 years of German kitchen manufacturing expertise</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="text-primary-900">Environmental Responsibility</h4>
                  <p className="text-primary-600">Sustainable materials and eco-friendly manufacturing processes</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="text-primary-900">Investment Value</h4>
                  <p className="text-primary-600">German kitchens maintain their value and appeal for decades</p>
                </div>
              </div>
            </div>

            <Button size="lg">
              Learn About German Quality
            </Button>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-custom overflow-hidden">
              <Image
                src="/images/german-quality.jpg"
                alt="German Kitchen Manufacturing"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            {/* Quality Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary-900 text-white p-6 rounded-custom shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">German Made</div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                {/* Icon */}
                <div className="text-primary-600 flex justify-center mb-4">
                  {benefit.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg text-primary-900 mb-3">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-primary-600 text-sm mb-4">
                  {benefit.description}
                </p>

                {/* Features */}
                <ul className="space-y-1">
                  {benefit.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-primary-700 flex items-center justify-center">
                      <svg className="w-3 h-3 text-primary-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 bg-nordic-50 rounded-custom p-8 border border-nordic-200">
          <h3 className="text-2xl text-primary-900 mb-4">
            Experience German Precision in Your Home
          </h3>
          <p className="text-primary-600 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied homeowners who have transformed their kitchens with German engineering excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Book Free Consultation
            </Button>
            <Button size="lg" variant="secondary">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGermanKitchens;