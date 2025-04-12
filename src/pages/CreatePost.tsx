import {FormEvent, useState } from "react";
import Sidebar from "../components/Sidebar";
import usePostStore from "../store/PostStore";
import { useMutation} from "@tanstack/react-query";
import { BeatLoader } from "react-spinners";
import toast from "react-hot-toast";

export interface Post{
    userId:string,
    id:string,
    title:string,
    body:string
}

const CreatePost = () => {

    const created=usePostStore(state=>state.created)
    const newPost=usePostStore(state=>state.newPost)

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const createPost=async(formData:{userId:string,title:string,body:string})=>{
            const res=await fetch("https://jsonplaceholder.typicode.com/posts",{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(formData)
            })
            return await res.json()
        }

    const {mutate,isPending}=useMutation({
        mutationFn:createPost,
        onSuccess:(data)=>{
         created()
         newPost(data)
         toast.success("Post successfully created! Now you have access to all posts.")
        },
        onError:()=>{
        toast.error("Something went wrong!")
        }
    })
    const handleSubmit=(e:FormEvent)=>{
        e.preventDefault()
        if(!title){
            toast.error("Title is required!")
        }else if(!description){
            toast.error("description is required")
        }else{
            mutate({"userId":"1",title,"body":description})
        }
    }

  return (
    <div className="main-container create">
      <Sidebar />
      <div className="content">
        <h1 className="title">Create Post</h1>
        <form onSubmit={handleSubmit} className="form">
            <div className="form-post-title">
                <label>
                    Title:
                    <input onChange={(e)=>setTitle(e?.target?.value)} type="text"/>
                </label>
            </div>
            <div className="form-post-description">
                <label>
                    Description:
                    <textarea onChange={(e)=>setDescription(e?.target?.value)}></textarea>
                </label>
            </div>
            <button type="submit" className="submit">{isPending ? <BeatLoader size={10}/> : "Submit"}</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
