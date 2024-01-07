// Projects

const projects = [
    {
        name: 'PROJECT ONE',
        type: 'WEB DESIGN',
        pos: 'start',
        image: '/image/1.jpg' 
    },
    {
        name: 'PROJECT 2',
        type: 'GRAPHIC DESIGN',
        pos: 'mid',
        image: '/image/2.jpg' 
    },
    {
        name: 'PROJECT 3',
        type: 'TYPE DESIGN',
        pos: 'end',
        image: '/image/3.jpg'    },
    {
        name: 'PROJECT 4',
        type: 'WEB DESIGN',
        pos: 'mid',
        image: '/image/4.jpg' 
    },
    {
        name: 'PROJECT 5',
        type: 'WEB DESIGN',
        pos: 'end',
        image: '/image/5.jpg' 
    },
    {
        name: 'PROJECT 6',
        type: 'GRAPHIC DESIGN',
        pos: 'mid',
        image: '/image/6.jpg' 
    },
    {
        name: 'PROJECT 7',
        type: 'WEB DESIGN',
        pos: 'start',
        image: '/image/7.jpg' 
    },
    {
        name: 'PROJECT 8',
        type: 'TYPE DESIGN',
        pos: 'end',
        image: '/image/8.jpg' 
    },

]

const createProjects = () => {


    projects.forEach(project => {
        let panel = document.createElement('div');
        panel.classList.add('project', `${project.pos}`);

        let imageContainer = document.createElement('div');
        imageContainer.className = `image__container`;

        let image = document.createElement('img');
        image.classList.add('project__image');
        image.src = project.image;
    

        let projectDetails = document.createElement('div');
        projectDetails.classList.add('project__details');

        let projectTitle = document.createElement('p');
        projectTitle.innerText = project.name;

        let projectType = document.createElement('p');
        projectType.innerText = project.type;

        projectDetails.append(projectTitle, projectType)

        imageContainer.appendChild(image);
        panel.append(imageContainer, projectDetails);

        document.querySelector('.project__slider').appendChild(panel);
    })

 }


// // Blog posts

// const blogPosts = [
//     {
//         title: 'BLOG POST ONE',
//         time: '3 MIN',
//         image: 'https://images.unsplash.com/photo-1561998338-13ad7883b20f?auto=format&fit=crop&q=80&w=2487&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
//     },
//     {
//         title: 'BLOG POST TWO',
//         time: '4 MIN',
//         image: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=2370&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
//     },
//     {
//         title: 'BLOG POST THREE',
//         time: '5 MIN',
//         image: 'https://images.unsplash.com/photo-1454117096348-e4abbeba002c?auto=format&fit=crop&q=80&w=2602&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
//     }
// ]

// const createBlogposts = () => {
//     blogPosts.forEach(post => {
//         let blogPostSection = document.createElement('div');
//         blogPostSection.classList.add('blog__post');

//         let postDiv = document.createElement('div');
//         postDiv.classList.add('post');

//         let imageContainer = document.createElement('div');
//         imageContainer.classList.add('post__image__container');

//         let image = document.createElement('img');
//         image.classList.add('blog__post__img');
//         image.src = post.image;

//         let postDetails = document.createElement('div');
//         postDetails.classList.add('post__details');

//         let postTitle = document.createElement('p');
//         postTitle.innerText = post.title;

//         let postTime = document.createElement('p');
//         postTime.innerText = post.time;

//         imageContainer.appendChild(image);
//         postDetails.append(postTitle, postTime);
//         postDiv.append(imageContainer, postDetails)
//         blogPostSection.appendChild(postDiv);

//         document.getElementById('blog').appendChild(blogPostSection)

//     })
// }



export {
     createProjects,
    
//     createBlogposts
 }