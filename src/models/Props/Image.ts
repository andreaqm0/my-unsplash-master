import {Dispatch, SetStateAction} from 'react'
import { Image } from '../image.model'

interface Iimage {
    images: Image[],
    setImages : Dispatch<SetStateAction<Image[]>>
}

export default Iimage