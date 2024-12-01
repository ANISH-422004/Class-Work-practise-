const data = [
    {
        "username": "travel_diaries",
        "userlocation": "Paris, France",
        "userprofile": "https://images.unsplash.com/photo-1524638431109-93d95c968f03?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "userPost": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=3546&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "like": true,
        "likeCount": 1200,
        "commentCount": 45,
        "shareCount": 30,
        "caption": "Enjoying the sunset at the Eiffel Tower. #ParisVibes #TravelGoals",
        "timeAgoUploaded": 5,
        "statusPic": "https://images.unsplash.com/photo-1499363536502-87642509e31b?q=80&w=3387&auto=format&fit=crop"
    },
    {
        "username": "foodie_lover",
        "userlocation": "Mumbai, India",
        "userprofile": "https://images.unsplash.com/photo-1487069838269-7c05365b400b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "userPost": "https://images.unsplash.com/photo-1554978991-33ef7f31d658?q=80&w=2620&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "like": false,
        "likeCount": 530,
        "commentCount": 20,
        "shareCount": 12,
        "caption": "The best vada pav I've ever had! 🌮❤ #MumbaiStreetFood",
        "timeAgoUploaded": 12,
        "statusPic": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=3540&auto=format&fit=crop"
    },
    {
        "username": "fitness_freak",
        "userlocation": "New York, USA",
        "userprofile": "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "userPost": "https://images.unsplash.com/photo-1485727749690-d091e8284ef3?q=80&w=3532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "like": true,
        "likeCount": 800,
        "commentCount": 60,
        "shareCount": 25,
        "caption": "Start your day with some yoga. #FitnessGoals #HealthyLiving",
        "timeAgoUploaded": 24,
        "statusPic": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=3540&auto=format&fit=crop"
    },
    {
        "username": "artsy_corner",
        "userlocation": "London, UK",
        "userprofile": "https://images.unsplash.com/photo-1647205552933-12e3dfdb77b5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "userPost": "https://plus.unsplash.com/premium_photo-1692650759141-ed71d789ef1b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "like": true,
        "likeCount": 950,
        "commentCount": 78,
        "shareCount": 40,
        "caption": "New piece in the gallery. Let me know your thoughts! 🎨 #AbstractArt",
        "timeAgoUploaded": 7,
        "statusPic": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=3540&auto=format&fit=crop"
    },
    {
        "username": "adventure_seeker",
        "userlocation": "Kyoto, Japan",
        "userprofile": "https://images.unsplash.com/photo-1681562978415-bbf1dfe59353?q=80&w=2624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "userPost": "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "like": false,
        "likeCount": 600,
        "commentCount": 33,
        "shareCount": 18,
        "caption": "The serenity of Kyoto's bamboo forest. 🌳 #NatureLover",
        "timeAgoUploaded": 18,
        "statusPic": "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=3540&auto=format&fit=crop"
    },
    {
        "username": "travel_diaries",
        "userlocation": "Paris, France",
        "userprofile": "https://images.unsplash.com/photo-1524638431109-93d95c968f03?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "userPost": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=3546&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "like": true,
        "likeCount": 1200,
        "commentCount": 45,
        "shareCount": 30,
        "caption": "Enjoying the sunset at the Eiffel Tower. #ParisVibes #TravelGoals",
        "timeAgoUploaded": 5,
        "statusPic": "https://images.unsplash.com/photo-1499363536502-87642509e31b?q=80&w=3387&auto=format&fit=crop"
    },
    {
        "username": "foodie_lover",
        "userlocation": "Mumbai, India",
        "userprofile": "https://images.unsplash.com/photo-1487069838269-7c05365b400b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "userPost": "https://images.unsplash.com/photo-1554978991-33ef7f31d658?q=80&w=2620&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "like": false,
        "likeCount": 530,
        "commentCount": 20,
        "shareCount": 12,
        "caption": "The best vada pav I've ever had! 🌮❤ #MumbaiStreetFood",
        "timeAgoUploaded": 12,
        "statusPic": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=3540&auto=format&fit=crop"
    },
    {
        "username": "fitness_freak",
        "userlocation": "New York, USA",
        "userprofile": "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "userPost": "https://images.unsplash.com/photo-1485727749690-d091e8284ef3?q=80&w=3532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "like": true,
        "likeCount": 800,
        "commentCount": 60,
        "shareCount": 25,
        "caption": "Start your day with some yoga. #FitnessGoals #HealthyLiving",
        "timeAgoUploaded": 24,
        "statusPic": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=3540&auto=format&fit=crop"
    }
]

