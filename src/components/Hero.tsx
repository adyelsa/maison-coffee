
import Button from './Button'

function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <section
      id="home"
      className="bg-[#F5F0E8] px-6 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">

          <p className="mb-4 uppercase tracking-[0.3em] text-sm text-[#795C47]">
            Crafted with care
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#3B2418]">
            Coffee made
            <br />
            for moments.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-[#795C47] max-w-lg mx-auto lg:mx-0">
            Discover exceptional coffee, thoughtfully sourced
            and crafted to make every day a little more special.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">

            <Button
              variant="primary"
              onClick={() => scrollToSection('pricing')}
            >
              Explore Membership
            </Button>

            <Button
              variant="secondary"
              onClick={() => scrollToSection('features')}
            >
              Discover More
            </Button>

          </div>
        </div>

        {/* Coffee Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85"
            alt="Freshly brewed coffee"
            className="w-full h-[350px] md:h-[450px] lg:h-[550px] object-cover rounded-3xl"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero
