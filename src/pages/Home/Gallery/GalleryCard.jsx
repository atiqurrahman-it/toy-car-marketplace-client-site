
const GalleryCard = ({gallery}) => {
    const {photo}=gallery
    return (
        <div className="card  bg-base-100 shadow-xl ">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
      </div>
    );
};

export default GalleryCard;