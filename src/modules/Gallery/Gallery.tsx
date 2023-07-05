import { LazyLoadImage } from "react-lazy-load-image-component";
import IContent from "../../models/Props/Content";
import { Image } from "../../models/image.model";
import Photo from "./Photo";

import welcome from '../../assets/welcome.svg'
import ToastSuccess from "../ToastSuccess";
import { useState } from "react";

const Gallery = ({images, searchValue, setImages} : IContent) => {
  const [toastVisible, setToast] = useState(false)

  const showToast = () => toastVisible && <ToastSuccess setToast={setToast} />

  return (
    <>
          { 
            images && images.length > 0            
            ?   <div className="static" style={{minHeight:'calc(100vh - 120px)'}}>
                  <div className="columns-1 sm:columns-2 lg:columns-3 pb-10" style={{minHeight:'calc(100vh - 120px)'}}>
                    {
                        images.filter((img) => !searchValue ? true : img.description.toUpperCase().includes(searchValue.toUpperCase())).map((e: Image) => (
                            <Photo key={e.id} images={images} image={e} setImages={setImages} setToast={setToast}/>
                        ))
                    }
                  </div>                    
                  { showToast()}
                </div>
            :   <div className="flex flex-col gap-10 justify-center items-center" style={{height:'calc(100vh - 120px)'}}>
                    <LazyLoadImage src={welcome} className="h-1/2" />
                    <div className="text-2xl text-slate-600">Looks like there are no images yet. <span className="text-green-600">Add your first one!</span></div>
                    {showToast()}
                </div>
          }
          
    </>
  )
}

export default Gallery