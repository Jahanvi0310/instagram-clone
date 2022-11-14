import React, { useState, useEffect } from "react";
import { Button, Image } from "semantic-ui-react";
import db from "../firebase/firebase";
import { selectName } from "../reducer/User/userSlice";
import { useNavigate } from "react-router-dom";
import { onSnapshot, collection, deleteDoc, doc } from "firebase/firestore";
import "./home.css";
import { useSelector } from "react-redux";

function HomeStory(props) {
  const name = useSelector(selectName);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(
      collection(db, "story"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setUsers(list);
        setLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("want to delete it?")) {
      try {
        await deleteDoc(doc(db, "story", id));
        setUsers(users.filter((user) => user.id !== id));
      } catch (err) {
        console.log(err);
      }
    }
  };

  function renderCategoryitem() {
    return (
      users &&
      users.map((category) => {
        return (
          <div key={category.id}>
            <div className="flex justify-center">
              <div
                className="mt-2 ml-1 cursor-pointer"
                onClick={() => {
                  navigate(`/story/${category.id}`, {
                    state: { category: category, id: category.id },
                  });
                }}
              >
                <div className="category-outer-circle flex justify-center items-center col-span-2">
                  <div className="category-inner-circle flex justify-center items-center col-span-2">
                    <Image src={category.img} className="rounded-2xl h-12" />
                  </div>
                </div>
                <div className="flex justify-center ">
                  <span
                    className={
                      props.theme === "light" ? "text-black" : "text-white"
                    }
                  >
                    {name}
                  </span>
                </div>
              </div>
            </div>
            <div className="ml-2">
              {" "}
              <Button
                icon="checkmark"
                className="ui basic"
                onClick={() => handleDelete(category.id)}
              >
                ❌
              </Button>
              <Button
                className="ui basic"
                onClick={() => navigate(`/update/${category.id}`)}
              >
                ✏️
              </Button>
            </div>
          </div>
        );
      })
    );
  }
  return (
    <div>
      <div className="grid grid-flow-col auto-cols-max ml-1">
        {renderCategoryitem()}
      </div>
    </div>
  );
}

export default HomeStory;
