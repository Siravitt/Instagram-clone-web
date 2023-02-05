import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserAction from "./UserAction";
import UserData from "./UserData";
import UserName from "./UserName";
import UserPhoto from "./UserPhoto";
import useUser from "../../hooks/useUser";
import { searchById } from "../../apis/search-api";

export default function UserContainer() {
  const data = useUser();
  const id = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await searchById(id);
      setUser(res.data.newUser);
    };
    fetchUser();
  }, [id]);
  return (
    <div className="w-[390px] h-screen mx-auto bg-white flex flex-col">
      <UserName name={data.data?.[0].userName || user.userName} />
      <UserData image={data.data?.[0].profileImage || user.profileImage} />
      <UserAction />
      <UserPhoto />
    </div>
  );
}
