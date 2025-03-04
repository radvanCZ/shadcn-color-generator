/**
 * Utility functions for color manipulation
 */

/**
 * Converts a color object to an OKLCH CSS string
 * @param {Object} color - Color object with lightness, chroma, and hue
 * @returns {string} OKLCH CSS value
 */
export const toOklchString = ({ lightness, chroma, hue }) => {
    return `oklch(${lightness} ${chroma} ${hue})`;
  };
  
  /**
   * Formats a CSS object to a string
   * @param {Object} cssObj - CSS object
   * @returns {string} Formatted CSS string
   */
  export const formatCss = (cssObj) => {
    let result = '';
    
    for (const selector in cssObj) {
      result += `${selector} {\n`;
      
      for (const prop in cssObj[selector]) {
        result += `  ${prop}: ${cssObj[selector][prop]};\n`;
      }
      
      result += '}\n\n';
    }
    
    return result;
  };
  
  /**
   * Parses a config object and generates CSS
   * @param {Object} config - Configuration object with light and dark themes
   * @param {string} hue - Color hue (e.g. "250deg")
   * @returns {string} Generated CSS
   */
  export const generateCss = (config, hue) => {
    const cssObj = {
      ':root': {},
      '.dark': {}
    };
    
    // Process light theme
    Object.entries(config.light).forEach(([key, { lightness, chroma }]) => {
      cssObj[':root'][`--${key}`] = toOklchString({ lightness, chroma, hue });
    });
    
    // Process dark theme
    Object.entries(config.dark).forEach(([key, { lightness, chroma }]) => {
      cssObj['.dark'][`--${key}`] = toOklchString({ lightness, chroma, hue });
    });
    
    return formatCss(cssObj) + generateShadcnCssVars();
  };
  
  /**
   * Generates the shadcn CSS variables mapping
   * @returns {string} shadcn CSS variables mapping
   */
  export const generateShadcnCssVars = () => {
    return `@layer base {
    :root {
      --background: var(--background);
      --foreground: var(--foreground);
  
      --card: var(--card);
      --card-foreground: var(--card-foreground);
  
      --popover: var(--popover);
      --popover-foreground: var(--popover-foreground);
  
      --primary: var(--primary);
      --primary-foreground: var(--primary-foreground);
  
      --secondary: var(--secondary);
      --secondary-foreground: var(--secondary-foreground);
  
      --muted: var(--muted);
      --muted-foreground: var(--muted-foreground);
  
      --accent: var(--accent);
      --accent-foreground: var(--accent-foreground);
  
      --destructive: var(--destructive);
      --destructive-foreground: var(--destructive-foreground);
  
      --border: var(--border);
      --input: var(--input);
      --ring: var(--ring);
  
      /* Form specific variables */
      --form-background: var(--form-background);
      --form-foreground: var(--form-foreground);
      --form-placeholder: var(--form-placeholder);
      --form-focus-ring: var(--form-focus-ring);
      --form-error: var(--form-error);
      --form-valid: var(--form-valid);
      --form-disabled-bg: var(--form-disabled-bg);
      --form-disabled-fg: var(--form-disabled-fg);
  
      --radius: 0.5rem;
    }
  
    .dark {
      --background: var(--background);
      --foreground: var(--foreground);
  
      --card: var(--card);
      --card-foreground: var(--card-foreground);
  
      --popover: var(--popover);
      --popover-foreground: var(--popover-foreground);
  
      --primary: var(--primary);
      --primary-foreground: var(--primary-foreground);
  
      --secondary: var(--secondary);
      --secondary-foreground: var(--secondary-foreground);
  
      --muted: var(--muted);
      --muted-foreground: var(--muted-foreground);
  
      --accent: var(--accent);
      --accent-foreground: var(--accent-foreground);
  
      --destructive: var(--destructive);
      --destructive-foreground: var(--destructive-foreground);
  
      --border: var(--border);
      --input: var(--input);
      --ring: var(--ring);
      
      /* Form specific variables */
      --form-background: var(--form-background);
      --form-foreground: var(--form-foreground);
      --form-placeholder: var(--form-placeholder);
      --form-focus-ring: var(--form-focus-ring);
      --form-error: var(--form-error);
      --form-valid: var(--form-valid);
      --form-disabled-bg: var(--form-disabled-bg);
      --form-disabled-fg: var(--form-disabled-fg);
    }
  }`;
  };
  
  /**
   * Converts config values from strings to numbers
   * @param {Object} config - Configuration object with string values
   * @returns {Object} Configuration object with numeric values
   */
  export const parseConfig = (config) => {
    const result = { light: {}, dark: {} };
    
    Object.entries(config.light).forEach(([key, value]) => {
      const [lightness, chroma] = value.split(',').map(v => parseFloat(v.trim()));
      result.light[key] = { lightness, chroma };
    });
    
    Object.entries(config.dark).forEach(([key, value]) => {
      const [lightness, chroma] = value.split(',').map(v => parseFloat(v.trim()));
      result.dark[key] = { lightness, chroma };
    });
    
    return result;
  };
  
  /**
   * Copies text to clipboard
   * @param {string} text - Text to copy
   * @returns {Promise} Promise that resolves when text is copied
   */
  export const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.error('Failed to copy text: ', err);
      return false;
    }
  };
  
  /**
   * Generates a contrast color (black or white) based on lightness
   * @param {number} lightness - Lightness value (0-1)
   * @returns {string} CSS color value
   */
  export const getContrastColor = (lightness) => {
    return lightness > 0.6 ? '#000' : '#fff';
  };