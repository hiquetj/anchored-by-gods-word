interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  overlayOpacity?: string;
}

export default function Hero ({ 
  title, 
  subtitle, 
  backgroundImage = '/coastal.png',
  overlayOpacity = 'opacity-50'
}: HeroProps) {
  return (
    <section 
      className="relative h-96 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={`absolute inset-0 bg-black ${overlayOpacity}`}></div>
      <div className="relative text-center px-4">
        <div className="bg-white text-black p-6 md:p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2 md:mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-black">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
};