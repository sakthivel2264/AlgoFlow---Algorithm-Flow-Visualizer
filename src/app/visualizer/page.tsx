'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { TreeRequest, TreeResponse } from '@/types';
import dynamic from 'next/dynamic';

const ExcaliDraw = dynamic(() => import('@/components/ExcaliDraw'), { ssr: false });

export default function VisualizerPage() {
  const [asciiTree, setAsciiTree] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const searchParams = useSearchParams();
  const router = useRouter();

  const algorithm = searchParams.get('algorithm');

  useEffect(() => {
    const generateTree = async () => {
      if (!algorithm) {
        setError('Missing algorithm name or example input');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError('');

        const response = await fetch('/api/generate-tree', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            algorithm,
          } as TreeRequest),
        });

        const result: TreeResponse = await response.json();

        if (response.ok) {
          console.log('Received ASCII tree:', result.asciiTree);
          setAsciiTree(result.asciiTree || '');
        } else {
          setError(result.error || 'Failed to generate ASCII tree');
        }
      } catch (err) {
        setError('Network error. Please try again.');
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    generateTree();
  }, [algorithm]);

  const handleNewVisualization = () => {
    router.push('/');
  };


  return (
    <main className="min-h-screen bg-gray-100 py-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex items-center">
          <div>
          </div>
          
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-16">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-lg text-gray-600">Generating ASCII tree visualization...</p>
            <p className="text-sm text-gray-500 mt-2">This may take a few moments</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded mb-6">
            <h3 className="font-semibold mb-2">Error</h3>
            <p>{error}</p>
            <button
              onClick={handleNewVisualization}
              className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {/* ASCII Tree Visualization */}
        {asciiTree && !loading && (
          <div className="space-y-4">
            <ExcaliDraw file={asciiTree}/>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && !asciiTree && (
          <div className="text-center py-16">
            <p className="text-gray-600 mb-4">No visualization data available</p>
            <button
              onClick={handleNewVisualization}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Go Back to Input Form
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
