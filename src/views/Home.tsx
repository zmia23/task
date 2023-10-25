import { useNavigate } from "react-router"
import { Button, btnColors, btnShapes } from "../components/button/Button"

import DogEmoji from '../assets/android-chrome-192x192.png'

import '../styles/home-view.css'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className='background-container'>
      <div className='center-container'>
        <div className='image-container'>
          <img src={ DogEmoji }/>
        </div>
        <div className='title-conatiner'>
          Hello World
        </div>
        <div className='alt-text-container'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet diam odio. Mauris viverra convallis congue. Suspendisse pellentesque id orci at iaculis. Vestibulum faucibus efficitur est
        </div>
        <div className='btn-conatiner'>
          <Button shape={ btnShapes.default } color={ btnColors.magenta } title='Get Started' onClick={ () => navigate('/about') }> Get Started</Button>
        </div>
      </div>
    </div>
  )
} 

export default Home