'use client';

import React from 'react';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

const ColorSlider = ({ 
  label, 
  value, 
  onChange, 
  min = 0, 
  max = 1, 
  step = 0.01,
  formatValue = (v) => v.toFixed(2)
}) => {
  // Ensure we have a valid value
  const safeValue = typeof value === 'number' ? value : 0;
  
  return (
    <div className="mb-4 space-y-2">
      <div className="flex justify-between items-center">
        <Label>{label}</Label>
        <span className="text-sm font-mono">{formatValue(safeValue)}</span>
      </div>
      <Slider
        value={[safeValue]}
        min={min}
        max={max}
        step={step}
        onValueChange={(values) => onChange(values[0])}
        className="mt-2"
      />
    </div>
  );
};

export default ColorSlider;