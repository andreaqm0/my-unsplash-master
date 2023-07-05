import { useEffect, useState } from "react";
import data from  '../../data'

import './Content.css'
import IContent from "../../models/Props/Content";
import Loading from "../Loading";
import Gallery from "../Gallery/Gallery";

const { apiURL } = data

const Content = ({ images, setImages, searchValue } : IContent) => {
  const [loading, setLoading] = useState<boolean>()  

  useEffect(() => {
    setLoading(true)
    const fetchImgs = async () => {
      const response = await fetch(`${apiURL}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      const data = await response.json()
      setImages(data)
      setLoading(false)
    }
    fetchImgs()
  }, []) 

  return (
    <>
      {
        loading ? <Loading /> :
        <Gallery images={images} setImages={setImages} searchValue={searchValue} />
      }
    </>
  )
}

export default Content