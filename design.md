# Synovra Technologies Design System Reference

## Overview
This document captures the comprehensive design system and style references used across the Synovra Technologies website project. The design follows a modern, professional B2B approach with consistent branding, responsive design principles, and accessibility considerations.

---

## 🎨 Brand Colors & Color Hierarchy

### Primary Brand Colors
```css
--synovra-primary: #ed9a2f;    /* Primary brand orange - Main CTAs, highlights */
--synovra-accent: #fe8d02;     /* Accent orange - Hover states, gradients */
```

### Text Colors (Hierarchy)
```css
--synovra-text-primary: #333333;    /* Primary headings, important text */
--synovra-text-secondary: #666666;  /* Body text, descriptions */
--synovra-text-muted: #999999;      /* Meta text, labels, subtle content */
```

### Background & Surface Colors
```css
--synovra-background: #ffffff;      /* Main background */
--synovra-light-bg: #f8f9fa;       /* Section backgrounds, cards */
--synovra-dark-bg: #2f190b;        /* Dark theme variant */
```

### Border & Divider Colors
```css
--synovra-border: #e9ecef;          /* Standard borders */
--synovra-border-light: #f1f3f4;    /* Subtle dividers */
```

### Contextual Colors
```css
--problem-neutral: #6c757d;         /* Problem statements */
--solution-highlight: var(--synovra-primary); /* Solution highlights */
```

---

## 🔤 Typography System

### Font Family
```css
--font-family-primary: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-family-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

**Poppins** is the primary font choice, providing:
- Modern, professional appearance
- Excellent readability at all sizes
- Strong weight variations (300-700)
- Good international character support

### Font Weight Scale
```css
--font-weight-light: 300;      /* Subtle text, quotes */
--font-weight-normal: 400;     /* Body text, paragraphs */
--font-weight-medium: 500;     /* Navigation, labels */
--font-weight-semibold: 600;   /* Subheadings, emphasis */
--font-weight-bold: 700;       /* Main headings, strong emphasis */
```

### Typography Hierarchy

#### Display Headings (Hero Sections)
```css
.display-1: 5rem (80px) - Bold - Line height: 1.1
.display-2: 4rem (64px) - Bold - Line height: 1.1  
.display-3: 3.5rem (56px) - Semibold - Line height: 1.3
```

#### Standard Headings
```css
h1: 3rem (48px) - Bold - Line height: 1.3
h2: 2.5rem (40px) - Semibold - Line height: 1.3
h3: 2rem (32px) - Semibold - Line height: 1.3
h4: 1.75rem (28px) - Medium - Line height: 1.5
h5: 1.5rem (24px) - Medium - Line height: 1.5
h6: 1.25rem (20px) - Medium - Line height: 1.5
```

#### Body Text & Components
```css
Body text: 1rem (16px) - Normal - Line height: 1.6
Large text: 1.125rem (18px) - Normal - Line height: 1.6
Small text: 0.875rem (14px) - Normal - Line height: 1.5
Extra small: 0.75rem (12px) - Normal - Line height: 1.5

Button text: 1rem (16px) - Medium
Navigation: 0.9375rem (15px) - Medium
Card titles: 1.25rem (20px) - Semibold
Card descriptions: 0.9375rem (15px) - Normal
```

### Responsive Typography
The system uses mobile-first responsive typography that scales up:

- **Mobile (< 576px)**: Base sizes
- **Tablet (576px+)**: Slight increase in display sizes
- **Desktop (768px+)**: Enhanced display sizes
- **Large Desktop (992px+)**: Full scale with larger base text (18px)

---

## 📏 Spacing System (8px Grid)

### Base Spacing Scale
```css
--space-1: 8px;      /* 0.5rem - Tight spacing */
--space-2: 16px;     /* 1rem - Standard gap */
--space-3: 24px;     /* 1.5rem - Comfortable spacing */
--space-4: 32px;     /* 2rem - Section spacing */
--space-5: 40px;     /* 2.5rem - Large spacing */
--space-6: 48px;     /* 3rem - Major spacing */
--space-8: 64px;     /* 4rem - Section padding */
--space-10: 80px;    /* 5rem - Large section gap */
--space-12: 96px;    /* 6rem - Major section padding */
```

### Application Guidelines
- **Components**: Use space-1, space-2, space-3
- **Card/Container padding**: space-3, space-4
- **Section spacing**: space-6, space-8
- **Major layout gaps**: space-10, space-12

---

## 🎛️ Component System

### Buttons

#### Primary Button
```css
background: linear-gradient(135deg, var(--synovra-primary), var(--synovra-accent));
color: white;
padding: 12px 32px;
border-radius: 6px;
font-weight: medium (500);
min-height: 48px; /* Touch-friendly */
```

#### Secondary Button
```css
background: transparent;
border: 2px solid var(--synovra-primary);
color: var(--synovra-primary);
/* Hover: fills with primary color */
```

#### Button Sizes
- **Small**: 40px height, 8px 24px padding
- **Medium**: 48px height, 12px 32px padding (default)
- **Large**: 56px height, 16px 48px padding

### Cards

#### Standard Card
```css
background: white;
border: 1px solid var(--synovra-border);
border-radius: 12px;
padding: 24px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
/* Hover: translateY(-4px) + enhanced shadow */
```

#### Card Variants
- **Feature Card**: Orange accent border on hover
- **Stat Card**: Centered, gradient background
- **Minimal Card**: No border/shadow until hover
- **Article Card**: Image header with rounded top corners

### Forms
```css
input, select, textarea {
  min-height: 48px; /* Touch-friendly */
  padding: 12px 16px;
  border: 1px solid var(--synovra-border);
  border-radius: 8px;
  font-size: 16px; /* Prevents zoom on iOS */
}

