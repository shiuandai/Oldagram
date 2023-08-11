const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// const mainEl=document.getElementById("main")
// let html=""

// for (let i=0; i<posts.length; i++){
//     html+=`
//     <div id="post_author">
//         <img src=${posts[i].avatar} alt=${posts[i].avatar} class="avatar">
//         <div>
//             <div class="name font_size"><span>${posts[i].name}</span></div>
//             <span class="location font_size">${posts[i].location}</span>
//         </div>
//     </div>
//     <div>
//         <img src=${posts[i].post} alt=${posts[i].post} class="post_img">
//     </div>
//     <div>
//         <div id="icon_image">
//             <img src=${images/icon-heart.png} alt=${images/icon-heart.png} class="icon">
//             <img src=${images/icon-comment.png} alt=${images/icon-comment.png} class="icon">
//             <img src=${images/icon-dm.png} alt=${images/icon-dm.png} class="icon">
//         </div>
//         <div id="likes"><span id="the_number_of_likes">${posts[i].likes}</span><span> likes</span></div>
//         <div id="comment_text"><span id="username">${posts[i].username}</span><span id="comment"> ${posts[i].comment}</span></div>
//     </div>
//     `
// }
// mainEl.innerHTML=html
// console.log(mainEl.textContent);

const mainEl=document.getElementById("main")
let html=""

for (let i=0; i<posts.length; i++){
    html+=`
    <div id="post_author">
            <img src=${posts[i].avatar} alt=${posts[i].avatar} class="avatar">
            <div>
                <div class="name font_size"><span>${posts[i].name}</span></div>
                <span class="location font_size">${posts[i].location}</span>
            </div>
        </div>
    </div>
    <div>
        <img src=${posts[i].post} alt=${posts[i].post} class="post_img">
    </div>
    <div>
        <div>
            <img src="images/icon-heart.png" alt="icon-heart.png" class="icon">
            <img src="images/icon-comment.png" alt="icon-comment.png" class="icon">
            <img src="images/icon-dm.png" alt="icon-dm.png" class="icon">
        </div>
        <div id="likes"><span id="the_number_of_likes">${posts[i].likes}</span><span> likes</span></div>
        <div id="comment_text"><span id="username">${posts[i].username}</span><span id="comment"> ${posts[i].comment}</span></div>
    </div>
    `
}
mainEl.innerHTML=html

