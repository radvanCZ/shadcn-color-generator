'use client';

import React, { useState } from 'react';
import { useColors } from '@/context/color-context';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ClipboardCopy, Download } from 'lucide-react';
import { copyToClipboard } from '@/lib/color-utils';

const ExportButton = () => {
  const { generatedCss, exportToIni } = useColors();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('css');
  
  // Handle copy to clipboard
  const handleCopy = async () => {
    const content = activeTab === 'css' ? generatedCss : exportToIni();
    const success = await copyToClipboard(content);
    
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  
  // Handle download
  const handleDownload = () => {
    const content = activeTab === 'css' ? generatedCss : exportToIni();
    const filename = activeTab === 'css' ? 'global.css' : 'colors.ini';
    const type = activeTab === 'css' ? 'text/css' : 'text/plain';
    
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Export Theme</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="css">CSS</TabsTrigger>
            <TabsTrigger value="ini">INI Config</TabsTrigger>
          </TabsList>
          
          <TabsContent value="css" className="space-y-4">
            <div className="relative">
              <div className="max-h-60 overflow-auto p-4 bg-muted rounded-md font-mono text-xs">
                <pre>{generatedCss}</pre>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="ini" className="space-y-4">
            <div className="relative">
              <div className="max-h-60 overflow-auto p-4 bg-muted rounded-md font-mono text-xs">
                <pre>{exportToIni()}</pre>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex gap-2 mt-4">
          <Button onClick={handleCopy} className="flex-1">
            <ClipboardCopy size={16} className="mr-2" />
            {copied ? 'Copied!' : 'Copy to Clipboard'}
          </Button>
          <Button onClick={handleDownload} variant="outline" className="flex-1">
            <Download size={16} className="mr-2" />
            {activeTab === 'css' ? 'Download CSS' : 'Download INI'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExportButton;