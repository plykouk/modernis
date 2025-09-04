import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const ColorSwatch = ({ colorName, colorValue, className }: { colorName: string; colorValue: string; className: string }) => (
  <div className="text-center">
    <div className={`w-20 h-20 rounded-lg border border-gray-200 mx-auto mb-2 ${className}`}></div>
    <div className="text-sm font-medium">{colorName}</div>
    <div className="text-xs text-gray-500 font-mono">{colorValue}</div>
  </div>
);

const ColorSection = ({ title, colors, prefix }: { title: string; colors: Array<{name: string, value: string, class: string}>; prefix: string }) => (
  <Card className="mb-8">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-5 gap-4">
        {colors.map((color) => (
          <ColorSwatch
            key={color.name}
            colorName={`${prefix}-${color.name}`}
            colorValue={color.value}
            className={color.class}
          />
        ))}
      </div>
    </CardContent>
  </Card>
);

export default function StyleGuidePage() {
  const primaryColors = [
    { name: '50', value: '#fefefe', class: 'bg-primary-50' },
    { name: '100', value: '#fcfcfc', class: 'bg-primary-100' },
    { name: '200', value: '#f7f6f5', class: 'bg-primary-200' },
    { name: '300', value: '#f0ede8', class: 'bg-primary-300' },
    { name: '400', value: '#e8e4df', class: 'bg-primary-400' },
  ];

  const primaryDarkColors = [
    { name: '500', value: '#9aa0a6', class: 'bg-primary-500' },
    { name: '600', value: '#5f6368', class: 'bg-primary-600' },
    { name: '700', value: '#3c4043', class: 'bg-primary-700' },
    { name: '800', value: '#202124', class: 'bg-primary-800' },
    { name: '900', value: '#1a1a1a', class: 'bg-primary-900' },
  ];

  const nordicColors = [
    { name: '50', value: '#faf9f8', class: 'bg-nordic-50' },
    { name: '100', value: '#f5f3f1', class: 'bg-nordic-100' },
    { name: '200', value: '#ede8e4', class: 'bg-nordic-200' },
    { name: '300', value: '#ddd6d0', class: 'bg-nordic-300' },
    { name: '400', value: '#c4bab2', class: 'bg-nordic-400' },
  ];

  const nordicDarkColors = [
    { name: '500', value: '#a69c94', class: 'bg-nordic-500' },
    { name: '600', value: '#8b7f75', class: 'bg-nordic-600' },
    { name: '700', value: '#6b5f55', class: 'bg-nordic-700' },
    { name: '800', value: '#4a3e34', class: 'bg-nordic-800' },
    { name: '900', value: '#2d1f17', class: 'bg-nordic-900' },
  ];

  const sageColors = [
    { name: '50', value: '#f8f9f8', class: 'bg-sage-50' },
    { name: '100', value: '#f0f2f0', class: 'bg-sage-100' },
    { name: '200', value: '#e6e8e4', class: 'bg-sage-200' },
    { name: '300', value: '#d4d8d2', class: 'bg-sage-300' },
    { name: '400', value: '#b8c0b6', class: 'bg-sage-400' },
  ];

  const sageDarkColors = [
    { name: '500', value: '#9aa69a', class: 'bg-sage-500' },
    { name: '600', value: '#7d8a7d', class: 'bg-sage-600' },
    { name: '700', value: '#626b62', class: 'bg-sage-700' },
    { name: '800', value: '#454b45', class: 'bg-sage-800' },
    { name: '900', value: '#2a2d2a', class: 'bg-sage-900' },
  ];

  const dustyColors = [
    { name: '50', value: '#f7f8f9', class: 'bg-dusty-50' },
    { name: '100', value: '#eff2f4', class: 'bg-dusty-100' },
    { name: '200', value: '#e2e8ec', class: 'bg-dusty-200' },
    { name: '300', value: '#d0d8df', class: 'bg-dusty-300' },
    { name: '400', value: '#b4c2cc', class: 'bg-dusty-400' },
  ];

  const dustyDarkColors = [
    { name: '500', value: '#96a8b5', class: 'bg-dusty-500' },
    { name: '600', value: '#7a8c9a', class: 'bg-dusty-600' },
    { name: '700', value: '#5f6b76', class: 'bg-dusty-700' },
    { name: '800', value: '#454b52', class: 'bg-dusty-800' },
    { name: '900', value: '#2a2d31', class: 'bg-dusty-900' },
  ];

  const charcoalColors = [
    { name: '50', value: '#f8f8f8', class: 'bg-charcoal-50' },
    { name: '100', value: '#f0f0f0', class: 'bg-charcoal-100' },
    { name: '200', value: '#e0e0e0', class: 'bg-charcoal-200' },
    { name: '300', value: '#c8c8c8', class: 'bg-charcoal-300' },
    { name: '400', value: '#a0a0a0', class: 'bg-charcoal-400' },
  ];

  const charcoalDarkColors = [
    { name: '500', value: '#808080', class: 'bg-charcoal-500' },
    { name: '600', value: '#5a5d60', class: 'bg-charcoal-600' },
    { name: '700', value: '#434649', class: 'bg-charcoal-700' },
    { name: '800', value: '#2d3033', class: 'bg-charcoal-800' },
    { name: '900', value: '#1a1c1e', class: 'bg-charcoal-900' },
  ];

  return (
    <main className="min-h-screen bg-primary-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-primary-50 to-nordic-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl text-primary-900 mb-6">
              Modernis Style Guide
            </h1>
            <p className="text-xl text-primary-600 max-w-2xl mx-auto">
              Nordic-inspired color palette curated for premium German kitchen aesthetics
            </p>
            <p className="text-lg text-primary-500 mt-4">
              <em>"Explore the essence of nature's simplicity"</em>
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Typography Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Typography</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-12">
              {/* Headings */}
              <div>
                <h3 className="text-xl mb-6 text-dusty-700 border-b border-dusty-200 pb-2">Headings - Bricolage Grotesque Bold 700</h3>
                <div className="space-y-4">
                  <div>
                    <h1 className="text-5xl mb-2">Heading 1 - Hero Titles</h1>
                    <p className="text-sm text-primary-500 font-mono">text-5xl (48px) - Used for main page titles and hero sections</p>
                  </div>
                  <div>
                    <h2 className="text-4xl mb-2">Heading 2 - Section Titles</h2>
                    <p className="text-sm text-primary-500 font-mono">text-4xl (36px) - Used for major section headings</p>
                  </div>
                  <div>
                    <h3 className="text-3xl mb-2">Heading 3 - Subsection Titles</h3>
                    <p className="text-sm text-primary-500 font-mono">text-3xl (30px) - Used for subsection headings</p>
                  </div>
                  <div>
                    <h4 className="text-2xl mb-2">Heading 4 - Component Titles</h4>
                    <p className="text-sm text-primary-500 font-mono">text-2xl (24px) - Used for component and card titles</p>
                  </div>
                  <div>
                    <h5 className="text-xl mb-2">Heading 5 - Content Headings</h5>
                    <p className="text-sm text-primary-500 font-mono">text-xl (20px) - Used for content headings and large labels</p>
                  </div>
                  <div>
                    <h6 className="text-lg mb-2">Heading 6 - Small Headings</h6>
                    <p className="text-sm text-primary-500 font-mono">text-lg (18px) - Used for small headings and form sections</p>
                  </div>
                </div>
              </div>

              {/* Paragraphs */}
              <div>
                <h3 className="text-xl mb-6 text-dusty-700 border-b border-dusty-200 pb-2">Paragraphs - Inter Font Family</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg mb-3">Large Paragraph (text-lg)</h4>
                    <p className="text-lg text-primary-700 leading-relaxed">
                      This is a large paragraph used for important descriptions, hero subtitles, and key messaging. 
                      It provides excellent readability and draws attention to critical content. Perfect for introductory 
                      text and calls-to-action descriptions.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg mb-3">Regular Paragraph (text-base)</h4>
                    <p className="text-base text-primary-700 leading-relaxed">
                      This is the standard paragraph size used throughout the website for main body content. 
                      It offers optimal readability for extended reading and is used in blog posts, product descriptions, 
                      and general content areas. The line height is set to ensure comfortable reading experience.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg mb-3">Small Paragraph (text-sm)</h4>
                    <p className="text-sm text-primary-600 leading-relaxed">
                      Small paragraph text is used for secondary information, captions, disclaimers, and supporting details. 
                      It's perfect for metadata, form help text, and less critical information that still needs to be accessible.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg mb-3">Caption Text (text-xs)</h4>
                    <p className="text-xs text-primary-500 leading-normal">
                      Caption text is used for image captions, technical specifications, legal text, and minimal supporting information. 
                      Use sparingly for the least important textual content.
                    </p>
                  </div>
                </div>
              </div>

              {/* Lists */}
              <div>
                <h3 className="text-xl mb-6 text-dusty-700 border-b border-dusty-200 pb-2">Lists & Navigation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg mb-4">Unordered Lists</h4>
                    <ul className="space-y-2 text-primary-700">
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-sage-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Premium German Engineering
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-sage-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        15-Year Warranty Coverage
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-sage-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Professional Installation Included
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-sage-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Sustainable Materials & Processes
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg mb-4">Ordered Lists</h4>
                    <ol className="space-y-2 text-primary-700">
                      <li className="flex items-start">
                        <span className="bg-dusty-100 text-dusty-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">1</span>
                        Schedule your free consultation
                      </li>
                      <li className="flex items-start">
                        <span className="bg-dusty-100 text-dusty-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">2</span>
                        Receive 3D design visualization
                      </li>
                      <li className="flex items-start">
                        <span className="bg-dusty-100 text-dusty-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">3</span>
                        Approve materials and timeline
                      </li>
                      <li className="flex items-start">
                        <span className="bg-dusty-100 text-dusty-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">4</span>
                        Professional installation begins
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Forms Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Form Elements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl mb-6 text-dusty-700 border-b border-dusty-200 pb-2">Form Inputs & Controls</h3>
                <form className="space-y-6 max-w-2xl">
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-primary-300 rounded-custom focus:ring-2 focus:ring-dusty-500 focus:border-dusty-500 transition-colors"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 border border-primary-300 rounded-custom focus:ring-2 focus:ring-dusty-500 focus:border-dusty-500 transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+44 123 456 7890"
                        className="w-full px-4 py-3 border border-primary-300 rounded-custom focus:ring-2 focus:ring-dusty-500 focus:border-dusty-500 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Kitchen Style Preference
                    </label>
                    <select className="w-full px-4 py-3 border border-primary-300 rounded-custom focus:ring-2 focus:ring-dusty-500 focus:border-dusty-500 transition-colors">
                      <option>Select a style</option>
                      <option>Modern Minimalist</option>
                      <option>Traditional German</option>
                      <option>Industrial Contemporary</option>
                      <option>Nordic Inspired</option>
                      <option>Luxury Premium</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Budget Range
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {['£15k-25k', '£25k-40k', '£40k-60k', '£60k+'].map((range) => (
                        <label key={range} className="flex items-center space-x-2 p-3 border border-primary-300 rounded-custom hover:bg-primary-50 cursor-pointer transition-colors">
                          <input type="radio" name="budget" value={range} className="text-dusty-500" />
                          <span className="text-sm">{range}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Project Requirements
                    </label>
                    <div className="space-y-2">
                      {['Full Kitchen Design', 'Installation Services', '3D Visualization', 'Material Selection', 'Project Management'].map((service) => (
                        <label key={service} className="flex items-center space-x-2">
                          <input type="checkbox" className="text-dusty-500 rounded" />
                          <span className="text-sm text-primary-700">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Additional Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your vision, timeline, or any specific requirements..."
                      className="w-full px-4 py-3 border border-primary-300 rounded-custom focus:ring-2 focus:ring-dusty-500 focus:border-dusty-500 transition-colors resize-vertical"
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-dusty-600 hover:bg-dusty-700">Submit Request</Button>
                    <Button variant="secondary" className="border-primary-300 text-primary-700">Save as Draft</Button>
                  </div>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Color Palettes */}
        <div className="mb-12">
          <h2 className="text-3xl text-primary-900 mb-8">Nordic Color Palette</h2>
          
          <ColorSection 
            title="Primary - Pure Nordic Whites & Warm Grays"
            colors={[...primaryColors, ...primaryDarkColors]}
            prefix="primary"
          />
          
          <ColorSection 
            title="Nordic - Warm Blush & Cream Tones"
            colors={[...nordicColors, ...nordicDarkColors]}
            prefix="nordic"
          />
          
          <ColorSection 
            title="Sage - Natural Muted Greens"
            colors={[...sageColors, ...sageDarkColors]}
            prefix="sage"
          />
          
          <ColorSection 
            title="Dusty - Cool Blue Grays"
            colors={[...dustyColors, ...dustyDarkColors]}
            prefix="dusty"
          />
          
          <ColorSection 
            title="Charcoal - Deep Sophisticated Grays"
            colors={[...charcoalColors, ...charcoalDarkColors]}
            prefix="charcoal"
          />
        </div>

        {/* Button Examples */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Button Styles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg mb-4">Primary Buttons</h4>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-primary-900 hover:bg-primary-800">Primary Dark</Button>
                  <Button className="bg-nordic-600 hover:bg-nordic-700 text-white">Nordic Brown</Button>
                  <Button className="bg-sage-600 hover:bg-sage-700 text-white">Sage Green</Button>
                  <Button className="bg-dusty-600 hover:bg-dusty-700 text-white">Dusty Blue</Button>
                  <Button className="bg-charcoal-600 hover:bg-charcoal-700 text-white">Charcoal</Button>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg mb-4">Secondary Buttons</h4>
                <div className="flex flex-wrap gap-4">
                  <Button variant="secondary">Primary Secondary</Button>
                  <Button variant="secondary" className="border-nordic-600 text-nordic-700 hover:bg-nordic-50">Nordic Secondary</Button>
                  <Button variant="secondary" className="border-sage-600 text-sage-700 hover:bg-sage-50">Sage Secondary</Button>
                  <Button variant="secondary" className="border-dusty-600 text-dusty-700 hover:bg-dusty-50">Dusty Secondary</Button>
                </div>
              </div>

              <div>
                <h4 className="text-lg mb-4">Ghost Buttons</h4>
                <div className="flex flex-wrap gap-4">
                  <Button variant="ghost">Primary Ghost</Button>
                  <Button variant="ghost" className="text-nordic-700 hover:bg-nordic-100">Nordic Ghost</Button>
                  <Button variant="ghost" className="text-sage-700 hover:bg-sage-100">Sage Ghost</Button>
                  <Button variant="ghost" className="text-dusty-700 hover:bg-dusty-100">Dusty Ghost</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Background Examples */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Background Combinations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary-50 p-6 rounded-lg border">
                <h4 className="text-primary-900 mb-2">Clean & Modern</h4>
                <p className="text-primary-700">Primary-50 background with primary-900 headings</p>
              </div>
              
              <div className="bg-nordic-50 p-6 rounded-lg border">
                <h4 className="text-nordic-900 mb-2">Warm & Natural</h4>
                <p className="text-nordic-700">Nordic-50 background with nordic-900 headings</p>
              </div>
              
              <div className="bg-sage-50 p-6 rounded-lg border">
                <h4 className="text-sage-900 mb-2">Nature Inspired</h4>
                <p className="text-sage-700">Sage-50 background with sage-900 headings</p>
              </div>
              
              <div className="bg-dusty-50 p-6 rounded-lg border">
                <h4 className="text-dusty-900 mb-2">Cool & Professional</h4>
                <p className="text-dusty-700">Dusty-50 background with dusty-900 headings</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Guidelines */}
        <Card>
          <CardHeader>
            <CardTitle>Usage Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg mb-3">Color Applications</h4>
                <ul className="space-y-2 text-primary-700">
                  <li><strong>Primary:</strong> Main backgrounds, pure whites, neutral grays</li>
                  <li><strong>Nordic:</strong> Warm accent backgrounds, cozy sections</li>
                  <li><strong>Sage:</strong> Natural elements, eco-friendly messaging</li>
                  <li><strong>Dusty:</strong> Professional sections, cool accents</li>
                  <li><strong>Charcoal:</strong> Deep contrasts, premium feels</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg mb-3">Best Practices</h4>
                <ul className="space-y-2 text-primary-700">
                  <li>• Use 50-200 shades for backgrounds</li>
                  <li>• Use 600-900 shades for text and important elements</li>
                  <li>• Maintain contrast ratios for accessibility</li>
                  <li>• Combine warm (nordic) with cool (dusty) for balance</li>
                  <li>• Use sage for nature-focused content</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </main>
  );
}