'use client';

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ColorCard from '@/components/color-card';
import { colorCategories } from '@/lib/config-defaults';

const ColorGrid = () => {
  // Debug output for categories
  console.log('Color categories:', colorCategories);
  
  return (
    <Tabs defaultValue="base" className="w-full">
      <TabsList className="mb-6">
        {colorCategories.map(category => (
          <TabsTrigger key={category.name} value={category.name.toLowerCase()}>
            {category.name}
          </TabsTrigger>
        ))}
      </TabsList>
      
      {colorCategories.map(category => {
        // Debug output for each category and its colors
        console.log(`Category ${category.name} has colors:`, category.colors);
        
        return (
          <TabsContent key={category.name} value={category.name.toLowerCase()}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.colors && category.colors.length > 0 ? (
                category.colors.map(colorName => {
                  // Debug output for each color name
                  console.log(`Rendering ColorCard for: ${colorName}`);
                  
                  // Only render if colorName is defined
                  return colorName ? (
                    <ColorCard key={colorName} colorName={colorName} />
                  ) : null;
                })
              ) : (
                <div>No colors defined for this category</div>
              )}
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
};

export default ColorGrid;