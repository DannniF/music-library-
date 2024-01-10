import GalleryItem from "./GalleryItem"
//function for gallery we are passing data as a parameter and destructuring 
function Gallery({ data }) {
    // creating a variable of display , which maps the data , 
    const display = data.map((item, i) => {
        return <GalleryItem key={i} item={item} />
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery