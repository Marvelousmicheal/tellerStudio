//blog Posts

const blogPosts = [
    {
        title:"BLOG POST ONE",
        time: "3 MIN",
        image: '/image/2.jpg',
    },
    {
        title: "BLOG POST TWO",
        time : "4 MINS",
        image: '/image/4.jpg',
    },
    {
        title: "BLOG POST THREE",
        time: "5 MIN",
        image: '/image/7.jpg',

    }

]

const createBlogPosts = () =>{
    blogPosts.forEach(post => {
        let blogPostSection = document.createElement("div")
        blogPostSection.classList.add("blog__post")

        let PostDiv = document.createElement("div")
        PostDiv.classList.add("post")

        let imageContainer = document.createElement("div")
        imageContainer.classList.add("post__image__container")

        let image = document.createElement("img")
        image.classList.add("blog__post__img")
        image.src = post.image

        let postDetails = document.createElement("div")
        postDetails.classList.add("post__details")

        let postTitle = document.createElement("p")
        postTitle.innerText = post.title

        let postTime = document.createElement("p")
        postTime.innerText = post.time


        imageContainer.appendChild(image)
        postDetails.append(postTitle, postTime)
        PostDiv.append(imageContainer, postDetails)
        blogPostSection.appendChild(PostDiv)

        document.getElementById("blog").appendChild(blogPostSection)
    })
}

export{
    createBlogPosts
}