/* Focus state */
:focus {
  border-color: var(--synovra-primary);
  box-shadow: 0 0 0 2px rgba(237, 154, 47, 0.25);
}
```

---

## 📐 Layout System

### Container System
```css
.container {
  max-width: 1140px; /* Desktop */
  margin: 0 auto;
  padding: 0 32px; /* Desktop */
}

/* Responsive padding */
Mobile: 16px
Tablet: 24px  
Desktop: 32px
```

### Grid System
12-column flexbox-based grid with responsive breakpoints:
- `.col-1` through `.col-12`
- Responsive variants: `.col-sm-*`, `.col-md-*`, `.col-lg-*`

### Breakpoints
```css
--bp-sm: 576px;   /* Small tablets */
--bp-md: 768px;   /* Tablets */  
--bp-lg: 992px;   /* Desktop */
--bp-xl: 1200px;  /* Large desktop */
--bp-2xl: 1400px; /* Extra large */
```

---

## 🌟 Visual Effects

### Shadows
```css
--shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);     /* Subtle */
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);      /* Light */
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);     /* Standard */
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);    /* Elevated */
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);    /* Floating */
```

### Border Radius
```css
--border-radius-sm: 4px;    /* Buttons, inputs */
--border-radius-md: 8px;    /* Standard components */
--border-radius-lg: 12px;   /* Cards */
--border-radius-xl: 16px;   /* Large components */
--border-radius-2xl: 24px;  /* Hero sections */
```

### Transitions
```css
--transition-fast: all 0.15s ease;      /* Micro-interactions */
--transition-normal: all 0.3s ease;     /* Standard animations */
--transition-slow: all 0.5s ease;       /* Large movements */
```

---

## 📱 Responsive Design Principles

### Mobile-First Approach
1. Design starts with mobile (320px+)
2. Progressive enhancement for larger screens
3. Touch-friendly interactive elements (44px+ minimum)
4. Readable text without zooming (16px+ base font)

### Component Behavior
- **Navigation**: Hamburger menu on mobile, horizontal on desktop
- **Cards**: Single column on mobile, grid on tablet/desktop  
- **Typography**: Scales down on mobile, full scale on desktop
- **Spacing**: Reduced on mobile, expanded on desktop

### Touch Considerations
- Minimum touch target: 44px
- Recommended touch target: 48px
- Interactive elements have adequate spacing
- Form inputs are touch-optimized

---

## ♿ Accessibility Features

### Focus Management
```css
:focus-visible {
  outline: 2px solid var(--synovra-primary);
  outline-offset: 2px;
}
```

### Motion Preferences
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### High Contrast Support
- Border weights increase in high contrast mode
- Focus indicators remain visible
- Color contrast ratios meet WCAG AA standards

### Screen Reader Support
- Semantic HTML structure
- ARIA labels where needed
- Skip navigation links
- Descriptive button and link text

---

## 🎯 Design Patterns & Best Practices

### Color Usage Guidelines
1. **Primary orange**: Use sparingly for key CTAs and brand moments
2. **Text hierarchy**: Always follow the established color hierarchy
3. **Backgrounds**: Prefer light backgrounds with sufficient contrast
4. **Gradients**: Use the primary-to-accent gradient for important elements

### Component Composition
1. **Consistency**: Use established components rather than one-offs
2. **Hierarchy**: Visual hierarchy guides user attention
3. **Whitespace**: Generous spacing improves readability
4. **Feedback**: Interactive elements provide clear feedback

### Content Guidelines
1. **Headings**: Follow semantic hierarchy (h1 → h6)
2. **Buttons**: Use action verbs, keep text concise
3. **Cards**: Lead with benefits, include clear CTAs
4. **Forms**: Clear labels, helpful error messages

---

## 🔧 Technical Implementation

### CSS Architecture
- **CSS Custom Properties**: All design tokens as CSS variables
- **Mobile-First**: Media queries progress upward
- **Component-Based**: Modular, reusable styles
- **BEM Naming**: Block__Element--Modifier convention

### Performance Considerations
- **Font Loading**: Google Fonts with display=swap
- **Critical CSS**: Above-fold styles inlined
- **Minimal Reflows**: Efficient animations using transform/opacity
- **Optimized Images**: Proper sizing and compression

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (last 2 versions)
- **Graceful Degradation**: Fallbacks for older browsers
- **Progressive Enhancement**: Features work without JavaScript

---

## 📋 File Structure Reference

### Core Theme Files
- `synovra_responsive_system.css` - Complete responsive framework
- `synovra_hero_theme.css` - Hero section styling
- `synovra_header_theme.css` - Navigation and header
- `synovra_cards_theme.css` - Card component system
- `synovra_footer_theme.css` - Footer styling
- `problem_solution_theme.css` - Problem/solution sections

### Implementation Files
- `synovra_unified_website.html` - Complete website implementation
- Individual component HTML files for reference

---

This design system ensures consistency, accessibility, and professional appearance across all Synovra Technologies digital touchpoints while maintaining flexibility for future enhancements.