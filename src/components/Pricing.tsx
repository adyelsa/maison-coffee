import type { ReactNode } from 'react'

type Plan = {
  name: string
  price: number
  description: string
  benefits: string[]
  popular?: boolean
}

const plans: Plan[] = [
  {
    name: 'Essential',
    price: 19,
    description: 'A little coffee joy, every month.',
    benefits: [
      '2 specialty coffees per month',
      '5% off additional orders',
      'Member-only updates',
      'Flexible membership',
    ],
  },
  {
    name: 'Signature',
    price: 39,
    description: 'For your everyday coffee ritual.',
    benefits: [
      '6 specialty coffees per month',
      '10% off additional orders',
      'Priority ordering',
      'Exclusive seasonal drinks',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: 59,
    description: 'The ultimate coffee experience.',
    benefits: [
      '12 specialty coffees per month',
      '15% off additional orders',
      'Priority ordering',
      'Exclusive seasonal drinks',
      'Monthly surprise gift',
    ],
  },
]

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
}

function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full font-medium transition-colors duration-300'

  const variants = {
    primary: 'bg-[#3B2418] text-white hover:bg-[#60412E]',
    secondary:
      'border border-[#3B2418] text-[#3B2418] hover:bg-[#EDE5DA]',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-base',
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={[base, variants[variant], sizes[size], className].join(' ')}
    >
      {children}
    </button>
  )
}

function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-[#F5F0E8] px-6 py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">
          <p className="mb-4 text-sm tracking-[0.3em] text-[#795C47]">
            OUR MEMBERSHIP
          </p>

          <h2 className="text-4xl font-bold text-[#3B2418] md:text-5xl">
            Your coffee. Your way.
          </h2>

          <p className="mt-5 text-lg text-[#795C47]">
            Choose the perfect plan for your daily ritual.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={[
                'relative flex flex-col rounded-3xl border p-8',
                'transition-shadow duration-300 hover:shadow-lg',
                plan.popular
                  ? 'border-[#3B2418] bg-[#EDE5DA] shadow-md'
                  : 'border-[#E5D9CA] bg-white',
              ].join(' ')}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#3B2418] px-5 py-2 text-xs font-semibold tracking-widest text-white">
                  POPULAR
                </span>
              )}

              <h3 className="text-2xl font-bold text-[#3B2418]">
                {plan.name}
              </h3>

              <p className="mt-3 min-h-12 text-[#795C47]">
                {plan.description}
              </p>

              <div className="my-8">
                <span className="text-5xl font-bold text-[#3B2418]">
                  {'$'}{plan.price}
                </span>
                <span className="text-[#795C47]"> / month</span>
              </div>

              <ul className="mb-10 flex-1 space-y-4">
                {plan.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-[#60412E]"
                  >
                    <span className="font-bold text-[#3B2418]">
                      ✓
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? 'primary' : 'secondary'}
                size="lg"
                className="w-full"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({
                    behavior: 'smooth',
                  })
                }}
              >
                Choose Plan
              </Button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Pricing