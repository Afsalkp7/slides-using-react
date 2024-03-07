import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import ImageComponent from './components/ImageComponent';
import { sliderImages } from './utils/constant/sliderImages';
function App() {
  
  return (
    <AwesomeSlider>
      {sliderImages.map((a)=><div><ImageComponent src={a} alt="sliders"/></div>)}
    </AwesomeSlider>
  )
}

export default App
