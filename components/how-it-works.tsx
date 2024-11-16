import {
  Search,
  Calendar,
  CreditCard,
  Hotel,
} from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Search',
    description: 'Find the perfect hotel by location, dates, and preferences',
  },
  {
    icon: Calendar,
    title: 'Book',
    description: 'Choose your room and dates with our easy booking system',
  },
  {
    icon: CreditCard,
    title: 'Pay',
    description: 'Secure payment with multiple payment options',
  },
  {
    icon: Hotel,
    title: 'Stay',
    description: 'Enjoy your comfortable stay at your chosen hotel',
  },
];

export function HowItWorks() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}