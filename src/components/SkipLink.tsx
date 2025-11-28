/**
 * SkipLink component provides a skip navigation link for keyboard users
 * to bypass the navigation menu and jump directly to main content.
 * 
 * This is a WCAG 2.1 Level A requirement (2.4.1 Bypass Blocks)
 * 
 * Requirements: 5.1, 5.3 - Accessibility and keyboard navigation
 */

export const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="skip-link"
      aria-label="Skip to main content"
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;
