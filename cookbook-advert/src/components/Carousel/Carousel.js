import React, {useState, useEffect, useCallback} from 'react'
import { client } from '../../context/client'

const Carousel = () => {

    const [isCarouselLoading, setIsCarouselLoading] = useState(false)
    const [carouselSlides, setCarouselSlides] = useState([])

    const cleanupCarouselSlides = useCallback((rawData) => {
        const cleanSlides = rawData.map((slide) => {
            const {sys, fields} = slide
            const {id} = sys
            const slideTitle = fields.title
            const slideDescription = fields.description
            const slideImage = fields.image.fields.file.url
            const updatedSlide = {id, slideTitle, slideDescription, slideImage}
            return updatedSlide
        })
        setCarouselSlides(cleanSlides)
    }, [])

    const getCarouselSlides = useCallback(async () => {
        setIsCarouselLoading(true)
        try{
            const response = await client.getEntries({content_type: 'kitchenGroup4'})
            const responseData = response.items
            console.log(responseData)
            if(responseData){
                cleanupCarouselSlides(responseData)
            }else{
                setCarouselSlides([])
            }
            setIsCarouselLoading(false)
        }catch (error){
            console.log(error)
            setIsCarouselLoading(false)
        }
    },[cleanupCarouselSlides])

    useEffect(() => {
        getCarouselSlides()
    }, [getCarouselSlides]);

    console.log(carouselSlides)

  return (
    <>
        <div>Carousel</div>
    </>
  )
}

export default Carousel