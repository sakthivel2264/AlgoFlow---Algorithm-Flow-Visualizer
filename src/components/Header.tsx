import { useRouter } from 'next/navigation';
import React from 'react';

interface HeaderProps {
  fileContent: string;
}

const Header: React.FC<HeaderProps> = ({ fileContent }) => {

  const router = useRouter();

     const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(fileContent);
        alert('ASCII tree copied to clipboard!');
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    };
  
    const downloadAsFile = () => {
      const blob = new Blob([fileContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'ascii-tree-visualization.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };

  const handleBack = () => {
    router.back();
  };

  const handleNewVisualization = () => {
    router.push('/');
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
           <button
              onClick={handleBack}
              className="px-2 py-2  text-black cursor-pointer rounded-lg border-gray-300 hover:bg-gray-100 transition-colors"
            >
              ← Back
            </button>
          <h1 className="text-2xl font-bold text-gray-900">ASCII Tree Visualization</h1>
        </div>
        <div className='flex gap-2 justify-center items-center'>
          <div className="space-x-3">
           
            <button
              onClick={handleNewVisualization}
              className="px-2 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              New Visualization
            </button>
          </div>
        <div className="space-x-3  flex ">
          <button
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
            >
            Copy
          </button>
          <button
            onClick={downloadAsFile}
            className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors"
            >
            Download
          </button>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
