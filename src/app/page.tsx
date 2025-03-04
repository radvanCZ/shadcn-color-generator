'use client';

import React from 'react';
import { useColors } from '@/context/color-context';
import { Button } from '@/components/ui/button';
import HueSlider from '@/components/hue-slider';
import ColorGrid from '@/components/color-grid';
import ThemeMode from '@/components/theme-mode';
import ExportButton from '@/components/export-button';
import ThemeVisualizer from '@/components/theme-visualizer';
import { RefreshCw } from 'lucide-react';

export default function Home() {
  const { resetToDefaults } = useColors();
  
  return (
    <main className="min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">shadcn Color Generator</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={resetToDefaults} size="sm">
              <RefreshCw size={16} className="mr-2" />
              Reset
            </Button>
            <ThemeMode />
          </div>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-8">
        <HueSlider />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ColorGrid />
          </div>
          
          <div className="space-y-8">
            <ThemeVisualizer />
            <ExportButton />
          </div>
        </div>
      </div>
      
      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          <p>shadcn Color Generator - Generate beautiful color schemes with OKLCH</p>
        </div>
      </footer>
    </main>
  );
}