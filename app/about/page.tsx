import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">About HotelRes</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your trusted partner in finding the perfect accommodation for every journey.
        </p>
      </section>

      {/* Mission Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
            alt="Luxury Hotel"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-6">
            At HotelRes, we&apos;re committed to revolutionizing the way people book their accommodations. 
            Our mission is to provide a seamless, transparent, and enjoyable booking experience while 
            connecting travelers with their perfect stay.
          </p>
          <Link href="/hotels">
            <Button>Explore Hotels</Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Curated Selection',
              description: 'We carefully select and verify each hotel to ensure quality and comfort.',
            },
            {
              title: 'Best Prices',
              description: 'Get competitive rates and exclusive deals on top-rated accommodations.',
            },
            {
              title: '24/7 Support',
              description: 'Our dedicated support team is always here to help with your booking needs.',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-8">Our Team</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          We&apos;re a passionate team of travel enthusiasts and technology experts dedicated 
          to making your hotel booking experience exceptional.
        </p>
        <Link href="/contact">
          <Button variant="outline">Contact Us</Button>
        </Link>
      </section>
    </div>
  );
}