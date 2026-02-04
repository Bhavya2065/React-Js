import styles from "./Container.module.css"

export default function Wrapper({ children, color = "red", data = null }) {
    // If data prop is provided, render Container-style layout
    if (data) {
        return (
            <>
                <h1>{data}</h1>
                <div className={styles.container}>{children}</div>
            </>
        )
    }

    // Default Wrapper-style layout with color prop
    return (
        <>
            <div style={{ 
                color: color, 
                border: "10px solid green", 
                width: "600px", 
                padding: "5px", 
                margin: "10px" 
            }}>
                {children}
            </div>
        </>
    )
}

/*
 * WHAT IS CHILDREN PROP?
 * ====================
 * - children is a special prop in React that represents any content passed between component tags
 * - It's automatically available and cannot be renamed
 * - Access via: props.children or destructure { children }
 * - Can be text, elements, components, or any JSX
 * 
 * EXAMPLES:
 * --------
 * 1. Single child:
 *    <Wrapper><h1>Hello</h1></Wrapper>
 *    children = <h1>Hello</h1>
 * 
 * 2. Multiple children:
 *    <Wrapper><h1>Hello</h1><p>World</p></Wrapper>
 *    children = [<h1>Hello</h1>, <p>World</p>]
 * 
 * 3. Text as child:
 *    <Wrapper>Hello World</Wrapper>
 *    children = "Hello World"
 * 
 * 4. Component as child:
 *    <Wrapper><OtherComponent /></Wrapper>
 *    children = <OtherComponent />
 * 
 * WHY USE CHILDREN?
 * ================
 * - Allows components to be composition-friendly
 * - Enables wrapper/layout components
 * - Keeps component reusable and flexible
 * - Promotes component encapsulation
 * 
 * BEST PRACTICES:
 * ===============
 * - Always use children for content wrappers
 * - Combine with other props for styling/behavior
 * - Use prop destructuring for cleaner code
 * - Validate children type if needed
 * - Don't modify children, only pass them through
 * ========================================
 */

/*
 * USAGE EXAMPLES:
 * ===============
 * 
 * 1. As Wrapper with color:
 *    <Wrapper color="blue">
 *      <h1>What is your Name</h1>
 *    </Wrapper>
 * 
 * 2. As Wrapper with default color:
 *    <Wrapper>
 *      <h1>Hello Everyone</h1>
 *    </Wrapper>
 * 
 * 3. As Container with data:
 *    <Wrapper data="Secure Data">
 *      <h1>Hello</h1>
 *      <p>This is inside container</p>
 *    </Wrapper>
 * 
 * COMPONENT FEATURES:
 * ===================
 * - Flexible: Works as both Wrapper and Container
 * - Reusable: Can be used in multiple ways
 * - Styled: Supports both inline styles and CSS Modules
 * - Props: color (for Wrapper mode) and data (for Container mode)
 * - Children: Accepts any content passed between tags
 */