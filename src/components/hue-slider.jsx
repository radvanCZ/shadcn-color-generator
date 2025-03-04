'use client';

import React, { useState } from 'react';
import { useColors } from '@/context/color-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { presetHues } from '@/lib/config-defaults';

const HueSlider = () => {
  const { hue, setHue } = useColors();
  const [customValue, setCustomValue] = useState(hue);
  
  // Extract numeric value from hue string (e.g. "250deg" -> 250)
  const numericValue = parseInt(hue, 10) || 0;
  
  // Handle slider change
  const handleSliderChange = (values) => {
    const newHue = `${values[0]}deg`;
    setHue(newHue);
    setCustomValue(newHue);
  };
  
  // Handle preset selection
  const handlePresetChange = (value) => {
    setHue(value);
    setCustomValue(value);
  };
  
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Global Hue</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <Slider
              value={[numericValue]}
              min={0}
              max={360}
              step={1}
              onValueChange={handleSliderChange}
              className="mt-2"
              aria-label="Hue"
            />
            <div className="h-4 mt-4 rounded-md w-full" style={{
              background: `linear-gradient(to right, 
                oklch(0.7 0.15 0deg), 
                oklch(0.7 0.15 60deg), 
                oklch(0.7 0.15 120deg), 
                oklch(0.7 0.15 180deg), 
                oklch(0.7 0.15 240deg), 
                oklch(0.7 0.15 300deg), 
                oklch(0.7 0.15 360deg))`
            }} />
          </div>
          
          <div className="w-full md:w-64">
            <Select value={hue} onValueChange={handlePresetChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a preset hue" />
              </SelectTrigger>
              <SelectContent>
                {presetHues.map((preset) => (
                  <SelectItem key={preset.value} value={preset.value}>
                    {preset.name} ({preset.value})
                  </SelectItem>
                ))}
                <SelectItem value={customValue}>Custom ({customValue})</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Current Hue:</span>
          <code className="px-2 py-1 rounded bg-muted text-muted-foreground text-sm font-mono">
            {hue}
          </code>
        </div>
      </CardContent>
    </Card>
  );
};

export default HueSlider;