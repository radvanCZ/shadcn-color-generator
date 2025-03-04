'use client';

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import FormPreview from '@/components/form-preview';

const ThemeVisualizer = () => {
  const [counter, setCounter] = useState(0);
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Preview</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="components">
          <TabsList className="mb-6">
            <TabsTrigger value="components">UI Components</TabsTrigger>
            <TabsTrigger value="form">Form</TabsTrigger>
          </TabsList>
          
          <TabsContent value="components" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Buttons</h3>
                <div className="flex flex-wrap gap-2">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Badges</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Card content and description, providing details about this card.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-primary text-primary-foreground">
                  <CardHeader>
                    <CardTitle>Primary Card</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>A card with primary color background and appropriate text color.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-secondary text-secondary-foreground">
                  <CardHeader>
                    <CardTitle>Secondary Card</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>A card with secondary color background and text.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Interactive Example</h3>
              <div className="p-4 bg-card text-card-foreground rounded-lg">
                <p className="mb-4">Click the button to increment the counter:</p>
                <div className="flex items-center gap-4">
                  <Button onClick={() => setCounter(counter + 1)}>
                    Increment
                  </Button>
                  <Badge variant="outline" className="text-lg">
                    {counter}
                  </Badge>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="form">
            <FormPreview />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ThemeVisualizer;