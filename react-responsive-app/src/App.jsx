import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Analytics from './components/Analytics.jsx'
import Information from './components/Information.jsx'
import Newsletter from './components/Newsletter.jsx'
import FramerMotionTesting from './components/FramerMotionTesting.jsx'
import Cards from './components/Cards.jsx'
import Test from './components/Test.jsx'
import Test2 from './components/Test2.jsx'
import Test3 from './components/Test3.jsx'


function App() {
    const [count, setCount] = useState(0)

    return(
        <>
            <div>
                <Navbar />
                <Hero />
                <Analytics />
                <Newsletter />
                <Cards />

                {/* <Test />
                <Test2 />
                <Test3 /> */}

                {/* <FramerMotionTesting /> */}
                {/* <Information /> */}
            </div>
        </>
    );
}

export default App
