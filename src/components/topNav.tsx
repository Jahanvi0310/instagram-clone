import React, { useState,useEffect } from "react";
import styled from "styled-components";
import { TfiSettings } from "react-icons/tfi";
import { Avatar } from "@mui/material";
import { selectName, selectPhoto } from "../reducer/User/userSlice";
import { useSelector } from "react-redux";
import InpBio from "./InpBio";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGripVertical} from "@fortawesome/free-solid-svg-icons";

// const TopNavWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 18px 20px 10px;
//   border-bottom: 1px solid #151515;
// `;
// import React, { , useState } from "react";
// import styled from "styled-components";
import db, { storage } from "../firebase/firebase";
import { onSnapshot, collection, orderBy, query } from "firebase/firestore";

//   display: flex;
//   align-items: center;
// `;

// const ProfileName = styled.h4`
//   margin: 0;
//   font-size: 20px;
// `;
// const PostMenu = styled.div`
//   font-size: 25px;
// `;

// const Menu = styled.div`
//   display: inline-block;
//   position: relative;
//   margin-left: 20px;
// `;

function TopNav(props) {
  const photo = useSelector(selectPhoto);
  const name = useSelector(selectName);
  const [bio, setBio] = useState();
  const [isShown, setShown] = useState<boolean>(false);
  const [selected, setSelected] = useState<any>([]);
  useEffect(() => {
    return onSnapshot(
      query(collection(db, "insta"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setSelected(snapshot.docs);
      }
    );
  }, []);
  const click = () => {
    setShown((current) => !current);
  };
  return (
    <div className="max-w-6xl mx-5 p-10 xl:mx-auto ">
      <div className="grid grid-cols-4 gap-1">
        <div className="avatar justify-center align-center">
          <div className="rounded-full w-40 h-40 ml-12">
            <Avatar src={photo} />
          </div>
        </div>
        <div className="col-span-2 ml-12">
          <div >
            <span className="text-gray-800 text-2xl mr-4">WELCOME <b className="ml-6">{name}</b></span>
          </div>
          {/* <div className="cursor-pointer inline text-sm font-semibold text-gray-700 p-1 px-2 border-gray-200 rounded mr-4"> */}
            {/* <button onClick={click}>Edit Profile</button>
            {isShown && <InpBio bio={bio} setBio={setBio} />} */}
          {/* </div> */}
          {/* <TfiSettings className="cursor-pointer inline h-6 flex-1" /> */}
          <div className="pt-3">
            <p className="text-base text-blue-700 mr-2"> {bio} </p>
          </div>
        </div>
        <div>
          <button className="text-lg ml-12" onClick={props.logout}>
            <b>LogOut</b>
          </button>
        </div>
      </div>
      <hr className="border-gray-800 mt-4" />
      <div className="flex justify-center gap-10">
        <button className="focus:border-t border-gray-800 py-4 text-lg font-semibold flex text-gray-400 focus:text-gray-600">
          <FontAwesomeIcon icon={faGripVertical} size="lg"/>
          <span className="ml-5">POSTS</span>
        </button>
      </div>
      <div className="grid grid-cols-3 gap-5">
      {selected.map((postImage) =>
        name === postImage.data().name ? (
          <div>
          <img src={postImage.data().photo} className="h-64" /></div>
        ) : (
          <div></div>
        )
      )}
    </div>
    </div>

    // <TopNavWrapper>
    //   <AccountNav>
    //     <ProfileName>
    //       {" "}
    //       <span>Welcome <br/><b>{props.name}</b></span>
    //     </ProfileName>
    //   </AccountNav>
    //   <PostMenu>
    //     <Menu>
    //       <button className="text-lg" onClick={props.logout}>LogOut</button>
    //     </Menu>
    //   </PostMenu>
    // </TopNavWrapper>
  );
}

export default TopNav;
