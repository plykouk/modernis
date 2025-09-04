import Link from 'next/link';

const Footer = () => {
  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'Design', href: '/design' },
      { name: 'Range', href: '/range' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Kitchen Design', href: '/design/consultation' },
      { name: 'Product Range', href: '/range/products' },
      { name: '3D Visualization', href: '/design/3d-visualization' },
      { name: 'Installation', href: '/design/installation' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  };

  return (
    <footer className="bg-primary-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-white font-heading">Modernis</span>
            </Link>
            <p className="mt-4 text-primary-300">
              Precision-crafted German kitchens for modern living. Experience the perfect blend of quality, design, and functionality.
            </p>
            <div className="mt-4">
              <p className="text-primary-300">Phone:</p>
              <a
                href="tel:+441234567890"
                className="text-white hover:text-primary-200 font-medium"
              >
                +44 123 456 7890
              </a>
            </div>
          </div>

          {/* Main Navigation */}
          <div>
            <h3 className="text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="text-lg mb-4">Visit Our Showroom</h3>
            <div className="text-primary-300">
              <p>123 Design Street</p>
              <p>London, UK EC1A 1AA</p>
              <p className="mt-2">Monday - Friday: 9:00 - 18:00</p>
              <p>Saturday: 10:00 - 16:00</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-300">
            © {new Date().getFullYear()} Modernis. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-primary-300 hover:text-white text-sm transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;