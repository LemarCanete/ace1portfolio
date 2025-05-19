'use client';

import { useState } from 'react';
import WorkflowLayout from '@/components/WorkflowLayout';

// Product configuration options
const productOptions = {
  type: [
    { id: 'basic', name: 'Basic', price: 199, description: 'Essential features for individual use' },
    { id: 'pro', name: 'Professional', price: 399, description: 'Advanced features for professional use' },
    { id: 'enterprise', name: 'Enterprise', price: 799, description: 'Full-featured solution for teams' }
  ],
  color: [
    { id: 'slate', name: 'Slate Gray', hex: '#64748b' },
    { id: 'navy', name: 'Navy Blue', hex: '#1e40af' },
    { id: 'emerald', name: 'Emerald Green', hex: '#047857' },
    { id: 'ruby', name: 'Ruby Red', hex: '#be123c' }
  ],
  storage: [
    { id: '128', name: '128 GB', price: 0 },
    { id: '256', name: '256 GB', price: 100 },
    { id: '512', name: '512 GB', price: 200 },
    { id: '1tb', name: '1 TB', price: 350 }
  ],
  extras: [
    { id: 'warranty', name: 'Extended Warranty', price: 99 },
    { id: 'support', name: 'Priority Support', price: 79 },
    { id: 'software', name: 'Software Package', price: 129 },
    { id: 'accessories', name: 'Accessory Bundle', price: 149 }
  ]
};

export default function ProductConfiguratorWorkflow() {
  const [config, setConfig] = useState({
    type: 'basic',
    color: 'slate',
    storage: '128',
    extras: []
  });
  
  const handleTypeChange = (type) => {
    setConfig(prev => ({ ...prev, type }));
  };
  
  const handleColorChange = (color) => {
    setConfig(prev => ({ ...prev, color }));
  };
  
  const handleStorageChange = (storage) => {
    setConfig(prev => ({ ...prev, storage }));
  };
  
  const handleExtraToggle = (extraId) => {
    setConfig(prev => {
      if (prev.extras.includes(extraId)) {
        return { ...prev, extras: prev.extras.filter(id => id !== extraId) };
      } else {
        return { ...prev, extras: [...prev.extras, extraId] };
      }
    });
  };
  
  // Calculate total price
  const calculatePrice = () => {
    const selectedType = productOptions.type.find(t => t.id === config.type);
    const selectedStorage = productOptions.storage.find(s => s.id === config.storage);
    const selectedExtras = config.extras.map(extId => 
      productOptions.extras.find(ext => ext.id === extId)
    );
    
    const basePrice = selectedType.price;
    const storagePrice = selectedStorage.price;
    const extrasPrice = selectedExtras.reduce((sum, extra) => sum + extra.price, 0);
    
    return basePrice + storagePrice + extrasPrice;
  };
  
  // Get selected color hex
  const getSelectedColorHex = () => {
    return productOptions.color.find(c => c.id === config.color).hex;
  };
  
  return (
    <WorkflowLayout title="Workflow Delta: Product Configurator">
      <section className="mb-8 p-6 bg-indigo-50 border border-indigo-200 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-indigo-800 mb-3">How to Interact:</h2>
        <p className="text-gray-700 leading-relaxed">
          Configure your product by selecting options from each category. Watch as the preview and total price update in real-time based on your selections.
        </p>
      </section>

      <section className="mb-8">
        <div className="bg-slate-700 text-white px-4 py-2.5 flex justify-between items-center rounded-t-md">
          <span className="text-base font-semibold truncate">Product Configurator - Live Demo</span>
          <div className="flex items-center space-x-2">
            <span className="w-3.5 h-3.5 bg-slate-500 rounded-full inline-block" title="Visual only"></span>
            <span className="w-3.5 h-3.5 bg-slate-500 rounded-full inline-block" title="Visual only"></span>
            <span className="w-3.5 h-3.5 bg-slate-500 rounded-full inline-block" title="Visual only"></span>
          </div>
        </div>
        <div className="bg-white p-6 border border-gray-200 rounded-b-lg shadow-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Preview */}
            <div className="flex flex-col">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Product Preview</h3>
              <div className="flex-grow flex items-center justify-center bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div 
                  className="w-64 h-64 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-xl"
                  style={{ backgroundColor: getSelectedColorHex() }}
                >
                  {productOptions.type.find(t => t.id === config.type).name}
                  <br />
                  {productOptions.storage.find(s => s.id === config.storage).name}
                </div>
              </div>
              <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="text-xl font-bold text-gray-800">
                  Total: ${calculatePrice().toLocaleString()}
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {config.extras.length > 0 ? 
                    `Includes ${config.extras.length} add-on${config.extras.length > 1 ? 's' : ''}` : 
                    'No add-ons selected'}
                </p>
              </div>
            </div>
            
            {/* Configuration Options */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Configure Your Product</h3>
              
              {/* Product Type */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-2">Product Type</h4>
                <div className="space-y-2">
                  {productOptions.type.map(type => (
                    <div 
                      key={type.id}
                      className={`p-3 border rounded-lg cursor-pointer ${
                        config.type === type.id ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200'
                      }`}
                      onClick={() => handleTypeChange(type.id)}
                    >
                      <div className="flex justify-between">
                        <span className="font-medium">{type.name}</span>
                        <span>${type.price}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{type.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Color */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-2">Color</h4>
                <div className="flex space-x-3">
                  {productOptions.color.map(color => (
                    <div 
                      key={color.id}
                      className={`w-10 h-10 rounded-full cursor-pointer ${
                        config.color === color.id ? 'ring-2 ring-offset-2 ring-indigo-600' : ''
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                      onClick={() => handleColorChange(color.id)}
                    />
                  ))}
                </div>
              </div>
              
              {/* Storage */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-2">Storage</h4>
                <div className="grid grid-cols-2 gap-2">
                  {productOptions.storage.map(storage => (
                    <div 
                      key={storage.id}
                      className={`p-3 border rounded-lg cursor-pointer text-center ${
                        config.storage === storage.id ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200'
                      }`}
                      onClick={() => handleStorageChange(storage.id)}
                    >
                      <div className="font-medium">{storage.name}</div>
                      <div className="text-sm text-gray-600">
                        {storage.price > 0 ? `+$${storage.price}` : 'Included'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Extras */}
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Add-ons</h4>
                <div className="space-y-2">
                  {productOptions.extras.map(extra => (
                    <div 
                      key={extra.id}
                      className={`p-3 border rounded-lg cursor-pointer ${
                        config.extras.includes(extra.id) ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200'
                      }`}
                      onClick={() => handleExtraToggle(extra.id)}
                    >
                      <div className="flex justify-between">
                        <span className="font-medium">{extra.name}</span>
                        <span>+${extra.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 text-sm text-gray-600">
        <h3 className="font-semibold text-gray-700 mb-2">Notes & Considerations:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>This configurator demonstrates real-time updates and user interface responsiveness.</li>
          <li>In a production environment, this would connect to inventory management.</li>
          <li>Pricing is simplified for demonstration purposes.</li>
        </ul>
      </section>
    </WorkflowLayout>
  );
}