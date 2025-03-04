/**
 * Default color configuration for the shadcn theme
 */
export const defaultConfig = {
  "light": {
    "background": { lightness: 0.98, chroma: 0.015 },
    "foreground": { lightness: 0.20, chroma: 0.015 },
    "backgroundhover": { lightness: 0.1229, chroma: 0.015 },
    "colorhover": { lightness: 0.20, chroma: 0.015 },
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
    "form-inputbg": { lightness: 0.3, chroma: 0.12 },
    "form-inputcolor": { lightness: 0.91, chroma: 0.1229 },
    "form-border": { lightness: 0.25, chroma: 0.1229 },
  },

  "dark": {
    "background": { lightness: 0.15, chroma: 0.015 },
    "foreground": { lightness: 0.98, chroma: 0.015 },
    "backgroundhover": { lightness: 0.71 , chroma: 0.037 },
    "colorhover": { lightness: 0.27, chroma: 0.037 },      
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
    "border": { lightness: 0.92, chroma: 0.0058 },
    "input": { lightness: 0.92, chroma: 0.0058 },
    "ring": { lightness: 0.12, chroma: 0.0254 },
 
    // Form specific colors
    "form-background": { lightness: 0.34, chroma: 0.05 },
    "form-foreground": { lightness: 0.85, chroma: 0.015 },
    "form-inputbg": { lightness: 0.8, chroma: 0.06 },
    "form-inputcolor": { lightness: 0.21, chroma: 0.04 },
    "form-border": { lightness: 0.25, chroma: 0.07 },
  }
};


export const colorCategories = [
  {
    name: 'Base',
    colors: ['background', 'foreground','backgroundhover','colorhover', 'card', 'card-foreground', 'popover', 'popover-foreground']
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
    colors: ['form-background', 'form-foreground', 'form-inputbg', 'form-inputcolor', 'form-border']
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