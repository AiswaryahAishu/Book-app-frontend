import React, { useState } from 'react';
import BookCard from './books/BookCard';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi'

const categories = ["choose a genre", "Business", "Fiction", "Horror", "Adventure"];

const TopSelling = () => {
    const [selectedCategory, setSelectedCategory] = useState("choose a genre");
    
    const { data: books = [] } = useFetchAllBooksQuery();
    console.log(books);
    

    // Ensure books exist before filtering
    const filterBooks = selectedCategory === "choose a genre"
      ? books || []
      : books?.filter(book => book.category.toLowerCase() === selectedCategory.toLowerCase()) || [];
      console.log(filterBooks);
      

    return (
        <div className='py-10 px-20'>
            <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>

            {/* Category Filtering */}
            <div className='mb-8 flex items-center'>
                <select
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    name="category"
                    id="category"
                    className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 outline-none'
                >
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            {/* Swiper for displaying books */}
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 40 },
                    1024: { slidesPerView: 2, spaceBetween: 50 },
                    1180: { slidesPerView: 3, spaceBetween: 50 }
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper relative"
            >
                {filterBooks.length > 0 ? (
                    filterBooks.map((book, index) => (
                        <SwiperSlide key={index}>
                            <BookCard book={book} />
                        </SwiperSlide>
                    ))
                ) : (
                    <p className="text-gray-500 text-center">No books available in this category.</p>
                )}
            </Swiper>
        </div>
    );
};

export default TopSelling;
