import React, {useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination,Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import BookCard from './books/BookCard';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

const Recomended = () => {
    // const [books,setBooks]=useState([])
    //    useEffect(()=>{
    //         fetch("books.json").
    //         then(res=>res.json())
    //         .then((data)=>setBooks(data))
    //     },[])
    const { data: books = [] } = useFetchAllBooksQuery();
  return (
    <div className='px-20 py-16'>
      <h2 className='text-3xl font-semibold mb-6'>Recommended For You</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        pagination={{
            clickable: true,
        }}
        
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180:{
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper relative"
      >

        {
          books.length >0 && books.slice(8,18).map((book,index)=> (
            <SwiperSlide key={index}>
              <BookCard book={book}/>
            </SwiperSlide>
            
          ))
        }
        
        
      </Swiper>
    </div>
  )
}

export default Recomended
