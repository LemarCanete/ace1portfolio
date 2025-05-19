import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WorkflowCard from '@/components/WorkflowCard';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { workflows } from '@/lib/workflowData';

export default function Home() {
  return (
    <>
      <Header />
      
      <HeroSection />
      
      <section id="workflows" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 md:mb-16">
            My Interactive Workflows
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {workflows.map((workflow) => (
              <WorkflowCard key={workflow.id} workflow={workflow} />
            ))}
          </div>
        </div>
      </section>
      
      <AboutSection />
      
      <ContactSection />
      
      <Footer />
    </>
  )
}