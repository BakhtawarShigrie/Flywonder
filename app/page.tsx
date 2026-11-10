import Image from "next/image";


export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black">
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
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-xl tracking-wide">
          Welcome to <br /> 
          <span className="text-blue-400">Fly Wonder Travel & Tours</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-10 font-medium drop-shadow-md">
          Website bohut jald launch hone wali hai! <br className="md:hidden" /> (Launching Soon)
        </p>
        
        {/* Address Box */}
        <div className="mt-4 px-6 py-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl">
          <p className="text-sm md:text-base text-gray-300">
            <span className="font-semibold text-white">Address:</span> Office Number LG-28, LandMark Plaza, Jail Road, Lahore
          </p>
        </div>
      </div>
    </main>
  );
}
