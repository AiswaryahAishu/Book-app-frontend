function getImgUrl(image){
    return new URL(`../assets/books/${image}`,import.meta.url)
}
export {getImgUrl}