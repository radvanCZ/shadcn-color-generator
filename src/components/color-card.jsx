'use client';

import React, { useState, useEffect } from 'react';
import { useColors } from '@/context/color-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ColorSlider from '@/components/color-slider';
import { toOklchString, getContrastColor } from '@/lib/color-utils';

// Default color to use when no color is available
const DEFAULT_COLOR = { lightness: 0.5, chroma: 0.1 };

const ColorCard = ({ colorName }) => {
  // If no color name provided, render placeholder
  if (!colorName) {
    return (
      <Card className="h-full">
        <CardContent className="flex items-center justify-center h-full">
          <p className="text-muted-foreground">No color selected</p>
        </CardContent>
      </Card>
    );
  }
  
  // Get values from context
  const { config, hue, updateColor, isDarkMode } = useColors() || {};
  
  // Set initial tab based on current theme
  const initialTab = isDarkMode ? 'dark' : 'light';
  const [activeTab, setActiveTab] = useState(initialTab);
  
  // Update activeTab when isDarkMode changes
  useEffect(() => {
    setActiveTab(isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);
  
  // Make sure config exists to prevent errors
  const safeConfig = config || { light: {}, dark: {} };
  
  // Use current theme if no valid tab selected
  const themeToUse = activeTab || (isDarkMode ? 'dark' : 'light');
  
  // Get theme colors or use empty object if not available
  const themeColors = safeConfig[themeToUse] || {};
  
  // Get the specific color or use default if not available
  const color = themeColors[colorName] || DEFAULT_COLOR;
  
  // Generate the actual color with the current hue
  const colorValue = toOklchString({ 
    lightness: color.lightness || DEFAULT_COLOR.lightness, 
    chroma: color.chroma || DEFAULT_COLOR.chroma, 
    hue: hue || '0deg' 
  });
  
  // Get contrast color for text
  const textColor = getContrastColor(color.lightness || DEFAULT_COLOR.lightness);
  
  // Handle lightness change
  const handleLightnessChange = (value) => {
    if (updateColor && themeToUse && colorName) {
      updateColor(themeToUse, colorName, 'lightness', value);
    }
  };
  
  // Handle chroma change
  const handleChromaChange = (value) => {
    if (updateColor && themeToUse && colorName) {
      updateColor(themeToUse, colorName, 'chroma', value);
    }
  };
  
  // Format the color name for display
  const formattedName = colorName.replace(/-/g, ' ');
  
  // Get light theme color values
  const lightColor = safeConfig.light[colorName] || DEFAULT_COLOR;
  
  // Get dark theme color values
  const darkColor = safeConfig.dark[colorName] || DEFAULT_COLOR;
  
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium capitalize">
          {formattedName}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div 
          className="h-24 rounded-md flex items-center justify-center p-4"
          style={{ backgroundColor: colorValue, color: textColor }}
        >
          <code className="text-xs font-mono">{colorValue}</code>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full">
            <TabsTrigger value="light" className="flex-1">Light</TabsTrigger>
            <TabsTrigger value="dark" className="flex-1">Dark</TabsTrigger>
          </TabsList>
          <TabsContent value="light" className="space-y-4 pt-4">
            <ColorSlider 
              label="Lightness" 
              value={lightColor.lightness || DEFAULT_COLOR.lightness} 
              onChange={handleLightnessChange} 
            />
            <ColorSlider 
              label="Chroma" 
              value={lightColor.chroma || DEFAULT_COLOR.chroma} 
              onChange={handleChromaChange} 
              max={0.4} 
            />
          </TabsContent>
          <TabsContent value="dark" className="space-y-4 pt-4">
            <ColorSlider 
              label="Lightness" 
              value={darkColor.lightness || DEFAULT_COLOR.lightness}  
              onChange={handleLightnessChange} 
            />
            <ColorSlider 
              label="Chroma" 
              value={darkColor.chroma || DEFAULT_COLOR.chroma}  
              onChange={handleChromaChange} 
              max={0.4} 
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ColorCard;