export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">&copy; {currentYear} [Your Name]. All rights reserved.</p>
        <p className="text-xs mt-1">Designed with Next.js and Tailwind CSS.</p>
      </div>
    </footer>
  );
}