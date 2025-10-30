import { useGSAP } from "@gsap/react";
import React, { useContext, useState } from "react";
import { sellAnimations } from "../Components/Animations/sellAnimations";
import { useMutation } from "@tanstack/react-query";
import AxiosInstance from "../Components/Shared/Axiosinstance";
import imageCompression from "browser-image-compression";
import axios from "axios";
import AuthContext from "../Context/AuthContext";

const Sell = () => {
  const {currentUser} = useContext(AuthContext);
  const [preview, setPreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const handleChange = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
  };
  // Compressed Image Options
  const options = {
    maxSizeMB: 0.32,
    maxWidthOrHeight: 400,
    useWebWorker: true,
    onProgress: (progress) => {
      setUploadProgress(progress);
    },
  };

  // send data to backend
  const { mutate, isPending } = useMutation({
    mutationFn: async (formData) => {
      const response = await AxiosInstance.post("/sell", formData);
      return response.data;
    },
    onSuccess: () => {
      alert("Weapon submitted successfully!");
      setPreview(null);
    },
    onError: (error) => {
      console.error("Submission failed:", error);
      alert("Failed to submit. Please try again.");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setIsUploading(true);

    // --- Compress Image ---
    const imageFile = form.image.files[0];
    let imageToSend = imageFile;
    console.log("Before compression:", (imageFile.size / 1024).toFixed(2), "KB");
    try {
      const compressImage = await imageCompression(imageFile, options);
      imageToSend = compressImage;
      console.log("After compression:", (imageToSend.size / 1024).toFixed(2), "KB");
    } catch (error) {
      console.warn("Image compression failed, sending original:", error);
    }
    // --- Upload to ImgBB ---
    const imgbbFormData = new FormData();
    imgbbFormData.append("image", imageToSend);
    const imgbbResponse = await axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`,
      imgbbFormData,
      {
        onUploadProgress: (progressEvent) => {
          setUploadProgress(
            Math.round((progressEvent.loaded / progressEvent.total) * 100)
          );
        },
      }
    );
    const imgbbUrl = imgbbResponse.data.data.display_url;

    // --- Send Data ---
    const dataToSend = {
      user: currentUser.email,
      name: form.name.value,
      type: form.type.value,
      price: form.price.value,
      description: form.description.value,
      image: imgbbUrl,
    };

    mutate(dataToSend, {
      onSettled: () => {
        setIsUploading(false);
        setUploadProgress(0);
        form.reset();
        setPreview(null);
      },
    });
  };

  useGSAP(() => {
    sellAnimations();
  }, []);

  return (
    <section className="custom-container sell-section h-dvh">
      <h2 className="sell-heading">Sell Your Antique Weapon</h2>

      <div className="sell-card">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Weapon Name"
            className="sell-input"
            // value{formData.name}

            required
          />

          <input
            type="text"
            name="type"
            placeholder="Weapon Type (e.g., Revolver, Shotgun)"
            className="sell-input"
            // value{formData.type}

            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price ($)"
            className="sell-input"
            // value{formData.price}

            required
          />

          <textarea
            name="description"
            placeholder="Description / History"
            className="sell-textarea"
            // value{formData.description}

            required
          />

          <input
            type="file"
            name="image"
            accept="image/*"
            className="sell-input"
            onChange={handleChange}
            required
          />

          {preview && (
            <div className="mt-4 text-center">
              <p className="text-[#694821] mb-2 font-bold">Preview:</p>
              <img
                src={preview}
                alt="Weapon Preview"
                className="w-64 h-48 object-cover rounded-xl border border-[#8B5E3C] mx-auto shadow-md"
              />
            </div>
          )}

          {isUploading ||
          isPending ||
          (uploadProgress > 0 && uploadProgress < 100) ? (
            <div className="w-8 h-8 border-4 border-[#53310e] border-t-[#f7e1b5] rounded-full animate-spin"></div>
          ) : (
            <button type="submit" className="sell-btn mt-6">
              Submit Weapon
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default Sell;
