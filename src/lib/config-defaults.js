/**
 * Default color configuration for the shadcn theme
 */
export const defaultConfig = {
    "light": {
      "background": { lightness: 0.98, chroma: 0.015 },
      "foreground": { lightness: 0.20, chroma: 0.015 },
      "card": { lightness: 0.96, chroma: 0.015 },
      "card-foreground": { lightness: 0.20, chroma: 0.015 },
      "popover": { lightness: 0.98, chroma: 0.015 },
      "popover-foreground": { lightness: 0.20, chroma: 0.015 },
      "primary": { lightness: 0.50, chroma: 0.12 },
      "primary-foreground": { lightness: 0.98, chroma: 0.015 },
      "secondary": { lightness: 0.94, chroma: 0.03 },
      "secondary-foreground": { lightness: 0.20, chroma: 0.03 },
      "muted": { lightness: 0.94, chroma: 0.02 },
      "muted-foreground": { lightness: 0.50, chroma: 0.02 },
      "accent": { lightness: 0.94, chroma: 0.04 },
      "accent-foreground": { lightness: 0.20, chroma: 0.04 },
      "destructive": { lightness: 0.35, chroma: 0.12 },
      "destructive-foreground": { lightness: 0.98, chroma: 0.015 },
      "border": { lightness: 0.87, chroma: 0.01 },
      "input": { lightness: 0.87, chroma: 0.01 },
      "ring": { lightness: 0.83, chroma: 0.02 },
      
      // Form specific colors
      "form-background": { lightness: 0.98, chroma: 0.01 },
      "form-foreground": { lightness: 0.20, chroma: 0.015 },
      "form-placeholder": { lightness: 0.50, chroma: 0.01 },
      "form-focus-ring": { lightness: 0.50, chroma: 0.12 },
      "form-error": { lightness: 0.40, chroma: 0.15 },
      "form-valid": { lightness: 0.55, chroma: 0.15 },
      "form-disabled-bg": { lightness: 0.93, chroma: 0.01 },
      "form-disabled-fg": { lightness: 0.60, chroma: 0.01 }
    },
    "dark": {
      "background": { lightness: 0.15, chroma: 0.015 },
      "foreground": { lightness: 0.98, chroma: 0.015 },
      "card": { lightness: 0.17, chroma: 0.015 },
      "card-foreground": { lightness: 0.98, chroma: 0.015 },
      "popover": { lightness: 0.15, chroma: 0.015 },
      "popover-foreground": { lightness: 0.98, chroma: 0.015 },
      "primary": { lightness: 0.60, chroma: 0.12 },
      "primary-foreground": { lightness: 0.15, chroma: 0.015 },
      "secondary": { lightness: 0.20, chroma: 0.03 },
      "secondary-foreground": { lightness: 0.98, chroma: 0.03 },
      "muted": { lightness: 0.20, chroma: 0.02 },
      "muted-foreground": { lightness: 0.70, chroma: 0.02 },
      "accent": { lightness: 0.20, chroma: 0.04 },
      "accent-foreground": { lightness: 0.98, chroma: 0.04 },
      "destructive": { lightness: 0.38, chroma: 0.12 },
      "destructive-foreground": { lightness: 0.15, chroma: 0.015 },
      "border": { lightness: 0.25, chroma: 0.01 },
      "input": { lightness: 0.25, chroma: 0.01 },
      "ring": { lightness: 0.30, chroma: 0.02 },
      
      // Form specific colors
      "form-background": { lightness: 0.17, chroma: 0.01 },
      "form-foreground": { lightness: 0.98, chroma: 0.015 },
      "form-placeholder": { lightness: 0.65, chroma: 0.01 },
      "form-focus-ring": { lightness: 0.60, chroma: 0.12 },
      "form-error": { lightness: 0.55, chroma: 0.15 },
      "form-valid": { lightness: 0.60, chroma: 0.15 },
      "form-disabled-bg": { lightness: 0.20, chroma: 0.01 },
      "form-disabled-fg": { lightness: 0.45, chroma: 0.01 }
    }
  };
  
  export const colorCategories = [
    {
      name: 'Base',
      colors: ['background', 'foreground', 'card', 'card-foreground', 'popover', 'popover-foreground']
    },
    {
      name: 'Accent',
      colors: ['primary', 'primary-foreground', 'secondary', 'secondary-foreground', 'accent', 'accent-foreground']
    },
    {
      name: 'UI',
      colors: ['muted', 'muted-foreground', 'border', 'input', 'ring', 'destructive', 'destructive-foreground']
    },
    {
      name: 'Form',
      colors: ['form-background', 'form-foreground', 'form-placeholder', 'form-focus-ring', 'form-error', 'form-valid', 'form-disabled-bg', 'form-disabled-fg']
    }
  ];
  
  export const defaultHue = "250deg";
  
  export const presetHues = [
    { name: 'Blue', value: '250deg' },
    { name: 'Indigo', value: '280deg' },
    { name: 'Purple', value: '300deg' },
    { name: 'Pink', value: '325deg' },
    { name: 'Red', value: '0deg' },
    { name: 'Orange', value: '30deg' },
    { name: 'Yellow', value: '60deg' },
    { name: 'Green', value: '120deg' },
    { name: 'Teal', value: '180deg' },
    { name: 'Cyan', value: '200deg' }
  ];