import React from 'react'
import "./Card.css";

// function Card() {
//     const publicFolder = "http://localhost:5000/images/";
//     return (
//         <div>
//             <div class="container">
//                 <div class="card">
//                     <div class="card__header">
//                         {post.photo ? (
//                             <img
//                                 className="postImg"
//                                 src={publicFolder + post.photo}
//                                 alt=""
//                             />
//                         )
//                             :
//                             <img
//                                 className="postImg"
//                                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"
//                                 alt=""
//                             />
//                         }
//                     </div>
//                     <div class="card__body">
//                         <span class="tag tag-blue">
//                             {
//                                 post.categories.map((cats) => (
//                                     <span className="postCat">{"#" + cats}</span>
//                                 ))
//                             }
//                         </span>
//                         {/* <h4>What's new in 2022 Tech</h4> */}
//                         <Link to={`/post/${post._id}`}>
//                             <h4>{post.title}</h4>
//                         </Link>
//                         <p>{post.description}</p>
//                     </div>
//                     <div class="card__footer">
//                         <div class="user">
//                             <img src="https://i.pravatar.cc/40?img=1" alt="user__image" class="user__image" />
//                             <div class="user__info">
//                                 <h5>Jane Doe</h5>
//                                 <small>{new Date(post.createdAt).toDateString()}</small>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Card;



// ------------------ duplicate code--------------------
// import React from 'react'
// import "./Card.css";

// function Card() {
//     const publicFolder = "http://localhost:5000/images/";
//     return (
//         <div>
//             <div class="container">
//                 <div class="card">
//                     <div class="card__header">
//                         <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" class="card__image" width="600" />
//                     </div>
//                     <div class="card__body">
//                         <span class="tag tag-blue">Technology</span>
//                         <h4>What's new in 2022 Tech</h4>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
//                     </div>
//                     <div class="card__footer">
//                         <div class="user">
//                             <img src="https://i.pravatar.cc/40?img=1" alt="user__image" class="user__image" />
//                             <div class="user__info">
//                                 <h5>Jane Doe</h5>
//                                 <small>2h ago</small>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Card;