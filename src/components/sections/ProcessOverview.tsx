import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

const ProcessOverview = () => {
  const processSteps = [
    {
      step: 1,
      title: 'Free Consultation',
      description: 'We visit your home to understand your vision, measure the space, and discuss your requirements and budget.',
      features: [
        'Home visit assessment',
        'Design requirements discussion',
        'Budget planning',
        'Timeline overview'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      step: 2,
      title: 'German Design & Planning',
      description: 'Our designers create detailed 3D visualizations using German precision planning software and premium materials.',
      features: [
        '3D kitchen visualization',
        'German cabinet selection',
        'Appliance integration',
        'Material finalization'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      step: 3,
      title: 'Precision Installation',
      description: 'Our certified installers bring German precision to every detail, ensuring perfect fit and flawless finish.',
      features: [
        'Professional installation team',
        'German precision standards',
        'Quality control checks',
        'Post-installation support'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl text-primary-900 mb-8 max-w-4xl mx-auto leading-tight">
            Our German-Engineered Process
          </h2>
          <p className="text-xl md:text-2xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            From initial consultation to final installation, we follow German precision standards at every step
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {processSteps.map((process, index) => (
            <div key={process.step} className="relative">
              {/* Connector Line (desktop only) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-primary-300 transform translate-x-4 z-0" />
              )}
              
              <Card className="relative z-10 h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-primary-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                    {process.step}
                  </div>

                  {/* Icon */}
                  <div className="text-primary-700 flex justify-center mb-4">
                    {process.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl text-primary-900 mb-4">
                    {process.title}
                  </h3>

                  {/* Description */}
                  <p className="text-primary-600 mb-6 text-balance">
                    {process.description}
                  </p>

                  {/* Features */}
                  <ul className="text-left space-y-2">
                    {process.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-primary-700">
                        <svg
                          className="w-4 h-4 text-primary-500 mt-0.5 mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-primary-50 rounded-custom p-8 mb-8 border border-primary-200">
          <h3 className="text-2xl text-primary-900 text-center mb-8">
            Typical Project Timeline
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-900 mb-2">Week 1</div>
              <div className="text-primary-600">Consultation & Measurement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-900 mb-2">Weeks 2-3</div>
              <div className="text-primary-600">Design & Planning</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-900 mb-2">Weeks 4-6</div>
              <div className="text-primary-600">German Manufacturing</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-900 mb-2">Weeks 7-8</div>
              <div className="text-primary-600">Professional Installation</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg">
            Start Your Kitchen Journey
          </Button>
          <p className="text-primary-600 mt-4">
            Ready to experience German precision? Book your free consultation today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;