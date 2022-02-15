import InstaLogo from "./images/logo.png";
import Camera from "./images/camera.png";
import Image from "./images/pic.jpg";
import './Postview.css';

import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Postview.css';
import HeartIcon from "./images/heart.png";
import OptionsIcon from "./images/more.png";
import TagIcon from "./images/tag.png"


const Postview = () => {
  const [posts, setPost] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/user')
      .then(res => {
        setPost(res.data)
      })
  }, [])
  const date = new Date().toDateString();
  return (
    <div className='site-container'>
      <div class="nav-bar">
        <img src={Camera} alt="" className="cam" />
        <div className="logo">
          <img src={InstaLogo} alt="" className="logo-img" />
          <h2 className="insta">Instaclone</h2>
        </div>
      </div>
      <div className='post-container'>
        {posts.map(post => {
          return (
            <div className="border">
              <img src={OptionsIcon} alt="" className="more" />
              <div class="a1">

                <p><strong>{post.name}</strong></p>
                <p line-height="7px">{post.location}</p>


              </div>
              <div>
                <img src={post.PostImage} alt="" class="gallery" />
              </div>
              <p class="more1"><strong>{date}</strong></p>
              <div class="a2">
                <img src={HeartIcon} alt="" class="heart" />
                <img src={TagIcon} alt="" class="tag" />

              </div>
              <div class="txt">
                <p class="gray">{post.likes} likes</p>
                <h4 class="txt1">{post.description}</h4>
              </div>



            </div>
          )
        })}
      </div>
    </div>

  );

}

export default Postview;