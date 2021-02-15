import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

export default function TestUpload() {

    const {register, handleSubmit} = useForm()

    const sendImage = (data) => {
        // send a POST request to the backend API at /createPost endpoint
        //attach the image to the formdata
        console.log(data.picture[0].name)
    }

    return (
        <div>
            <form onChange= {handleSubmit(sendImage)}>
                <input ref={register} type="file" name="picture"/>
            </form>
        </div>

    )
}