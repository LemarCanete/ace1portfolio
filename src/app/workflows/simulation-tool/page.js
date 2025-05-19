import WorkflowLayout from '@/components/WorkflowLayout';

export default function SimulationToolWorkflow() {
  return (
    <WorkflowLayout title="Workflow Beta: Simulation Tool">
      <section className="mb-8 p-6 bg-indigo-50 border border-indigo-200 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-indigo-800 mb-3">How to Interact:</h2>
        <p className="text-gray-700 leading-relaxed">
          This simulation tool allows you to modify various parameters and observe how they affect the system in real-time.
          Use the controls below to experiment with different configurations.
        </p>
      </section>

      <section className="mb-8">
        <div className="bg-slate-700 text-white px-4 py-2.5 flex justify-between items-center rounded-t-md">
          <span className="text-base font-semibold truncate">Simulation Tool - Live Demo</span>
          <div className="flex items-center space-x-2">
            <span className="w-3.5 h-3.5 bg-slate-500 rounded-full inline-block" title="Visual only"></span>
            <span className="w-3.5 h-3.5 bg-slate-500 rounded-full inline-block" title="Visual only"></span>
            <span className="w-3.5 h-3.5 bg-slate-500 rounded-full inline-block" title="Visual only"></span>
          </div>
        </div>
        <div className="bg-white p-4 md:p-6 border border-gray-200 rounded-b-lg shadow-inner min-h-80 flex items-center justify-center">
          <div className="text-center p-8">
            <p className="text-gray-500 mb-4">Simulation Tool Placeholder</p>
            <p className="text-sm text-gray-400">Interactive simulation will be implemented here.</p>
          </div>
        </div>
      </section>

      <section className="mb-8 text-sm text-gray-600">
        <h3 className="font-semibold text-gray-700 mb-2">Notes & Considerations:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>This simulation demonstrates system dynamics under various conditions.</li>
          <li>Results are calculated using mathematical models, not real-world data.</li>
          <li>For optimal experience, use a modern web browser.</li>
        </ul>
      </section>
    </WorkflowLayout>
  );
}