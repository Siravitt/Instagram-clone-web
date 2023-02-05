import { useEffect, useState } from "react";
import { getHolderImage } from "../../apis/post-api";
import ProfilePhoto from "./ProfilePhoto";

export default function ProfilePhotoContainer() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const fetchPhoto = async () => {
      const res = await getHolderImage();
      setPhotos(res.data.posts);
    };
    fetchPhoto();
  }, []);
  return (
    <div className="w-full h-auto flex flex-wrap gap-[1.5px] overflow-y-auto scrollbar-hide">
      {photos?.map(el => <ProfilePhoto key={el.id} src={el.image} title={el.title}/>)}
    </div>
  );
}
