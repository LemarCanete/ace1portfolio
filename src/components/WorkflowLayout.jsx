import Link from 'next/link';

export default function WorkflowLayout({ title, children }) {
  return (
    <div className="antialiased text-gray-800 flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold text-indigo-700">{title}</h1>
          <Link href="/#workflows" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium py-2 px-4 rounded-md border border-indigo-600 hover:bg-indigo-50 transition-colors duration-150">
            &larr; Back to Portfolio
          </Link>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-6 py-8 md:py-12">
        {children}
      </main>

      <footer className="bg-gray-100 border-t border-gray-200 py-6">
        <div className="container mx-auto px-6 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} [Your Name]. Workflow Page.</p>
          <p><Link href="/" className="hover:underline text-indigo-600">Return to Main Portfolio</Link></p>
        </div>
      </footer>
    </div>
  );
}