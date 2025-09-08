/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useCallback } from 'react';
import Canvas from '@/components/Canvas';
import Header from '@/components/Header';
import type { FILE } from '@/types';
import { sampleFile } from '@/lib/file';
import { convertToExcalidrawElements } from '@excalidraw/excalidraw';


const sampleFiles: FILE[] = [
  {
    _id: '1',
    fileName: 'Longest Palindrome Algorithm',
    whiteboard: JSON.stringify(
      convertToExcalidrawElements([
        {
          type: "text",
          x: 100,
          y: 100,
          text: sampleFile,
          fontSize: 14,
          fontFamily: 3, 
          strokeColor: "#1e1e1e",
        }
    ])),
    createdBy: 'user1',
    createdAt: new Date().toISOString(),
    archived: false,
  }
];


interface ExcaliDrawProps {
  file: string;
}

function ExcaliDraw({file}: ExcaliDrawProps) {
  const [files, setFiles] = useState<FILE[]>([{
    _id: '1',
    fileName: 'Longest Palindrome Algorithm',
    whiteboard: JSON.stringify(
      convertToExcalidrawElements([
        {
          type: "text",
          x: 100,
          y: 100,
          text: file,
          fontSize: 14,
          fontFamily: 3, 
          strokeColor: "#1e1e1e",
        }
    ])),
    createdBy: 'user1',
    createdAt: new Date().toISOString(),
    archived: false,
  }]);
  const [selectedFileId, setSelectedFileId] = useState<string>(sampleFiles[0]._id);
  const [saveTrigger, setSaveTrigger] = useState<boolean>(false);

  const selectedFile = files.find((file) => file._id === selectedFileId);

  const handleCanvasSave = useCallback((data: any) => {
    setFiles((prev) =>
      prev.map((file) =>
        file._id === data._id ? { ...file, whiteboard: data.whiteboard } : file
      )
    );
  }, []);

  if (!selectedFile) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Header 
        fileContent={file}
      />
      
      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 p-2">
          <div className="bg-white rounded-lg p-2 w-full" >
            <Canvas
              onSaveTrigger={saveTrigger}
              fileId={selectedFileId}
              fileData={selectedFile}
              onSave={handleCanvasSave}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default ExcaliDraw;
