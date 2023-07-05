import './App.css'
import { Image } from './models/image.model';
import Content from './modules/Content/Content';
import Header from './modules/Header/Header';
import {useState} from 'react'

const App = () => {  
  const [images, setImages] = useState<Image[]>([])
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className='container h-screen'>
      <Header setSearchValue={setSearchValue} images={images} setImages={setImages} />
      <Content searchValue={searchValue} images={images} setImages={setImages} />  
    </div>
  )
}

export default App;