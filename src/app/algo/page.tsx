'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import InputForm from '@/components/InputForm';
import { TreeRequest } from '@/types';

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (data: TreeRequest) => {
    setLoading(true);
    setError('');

    try {
      // Encode the data and redirect to visualizer page
      const params = new URLSearchParams({
        algorithm: data.algorithm,
      });
      
      // Navigate to visualizer page with query parameters
      router.push(`/visualizer?${params.toString()}`);
    } catch (err) {
      setError('Navigation error. Please try again.');
      console.error('Navigation error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Algorithm ASCII Tree Visualizer
          </h1>
          <p className="text-gray-600">
            Generate detailed step-by-step flow diagrams for coding algorithms using AI
          </p>
        </div>

        <InputForm onSubmit={handleSubmit} loading={loading} />

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-gray-600">Redirecting to visualizer...</p>
          </div>
        )}
      </div>
    </main>
  );
}
