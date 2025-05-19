import Image from 'next/image';
import Link from 'next/link';

export default function WorkflowCard({ workflow }) {
  return (
    <div className="workflow-card bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
      <div className="relative h-56 w-full">
        <Image 
          src={workflow.imageUrl} 
          alt={`${workflow.title} Preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{workflow.title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {workflow.description}
        </p>
        <Link href={workflow.path} className="btn-primary block text-center w-full mt-auto">
          Launch Workflow
        </Link>
      </div>
    </div>
  );
}