import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>

      <div className={s.posts}>
        <Post
          src="https://gamebomb.ru/files/galleries/001/f/f2/411719.jpg"
          massage="goodbey"
          likes="15"
        />
        <Post
          massage="Hi, how are you?"
          src="https://s5.stc.all.kpcdn.net/afisha/msk/wp-content/uploads/sites/5/2023/01/kadr-iz-filma-avatar-put-vody.jpg"
          likes="20"
        />
      </div>
    </div>
  );
};

export default MyPosts;
