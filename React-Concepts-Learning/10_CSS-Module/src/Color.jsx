import styles from './redBox.module.css'
import style from './blueBox.module.css'
import cardStyles from './card.module.css'

export default function RedBox() {
  return <div className={styles.box}>Red Box</div>
}

export function BlueBox() {
  return <div className={style.box}>Blue Box</div>
}

export function Card() {
  return (
    <div className={cardStyles.box} style={{background: "red"}}>
        <h2 className={cardStyles["box-title"]} style={{fontSize: "40px", fontWeight: "200"}}>Hello CSS Modules</h2>
    </div>
  )
}

/*
 * ========================================
 * NOTES: Adding CSS in React
 * ========================================
 * 
 * There are multiple ways to add CSS in React:
 * 
 * 1. CSS MODULES (Used in this file)
 *    - Import CSS file as module: import styles from './file.module.css'
 *    - Access classes: className={styles.className}
 *    - Advantages: Scoped CSS, no class name conflicts, easy to maintain
 *    - Best for: Medium to large projects with component-specific styling
 * 
 * 2. INLINE STYLES
 *    - Define as JavaScript object: const styles = { color: 'red', fontSize: '16px' }
 *    - Use camelCase for properties: backgroundColor (not background-color)
 *    - Apply: style={styles} or style={{ color: 'red' }}
 *    - Advantages: Dynamic styling, co-located with component
 *    - Disadvantages: No media queries, no pseudo-selectors directly
 * 
 * 3. REGULAR CSS FILES
 *    - Import CSS globally: import './App.css'
 *    - Use class names: className="box"
 *    - Advantages: Simple, familiar to beginners
 *    - Disadvantages: Global scope, potential class name conflicts
 * 
 * 4. TAILWIND CSS
 *    - Utility-first CSS framework
 *    - Install: npm install -D tailwindcss
 *    - Use: className="bg-red-500 p-4 rounded"
 *    - Advantages: Fast development, consistent design system
 * 
 * 5. STYLED-COMPONENTS (CSS-in-JS)
 *    - Install: npm install styled-components
 *    - Create styled components: const StyledBox = styled.div`...CSS...`
 *    - Advantages: Full JavaScript power, dynamic styling, component-scoped
 * 
 * 6. SASS/SCSS
 *    - More powerful CSS with variables, nesting, mixins
 *    - Install: npm install sass
 *    - Import: import './file.scss'
 *    - Can be used with CSS Modules: './file.module.scss'
 * 
 * ========================================
 * BEST PRACTICES:
 * ========================================
 * - Use CSS Modules for component-specific styles (like in this file)
 * - Use inline styles for dynamic/conditional styling
 * - Use Tailwind or utility classes for rapid development
 * - Keep CSS organized and co-located with components
 * - Avoid inline styles for complex styling (use CSS/Modules instead)
 * - Use semantic class names that describe the element's purpose
 * 
 * ========================================
 * NOTES FROM CARD.JSX:
 * ========================================
 * 
 * - Inline CSS applies first and then external CSS applies (CSS Modules override inline styles in cascade)
 * - When defining inline styles, use double curly braces: {{key: "value"}}
 *   First {} is for JSX expression, second {} is for JavaScript object literal
 * - When class names have a hyphen (like 'box-title'), access them using bracket notation:
 *   styles["box-title"] instead of styles.boxTitle
 * - This allows mixing CSS Modules (scoped styles) with inline styles (dynamic values)
 * - CSS Modules classes are scoped to the component, preventing naming conflicts
 * ========================================
 */
