import React, { useState } from 'react'
import axios from 'axios'

const Test = () => {
    const [file, setFile] = useState(null)
    console.log(file)
    const handleFile = (e) => {
        let file = e.target.files[0];
        setFile(file)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(file)
        const formData = new FormData();
        formData.append('image', file)
        axios.post('https://CornsilkUnknownServer.freestorage.repl.co', formData).then(res => {
            console.log(JSON.parse(JSON.stringify(res.data)))
        })
    }
    return (
        <>
            <form>
                <input type="file" name="image" id="" onChange={
                    handleFile
                } />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default Test