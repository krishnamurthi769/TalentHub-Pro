# TalentHub Pro Design Guidelines

## Design Approach: Professional Data Dashboard System
**Selected Approach:** Design System Approach using modern dashboard patterns inspired by Linear, Notion, and professional analytics platforms.

**Justification:** TalentHub Pro is a utility-focused professional tool requiring clear data presentation, efficient workflows, and trustworthy visual hierarchy for career analysis results.

## Core Design Elements

### A. Color Palette
**Light Mode:**
- Primary: 218 30% 20% (Deep blue-gray for professional authority)
- Surface: 220 20% 98% (Clean background)
- Success: 142 69% 45% (Skills match indicators)
- Warning: 38 90% 55% (Missing skills alerts)
- Text Primary: 220 20% 15%
- Text Secondary: 220 15% 40%

**Dark Mode:**
- Primary: 218 25% 75% (Lighter blue-gray for contrast)
- Surface: 220 25% 8% (Rich dark background)
- Success: 142 55% 55% (Accessible green)
- Warning: 38 85% 65% (Accessible amber)
- Text Primary: 220 20% 90%
- Text Secondary: 220 15% 70%

### B. Typography
**Primary Font:** Inter (via Google Fonts CDN)
- Headings: 600-700 weight, optimized line-height
- Body: 400-500 weight for readability
- Data/Numbers: 500-600 weight for emphasis

**Hierarchy:**
- Page titles: text-3xl font-semibold
- Section headers: text-xl font-medium  
- Card titles: text-lg font-medium
- Body text: text-base font-normal
- Captions/metadata: text-sm font-normal

### C. Layout System
**Spacing Units:** Consistent use of Tailwind units 2, 4, 6, 8, 12
- Component padding: p-6, p-8
- Section margins: mb-8, mb-12
- Card spacing: gap-4, gap-6
- Form elements: space-y-4

**Grid System:**
- Main content: max-width-6xl mx-auto
- Dashboard sections: CSS Grid with responsive breakpoints
- Cards: Flexbox layouts with consistent gap-6

### D. Component Library

**Input Form:**
- Large textarea fields with rounded-lg borders
- Floating labels with smooth transitions
- Submit button: Primary color with subtle shadow
- Form validation states with colored borders

**Results Dashboard:**
- **Match Score Circle:** Large circular progress indicator (120px) with animated fill
- **Data Cards:** Clean white/dark cards with subtle shadows, rounded-lg corners
- **Skill Tags:** Pill-shaped badges with category-based colors
- **Progress Bars:** Horizontal bars for market demand visualization
- **Navigation:** Sticky header with section jump links

**Charts & Visualizations:**
- Career roadmap: Node-based graph with connecting lines
- Market demand: Horizontal bar charts with gradient fills
- Use Chart.js or similar library for consistent styling

**Interactive Elements:**
- Buttons: Consistent padding (px-6 py-2), rounded-md
- Hover states: Subtle opacity and shadow changes
- Loading states: Skeleton components matching final layout

### E. Key Design Patterns

**Professional Hierarchy:**
- Clear visual separation between input and results phases
- Progressive disclosure: Summary → Detailed Analysis → Recommendations
- Consistent card-based layout for scannable information

**Data Presentation:**
- Large, prominent numbers for key metrics (match percentage)
- Color-coded indicators for quick visual parsing
- Grouped related information in logical sections
- Generous whitespace for reduced cognitive load

**User Flow:**
- Single-page application with smooth transitions
- Clear call-to-action progression
- Immediate visual feedback for form submissions
- Results organized in logical, scannable sections

## Accessibility & Polish
- High contrast ratios in both light and dark modes
- Consistent focus states for keyboard navigation
- Responsive design for tablet and mobile viewing
- Loading states and error handling with clear messaging
- Export functionality with clear visual indication

This design system prioritizes clarity, professionalism, and efficient data consumption - essential for a career analysis tool where users need to quickly understand complex recommendations and make informed decisions.