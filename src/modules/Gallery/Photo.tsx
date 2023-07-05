import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { Image } from "../../models/image.model";
import fallback from '../../assets/404.jpg'
import data from  '../../data'

const { apiURL } = data

interface props {
    image : Image,
    images: Image[]
    setImages: Function,
    setToast: Function
}

const Photo = ({images, setImages, image, setToast}:props) => {
  const [showData, setShowDataOf] = useState<number|undefined>(undefined)

  const dataIsVisible = (id:number) => showData === id
  
  const deleteImg = (id:number) => {
    let status : {ok : boolean} = {ok:false}

    fetch(`${apiURL}/delete/${id}`, { method: 'DELETE' })
        .then(async response => {
            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = response.statusText;
                return Promise.reject(error);
            }

            status.ok = true
        })
        .catch((e: Error) => {
            console.log(e)
        })
        .finally(() => {
          if (status.ok) {
            if (images) {
              setImages(images.filter(img => img.id !== id))
              setToast(true)
            }
          }
        })
  }

  return (
    <>
      <div
      className="relative mb-4 hover:before:content-[''] hover:before:rounded-md hover:before:absolute hover:before:inset-0 hover:before:bg-black hover:before:bg-opacity-60" 
      onMouseEnter={() => setShowDataOf(image.id)}
      onMouseLeave={() => setShowDataOf(undefined)}
    >
      <LazyLoadImage 
        className="w-full rounded-md border border-gray-200" 
        src={image.imageurl}
        onError={(event : any) => event.target.src = fallback}
      />
      {
        dataIsVisible(image.id) && (
          <div className="absolute inset-0 p-8 text-white flex flex-col">           
            <div className="ms-auto">
              <button onClick={() => deleteImg(image.id)} className="border-2 px-4 border-red-500 text-red-500 hover:border-red-600 hover:text-red-600 rounded-3xl">delete</button>
            </div>
            <div className="mt-auto">
              <h1 className="text-xl font-bold break-words">{image.description}</h1>
            </div>
          </div>
        )
      }
    </div>
    </>
  )
}

export default Photo