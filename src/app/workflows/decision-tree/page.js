'use client';

import { useState } from 'react';
import WorkflowLayout from '@/components/WorkflowLayout';

// Sample decision tree data
const decisionTreeData = {
  start: {
    question: "What is your primary goal?",
    options: [
      { text: "Increase Revenue", next: "revenue" },
      { text: "Reduce Costs", next: "costs" },
      { text: "Improve User Experience", next: "ux" }
    ]
  },
  revenue: {
    question: "Which approach would you prefer?",
    options: [
      { text: "Acquire new customers", next: "revenue_acquire" },
      { text: "Increase existing customer value", next: "revenue_existing" }
    ]
  },
  costs: {
    question: "Which area do you want to focus on?",
    options: [
      { text: "Operational efficiency", next: "costs_operations" },
      { text: "Technology optimization", next: "costs_tech" }
    ]
  },
  ux: {
    question: "What aspect of user experience matters most?",
    options: [
      { text: "Speed and performance", next: "ux_speed" },
      { text: "Ease of use", next: "ux_ease" }
    ]
  },
  revenue_acquire: {
    result: "Recommended Strategy: Marketing campaign focused on new market segments with targeted ads and promotional offers."
  },
  revenue_existing: {
    result: "Recommended Strategy: Customer loyalty program with personalized upsell recommendations based on past purchases."
  },
  costs_operations: {
    result: "Recommended Strategy: Process automation and workflow optimization to reduce manual tasks and improve efficiency."
  },
  costs_tech: {
    result: "Recommended Strategy: Cloud migration and infrastructure consolidation to reduce maintenance and hardware costs."
  },
  ux_speed: {
    result: "Recommended Strategy: Technical optimization including code splitting, lazy loading, and CDN implementation."
  },
  ux_ease: {
    result: "Recommended Strategy: User testing and interface redesign with a focus on intuitive navigation and reduced cognitive load."
  }
};

export default function DecisionTreeWorkflow() {
  const [currentNode, setCurrentNode] = useState('start');
  const [path, setPath] = useState([{ id: 'start', label: 'Start' }]);
  
  const handleOptionSelect = (nextNode, optionText) => {
    setCurrentNode(nextNode);
    setPath([...path, { id: nextNode, label: optionText }]);
  };
  
  const resetTree = () => {
    setCurrentNode('start');
    setPath([{ id: 'start', label: 'Start' }]);
  };
  
  const currentNodeData = decisionTreeData[currentNode];
  const isResultNode = currentNodeData && 'result' in currentNodeData;
  
  return (
    <WorkflowLayout title="Workflow Gamma: Decision Tree">
      <section className="mb-8 p-6 bg-indigo-50 border border-indigo-200 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-indigo-800 mb-3">How to Interact:</h2>
        <p className="text-gray-700 leading-relaxed">
          Navigate through this interactive decision tree by selecting options at each step.
          Your choices will lead to different outcomes, and you can see your path in real-time.
        </p>
      </section>

      <section className="mb-8">
        <div className="bg-slate-700 text-white px-4 py-2.5 flex justify-between items-center rounded-t-md">
          <span className="text-base font-semibold truncate">Decision Tree - Live Demo</span>
          <div className="flex items-center space-x-2">
            <span className="w-3.5 h-3.5 bg-slate-500 rounded-full inline-block" title="Visual only"></span>
            <span className="w-3.5 h-3.5 bg-slate-500 rounded-full inline-block" title="Visual only"></span>
            <span className="w-3.5 h-3.5 bg-slate-500 rounded-full inline-block" title="Visual only"></span>
          </div>
        </div>
        <div className="bg-white p-6 border border-gray-200 rounded-b-lg shadow-inner">
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Your Path</h3>
            <div className="flex flex-wrap items-center text-sm">
              {path.map((item, index) => (
                <div key={index} className="flex items-center">
                  <span className={`px-3 py-1 rounded ${index === path.length - 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'}`}>
                    {item.label}
                  </span>
                  {index < path.length - 1 && (
                    <svg className="h-4 w-4 mx-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            {isResultNode ? (
              <div className="text-center">
                <div className="mb-6 text-lg font-medium text-indigo-800">{currentNodeData.result}</div>
                <button 
                  onClick={resetTree}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-150"
                >
                  Start Over
                </button>
              </div>
            ) : (
              <>
                <h4 className="text-xl font-medium text-gray-800 mb-4">{currentNodeData.question}</h4>
                <div className="space-y-3">
                  {currentNodeData.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionSelect(option.next, option.text)}
                      className="w-full text-left p-4 bg-white border border-gray-300 rounded-lg hover:bg-indigo-50 hover:border-indigo-300 transition-colors duration-150"
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="mb-8 text-sm text-gray-600">
        <h3 className="font-semibold text-gray-700 mb-2">Notes & Considerations:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>This decision tree demonstrates basic branching logic in interactive applications.</li>
          <li>In a real-world scenario, more complex decision criteria would be applied.</li>
          <li>This is a simplified example for demonstration purposes.</li>
        </ul>
      </section>
    </WorkflowLayout>
  );
}