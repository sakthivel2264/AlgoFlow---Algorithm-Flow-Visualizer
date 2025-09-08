/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import type { FILE } from "../types";
import "@excalidraw/excalidraw/index.css";


const ExcalidrawWrapper = dynamic(
  () =>
    import("@excalidraw/excalidraw").then((mod) => ({
      default: ({ onChange, whiteboard, ...props }: any) => (
        <mod.Excalidraw
          onChange={onChange}
          initialData={{ elements: whiteboard }}
          {...props}
        >
          <mod.MainMenu>
            <mod.MainMenu.DefaultItems.ClearCanvas />
            <mod.MainMenu.DefaultItems.SaveAsImage />
            <mod.MainMenu.DefaultItems.ChangeCanvasBackground />
          </mod.MainMenu>
          <mod.WelcomeScreen>
            <mod.WelcomeScreen.Hints.MenuHint />
            <mod.WelcomeScreen.Hints.ToolbarHint />
            <mod.WelcomeScreen.Center>
              <mod.WelcomeScreen.Center.MenuItemHelp />
            </mod.WelcomeScreen.Center>
          </mod.WelcomeScreen>
        </mod.Excalidraw>
      ),
    })),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-[670px] w-full border border-gray-300 rounded-lg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading Canvas...</p>
        </div>
      </div>
    ),
  }
);

interface CanvasProps {
  onSaveTrigger: boolean;
  fileId: string;
  fileData: FILE;
  onSave?: (data: any) => void;
}

export default function Canvas({
  onSaveTrigger,
  fileId,
  fileData,
  onSave,
}: CanvasProps) {
  const [whiteBoardData, setWhiteBoardData] = useState<any>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (onSaveTrigger && whiteBoardData) {
      saveWhiteboard();
    }
  }, [onSaveTrigger, whiteBoardData]);

  const saveWhiteboard = () => {
    const dataToSave = {
      _id: fileId,
      whiteboard: JSON.stringify(whiteBoardData),
    };

    if (onSave) {
      onSave(dataToSave);
    }

    console.log("Whiteboard saved:", dataToSave);
  };

  const getInitialElements = () => {
    if (fileData?.whiteboard) {
      try {
        const elements = JSON.parse(fileData.whiteboard);
        if (Array.isArray(elements)) {
          return elements;
        }
      } catch (error) {
        console.error("Error parsing whiteboard data:", error);
        return [];
      }
    }
    return [];
  };

  // Don't render until mounted to prevent hydration issues
  if (!isMounted) {
    return (
      <div className="flex items-center justify-center h-[670px] w-full border border-gray-300 rounded-lg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Initializing Canvas...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="h-[670px] w-full border border-gray-300 rounded-lg overflow-hidden shadow-lg"
      style={{ height: "670px" }}
    >
      {fileData && (
        <ExcalidrawWrapper
          theme="light"
          whiteboard={getInitialElements()}
          onChange={(elements: any) => setWhiteBoardData(elements)}
          UIOptions={{
            canvasActions: {
              saveToActiveFile: false,
              loadScene: false,
              export: false,
              toggleTheme: false,
            },
          }}
        />
      )}
    </div>
  );
}
