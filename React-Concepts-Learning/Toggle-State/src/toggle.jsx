import { useState } from "react"

// Scenario 1: Show/Hide Name
export function Toggle() {
    const [name, setName] = useState(null)
    
    function showName() {
        setName("Bhavya")
    }
    
    function hideName() {
        setName(null)
    }

    return <div>
        <h1>Name: {name}</h1>
        <button onClick={showName}>Show</button>
        <button onClick={hideName}>Hide</button>
    </div>
}

// Scenario 2: Simple Boolean Toggle (Dark Mode / Light Mode)
export function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false)
    
    function toggleTheme() {
        setIsDarkMode(!isDarkMode)
    }

    return <div style={{ backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000', padding: '20px' }}>
        <h2>Theme: {isDarkMode ? 'Dark Mode' : 'Light Mode'}</h2>
        <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
}

// Scenario 3: Multiple Toggles (Sidebar, Notifications, Settings)
export function MultipleToggles() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [notificationsOn, setNotificationsOn] = useState(true)
    const [settingsOpen, setSettingsOpen] = useState(false)

    return <div style={{ padding: '20px' }}>
        <h2>Multiple Toggles</h2>
        <div style={{ marginBottom: '10px' }}>
            <p>Sidebar: {sidebarOpen ? 'Open' : 'Closed'}</p>
            <button onClick={() => setSidebarOpen(!sidebarOpen)}>Toggle Sidebar</button>
        </div>
        <div style={{ marginBottom: '10px' }}>
            <p>Notifications: {notificationsOn ? 'On' : 'Off'}</p>
            <button onClick={() => setNotificationsOn(!notificationsOn)}>Toggle Notifications</button>
        </div>
        <div>
            <p>Settings: {settingsOpen ? 'Open' : 'Closed'}</p>
            <button onClick={() => setSettingsOpen(!settingsOpen)}>Toggle Settings</button>
        </div>
    </div>
}

// Scenario 4: Toggle with Counter (Increment/Decrement)
export function CounterToggle() {
    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(true)

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    function toggleVisibility() {
        setIsVisible(!isVisible)
    }

    return <div style={{ padding: '20px', border: '1px solid #ccc' }}>
        <h2>Counter Toggle</h2>
        <button onClick={toggleVisibility}>
            {isVisible ? 'Hide Counter' : 'Show Counter'}
        </button>
        {isVisible && (
            <div style={{ marginTop: '10px' }}>
                <p>Count: {count}</p>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        )}
    </div>
}

// Scenario 5: Toggle with Conditional Text
export function ConditionalToggle() {
    const [isSubscribed, setIsSubscribed] = useState(false)

    function toggleSubscription() {
        setIsSubscribed(!isSubscribed)
    }

    return <div style={{ padding: '20px', backgroundColor: isSubscribed ? '#e8f5e9' : '#ffebee' }}>
        <h2>Subscription Status</h2>
        <p>{isSubscribed ? '✅ You are subscribed!' : '❌ You are not subscribed'}</p>
        <button onClick={toggleSubscription}>
            {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
        </button>
    </div>
}

// Scenario 6: Password Visibility Toggle
export function PasswordToggle() {
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    return <div style={{ padding: '20px' }}>
        <h2>Password Visibility Toggle</h2>
        <div style={{ marginBottom: '10px' }}>
            <input 
                type={showPassword ? 'text' : 'password'} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}   
                placeholder="Enter password"
            />
        </div>
        <button onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? '👁️ Hide' : '👁️ Show'} Password
        </button>
    </div>
}

// Scenario 7: Accordion Toggle (Expand/Collapse)
export function AccordionToggle() {
    const [isExpanded, setIsExpanded] = useState(false)

    return <div style={{ padding: '20px', border: '1px solid #ddd' }}>
        <button onClick={() => setIsExpanded(!isExpanded)} style={{ cursor: 'pointer', fontSize: '16px' }}>
            {isExpanded ? '▼' : '▶'} Click to expand
        </button>
        {isExpanded && (
            <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#f5f5f5' }}>
                <p>This is the expanded content. You can toggle it open and closed!</p>
            </div>
        )}
    </div>
}

// Scenario 8: Favorite/Like Toggle
export function LikeToggle() {
    const [isLiked, setIsLiked] = useState(false)

    return <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Like Button</h2>
        <button 
            style={{ 
                fontSize: '30px', 
                backgroundColor: isLiked ? '#ff1744' : '#ccc',
                border: 'none',
                padding: '10px 20px',
                cursor: 'pointer',
                borderRadius: '20px'
            }}
            onClick={() => setIsLiked(!isLiked)}
        >
            {isLiked ? '❤️ Liked' : '🤍 Like'}
        </button>
        <p>{isLiked ? 'You liked this!' : 'Like this content'}</p>
    </div>
}