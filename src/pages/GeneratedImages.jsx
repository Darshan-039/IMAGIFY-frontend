import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";

const MyImages = () => {
    const [images, setImages] = useState([]);
    const { token } = useContext(AppContext);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const res = await axios.get("http://localhost:4000/api/image/my-images", {
                    headers: { token },   // 👈 if you use frontend fix
                });

                if (Array.isArray(res.data)) {
                    setImages(res.data);
                } else if (res.data.images && Array.isArray(res.data.images)) {
                    setImages(res.data.images);
                } else {
                    setImages([]); // default
                }

                console.log("Fetched:", res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchImages();
    }, [token]);


    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">My Generated Images</h1>
            {images.length === 0 ? (
                <p className="text-gray-600">No images generated yet.</p>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((img) => (
                        <div key={img._id} className="shadow-lg rounded-lg overflow-hidden">
                            <img src={img.url} alt="Generated" className="w-full h-auto" />
                            <p className="text-sm p-2 bg-gray-100">{img.prompt}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyImages;
