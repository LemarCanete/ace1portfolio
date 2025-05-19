import WorkflowLayout from '@/components/WorkflowLayout';
import Image from 'next/image';
import { useState } from 'react';

export default function DataProcessingWorkflow() {
  // Example state for an interactive workflow
  const [inputData, setInputData] = useState(50);
  
  return (
    <WorkflowLayout title="Workflow Alpha: Data Processing">
      <section className="mb-8 p-6 bg-indigo-50 border border-indigo-200 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-indigo-800 mb-3">How to Interact:</h2>
        <p className="text-gray-700 leading-relaxed">
          This interactive data processing workflow demonstrates how raw data is transformed through multiple stages.
          Adjust the parameters using the controls below to see how they affect the output in real-time.
        </p>
      </section>

      <section className="mb-8">
        <div className="bg-slate-700 text-white px-4 py-2.5 flex justify-between items-center rounded-t-md">
          <span className="text-base font-semibold truncate">Data Processing - Live Demo</span>
          <div className="flex items-center space-x-2">
            <span className="w-3.5 h-3.5 bg-slate-500 rounded-full inline-block" title="Visual only"></span>
            <span className="w-3.5 h-3.5 bg-slate-500 rounded-full inline-block" title="Visual only"></span>
            <span className="w-3.5 h-3.5 bg-slate-500 rounded-full inline-block" title="Visual only"></span>
          </div>
        </div>
        <div className="bg-white p-4 md:p-6 border border-gray-200 rounded-b-lg shadow-inner">
          {/* This is where your interactive workflow would go */}
          <div className="min-h-80 flex flex-col items-center justify-center space-y-8">
            <div className="w-full max-w-md">
              <label htmlFor="dataInput" className="block text-sm font-medium text-gray-700 mb-2">
                Data Input Value: {inputData}
              </label>
              <input
                type="range"
                id="dataInput"
                min="0"
                max="100"
                value={inputData}
                onChange={(e) => setInputData(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            
            <div className="w-full max-w-md p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Processing Results</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Raw Input:</span>
                  <span className="font-medium">{inputData}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Normalized:</span>
                  <span className="font-medium">{(inputData / 100).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Squared:</span>
                  <span className="font-medium">{(inputData * inputData).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Final Output:</span>
                  <span className="font-medium text-indigo-600">{(Math.sqrt(inputData) * 10).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 text-sm text-gray-600">
        <h3 className="font-semibold text-gray-700 mb-2">Notes & Considerations:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>This workflow demonstrates data processing visualization and real-time updates.</li>
          <li>In a real-world scenario, more complex transformations would be applied.</li>
          <li>The input range is limited to 0-100 for demonstration purposes.</li>
        </ul>
      </section>
    </WorkflowLayout>
  );
}