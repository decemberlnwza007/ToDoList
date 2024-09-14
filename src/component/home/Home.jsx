import Navbar from "../navbar/navbar"
import ReactTypingEffect from 'react-typing-effect'
import './Home.css'

export default function Home() {
    return (
        <>

            <Navbar />
            <br />
            <br />
            <center>
            <ReactTypingEffect text={['Welcome']} className="typing" speed={80}/>
            </center>
        </>
    )
}