'use client';

import { useState } from 'react';
import { TreeRequest } from '@/types';

interface InputFormProps {
  onSubmit: (data: TreeRequest) => void;
  loading: boolean;
}

export default function InputForm({ onSubmit, loading }: InputFormProps) {
  const [algorithmName, setAlgorithmName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (algorithmName.trim()) {
      onSubmit({ algorithm: algorithmName.trim() });
    }
  };

  const presetExamples = [
    { name: 'Longest Palindrome Substring', input: 'babad' },
    { name: 'Two Sum', input: '[2,7,11,15], target=9' },
    { name: 'Binary Search', input: '[1,3,5,7,9], target=5' },
    { name: 'Merge Sort', input: '[64,34,25,12,22,11,90]' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        ASCII Tree Visualizer for Algorithms
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Code
          </label>
          <textarea
            rows={8}
            value={algorithmName}
            onChange={(e) => setAlgorithmName(e.target.value)}
            placeholder="e.g., Longest Palindrome Substring"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            required
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-sm text-gray-600">Quick examples:</span>
          {presetExamples.map((example, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setAlgorithmName(example.name);
              }}
              className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
            >
              {example.name}
            </button>
          ))}
        </div>

        <button
          type="submit"
          disabled={loading || !algorithmName.trim()}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Generating...' : 'Generate ASCII Tree Flow'}
        </button>
      </form>
    </div>
  );
}
