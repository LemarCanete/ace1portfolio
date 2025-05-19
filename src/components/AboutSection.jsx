import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto text-center text-gray-700 text-lg">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image 
              src="/images/placeholder-150.png" 
              alt="Your Name" 
              fill
              className="rounded-full shadow-md"
              priority
            />
          </div>
          <p className="mb-4">
            Hi, I'm [Your Name], a passionate [Your Profession/Title] specializing in creating efficient and engaging workflows. 
            This portfolio showcases some of my projects where users can directly interact with the processes I've designed.
          </p>
          <p>
            I believe in making complex systems understandable and accessible through interactive experiences. Feel free to explore and reach out!
          </p>
        </div>
      </div>
    </section>
  );
}