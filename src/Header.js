import React, { useEffect, useRef, useState } from "react";
import people from "./img/people.png";
import Sidebar from "./Sidebar";
export default () => {
  const ref = useRef(null);
  const [posts, setPosts] = useState([]);
  const onSearch = (event) => {
    console.log(ref.current.value);
    fetch(
      "https://newsapi.org/v2/everything?q=" +
        ref.current.value +
        "&language=ar&from=2023-02-18&sortBy=publishedAt&apiKey=93040dd3882b41f08a8b968c74d58860"
    )
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.articles);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=العراق&language=ar&from=2023-02-18&sortBy=publishedAt&apiKey=93040dd3882b41f08a8b968c74d58860"
    )
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.articles);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      {/* <Sidebar /> */}
      <section id="content">
        <nav>
          <i class="bx bx-menu"></i>
          <a href="#" class="nav-link">
            Categories
          </a>
          <form action="#">
            <div class="form-input">
              <input type="search" ref={ref} placeholder="Search..." />
              <button onClick={onSearch} type="submit" class="search-btn">
                <i class="bx bx-search"></i>
              </button>
            </div>
          </form>
          <a href="#" class="notification">
            <i class="bx bxs-bell"></i>
            <span class="num">8</span>
          </a>
          <a href="#" class="profile">
            <img src={people} />
          </a>
        </nav>

        <main>
          {/* <div class="head-title">
            <div class="left">
              <h1>Dashboard</h1>
              <ul class="breadcrumb">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                </li>
                <li>
                  <a class="active" href="#">
                    Home
                  </a>
                </li>
              </ul>
            </div>
            <a href="#" class="btn-download">
              <i class="bx bxs-cloud-download"></i>
              <span class="text">Download PDF</span>
            </a>
          </div> */}
          <div className="row ">
            {posts.map((post) => {
              return (
                <div className=" col-12 col-md-4 col-sm-6" key={Math.random()}>
                  <div className="card m-1">
                    <img
                      src={post.urlToImage}
                      alt=""
                      className="card-img-top w-100"
                    ></img>
                    <div className="card-body">
                      <h5 className="card-title fw-bolder">{post.title}</h5>
                      <h6 className="text">{post.author}</h6>
                      <p className="card-text fs-6">{post.description}</p>
                      {/* <p className="text">{post.content}</p> */}
                      {/* <p className="text">{post.publishedAt}</p> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </section>
    </>
  );
};
