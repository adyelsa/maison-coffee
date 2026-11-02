import {
  Coffee,
  Sprout,
  Heart,
  Truck,
  Award,
  Gift,
} from 'lucide-react'

const features = [
  {
    icon: Coffee,
    title: 'Specialty Coffee',
    description:
      'Carefully selected beans from the finest coffee-growing regions.',
  },
  {
    icon: Sprout,
    title: 'Ethically Sourced',
    description:
      'We partner with farmers who care about people and the planet.',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description:
      'Every cup is prepared with passion and attention to detail.',
  },
  {
    icon: Truck,
    title: 'Fresh Delivery',
    description:
      'Your favorite coffee delivered fresh to your doorstep.',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description:
      'Exceptional taste and quality in every single sip.',
  },
  {
    icon: Gift,
    title: 'Exclusive Perks',
    description:
      'Enjoy special rewards and benefits as a member.',
  },
]

function Features() {
  return (
    <section
      id="features"
      className="bg-[#EDE5DA] px-6 py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">
          <p className="mb-4 text-sm tracking-[0.3em] text-[#795C47]">
            WHY CHOOSE US
          </p>

          <h2 className="text-4xl font-bold text-[#3B2418] md:text-5xl">
            More than just coffee.
          </h2>

          <p className="mt-5 text-lg text-[#795C47]">
            Discover what makes every MAISON experience special.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <div
                key={feature.title}
                className="rounded-3xl bg-[#F5F0E8] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon
                  size={32}
                  strokeWidth={1.5}
                  className="mb-8 text-[#3B2418]"
                />

                <h3 className="mb-4 text-xl font-bold text-[#3B2418]">
                  {feature.title}
                </h3>

                <p className="leading-relaxed text-[#795C47]">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Features