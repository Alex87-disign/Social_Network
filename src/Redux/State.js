import { rerenderEntireTree } from "../render";

let state = {
    PostData :[
        {id:1, massage: "Hi, How are You",likesCount: 23,},
        {id:2,massage: "Its my first post",likesCount: 0,},
        {id:3, massage: "My Second post",likesCount: 10,},
        {id:4, massage: "My Second post", likesCount: 10,},        
    ],
    newPostText:"it-camasutra",
    DialogsData:[
        { id: 1, name: "Dmytro" },
        { id: 2, name: "Maryna" },
        { id: 3, name: "Alex" },
        { id: 4, name: "Pert" },
        { id: 5, name: "Gogi" }
    ],
    MassagesData:[
        { id: 1, massage: "Hello" },
        { id: 2, massage: "How are You?" },
        { id: 3, massage: "yoyo" },
        { id: 2, massage: "How are You?" },
    ]
}

export const addPost = (postMassage) =>{
    let newPost={
        id:5,
        massage:postMassage,
        likesCount:0,

    };
    state.PostData.push(newPost);
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) =>{
    state.PostData.newPostText = newText;
    rerenderEntireTree(state)
}

export default state