import { ChangeEvent } from 'react'
import logo from '../../assets/logo.svg'
import IHeader from '../../models/Props/Header'
import FormModal from './FormModal'

const Header = ({images, setImages, setSearchValue} : IHeader) => {
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearchValue(e.target.value)
  }
  return (
    <>
      <div className='w-full h-[120px] flex justify-between items-center'>
          <div className='flex gap-3 items-center'>
              <img src={logo} className='h-[26px]' />
              <input onChange={changeHandler} type="text" placeholder='Search' className='py-3 px-5 border border-gray-400 text-gray-500 rounded-xl w-[300px] outline-none' />
          </div>
          <button data-hs-overlay="#hs-basic-modal" type='button' className='py-3 px-5 rounded-xl bg-green-600/90 hover:bg-green-600 text-white font-semibold truncate'>Add Photo</button>
      </div>
      <FormModal images={images} setImages={setImages} />
    </>
  )
}

export default Header