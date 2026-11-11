import Image from "next/image";


export default function Home() {
  return (
    <main className="relative flex h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Fade and Blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cover.jpeg"
          alt="Fly Wonder Travel and Tours Background"
          fill
          className="object-cover opacity-40 blur-[3px]" // Opacity se fade aur blur se dhundla hoga
          quality={100}
          priority
        />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-4xl mx-auto h-full">
        
        {/* Company Logo - Size Increased & Responsive */}
        <div className="mb-4 md:mb-8 w-48 md:w-72">
          <Image
            src="/logo-03.png"
            alt="Fly Wonder Travel & Tours Logo"
            width={300}
            height={300}
            className="object-contain drop-shadow-2xl w-full h-auto"
            priority
          />
        </div>

        <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-4 md:mb-6 drop-shadow-xl tracking-wide">
          Welcome to <br /> 
          <span className="text-blue-400">Fly Wonder Travel & Tours</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-200 mb-8 md:mb-10 font-medium drop-shadow-md">
          Our website is launching very soon! <br className="md:hidden" /> (Launching Soon)
        </p>
        
        {/* Address Box */}
        <div className="px-6 py-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl w-full max-w-md md:max-w-xl">
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            <span className="font-semibold text-white">Address:</span> Office Number LG-28, LandMark Plaza, Jail Road, Lahore
          </p>
        </div>
      </div>
    </main>
  );
}
