import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Analytics from './components/Analytics.jsx'
import Information from './components/Information.jsx'
import Newsletter from './components/Newsletter.jsx'

function App() {
    const [count, setCount] = useState(0)

    return(
        <>
            <div>
                <Navbar />
                <Hero />
                <Analytics />
                <Newsletter />
                {/* <Information /> */}
            </div>
        </>
    );
}

export default App