let body = document.querySelector("body");
let main = document.querySelector("main");
let statusbar = document.querySelector("#statusbar");
let modal = document.querySelector("#modal");
let postContainer= document.querySelector('main .post-container')
// console.log(postContainer);

let bigHeart

function showData(){
    clutter = ``
    data.forEach((item,idx) => {
        // console.log(idx);
        clutter += `
    
            <div class="post-container">
            <div id="post-template">
               
                <div id="top">
                    <img src="${item.userprofile}" alt="">
                    <div id="user-info">
                        <span id="username">${item.username}</span>
                        <span id="user-location">${item.userlocation}</span>
                    </div>
                    <i id="more-icon" class="ri-more-2-line"></i>
                </div>

                <div id="post-image">
                    <img id="${idx}"src="${item.userPost}" alt="">
                    <i class="ri-heart-fill" style= "color: red;"></i>
                </div>


                <div id="post-icons">
                    <div class="like" id="${idx}">
                        ${item.like ? `<i class="ri-heart-fill" style= "color: red;"></i>` : `<i class="ri-heart-line"></i>`}
                        <span>${item.likeCount}</span>
                    </div>
                    <div class="comment">
                        <i class="ri-chat-1-line"></i>
                        <span>${item.commentCount}</span>
                    </div>
                    <div class="share">
                        <i class="ri-share-forward-box-line"></i>
                        <span>${item.shareCount}</span>
                    </div>
                </div>

                <div id="caption">
                    <span>${item.caption}</span>
                </div>

                <div id="time-ago">
                    <span>${item.timeAgoUploaded}h ago</span>
                </div>





            </div>
        </div>
    `
})
main.innerHTML = clutter;

}
showData();

function showStatusBar(){
    clutter = ``
    data.forEach((item,index) => {
        clutter += `
        <div id="${index}" class="status-bar-item">
            <img src="${item.statusPic}" alt="">
            <span>${data[index].username}</span>
        </div>
        `
    })
    statusbar.innerHTML = clutter;
}
showStatusBar();


function showModal(){
    let statusbarItemimage = document.querySelectorAll(".status-bar-item img");

    statusbarItemimage.forEach(item => {
        item.addEventListener("click", () => {
            modal.style.display = "flex";
            statusbar.style.pointerEvents = "none";
            main.style.position = "fixed";
       
            modal.querySelector("img").src = item.src;
            
            setTimeout(() => {
                modal.style.display = "none";
                statusbar.style.pointerEvents = "auto";
                main.style.position = "static";
            }, 3000);
        
        })
    
    
    })
    
    modal.addEventListener("click", (e) => {
        if (e.target !== modal.querySelector("img")) {
            modal.style.display = "none";
            statusbar.style.pointerEvents = "auto";
            main.style.pointerEvents = "auto";
            main.style.position = "static";
        }
    })
    
}
showModal();

function likePostfromImage(){
    main.addEventListener("dblclick", (e) => {
        // Check if clicked element is an image within post-image div
        if (e.target.tagName === "IMG" && e.target.parentElement.id === "post-image") {
            const idx = e.target.id;
            
            if(data[idx].like){
                data[idx].like = false;
                data[idx].likeCount--;
            } else {
                data[idx].like = true;
                data[idx].likeCount++;
            }
            showData();
        }
        
        console.log(e.target.parentElement.querySelector("i"))
        let showheart = e.target.parentElement.querySelector("i");
        
        showheart.style.animation = "scale-up 0.6s ease-in-out";
        setTimeout(() => {
            showheart.style.transform = "translate(-50%, -50%) scale(0)";
        }, 1800);

    });
}
likePostfromImage();

//e.target.tagName === "IMG" - This checks if the clicked element is an image, but this alone could match ANY image in the post (like profile pictures or other images)
//e.target.parentElement.id === "post-image" - This ensures we're specifically targeting images within the post content area, not other images like profile pictures or status bar images




//double click to like post from image is not working on inspectmode in chrome browser
//but working on normal screen of browser and phone screen too

function likePostfromIcon(){
    main.addEventListener("click", (e) => {
        // Check if clicked element is inside like div (either the icon or the count)
        if((e.target.tagName === 'I' || e.target.tagName === 'SPAN') && 
           e.target.parentElement.classList.contains('like')) {
            const likediv = e.target.parentElement;
            const idx = likediv.id;
            
            if(data[idx].like){
                data[idx].like = false;
                data[idx].likeCount--;
            } else {
                data[idx].like = true;
                data[idx].likeCount++;
            }
            showData();
        }
    }); 
}
likePostfromIcon();


