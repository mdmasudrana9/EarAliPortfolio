/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  useGetAllImageFormDBQuery,
  useSaveDataBaseImageMutation,
  useUploadImageMutation,
} from "@/redux/features/articles/articleApi";
import { Loader } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";

export default function ImageUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const [uploadImage, { isLoading: uploading }] = useUploadImageMutation();
  const [saveImageToDB, { isLoading: saving }] = useSaveDataBaseImageMutation();
  const { data, isLoading } = useGetAllImageFormDBQuery("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select an image!");

    const formData = new FormData();
    formData.append("image", file);

    try {
      // Step 1: Upload to Cloudinary
      const res = await uploadImage(formData).unwrap();
      const Url = res.url;
      console.log("Uploaded URL:", Url);

      // ✅ Step 2: Save to Database
      await saveImageToDB({ url: Url }).unwrap();

      toast.success("Image uploaded and saved successfully!");
    } catch (err) {
      console.error("Error:", err);
      toast.error("Upload failed!");
    }
  };

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success(" Image link copied!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      {/* 🔼 Upload Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mb-8">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Upload Image to Cloudinary
        </h1>

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 mb-4"
        />

        {preview && (
          <div className="mb-4 flex justify-center">
            <Image
              width={600}
              height={400}
              src={preview}
              alt="Preview"
              className="w-48 h-48 object-cover rounded-md border"
            />
          </div>
        )}

        <button
          disabled={uploading || saving}
          onClick={handleUpload}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-semibold transition"
        >
          {uploading || saving ? "Uploading..." : "Upload"}
        </button>
      </div>

      {/* 🖼️ Image Gallery Section */}
      <div className="bg-white p-6 rounded-lg  w-full max-w-7xl">
        <h2 className="text-xl font-semibold mb-4 text-center">
          📸 Uploaded Images Gallery
        </h2>

        {isLoading ? (
          <p className="text-center text-gray-500">
            <Loader></Loader>Loading images...
          </p>
        ) : data?.data?.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {data.data.map((img: any) => (
              <div
                key={img._id}
                className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex flex-col items-center p-2"
              >
                <Image
                  width={600}
                  height={400}
                  src={img.url}
                  alt="Uploaded"
                  className="w-full  object-cover rounded-md"
                />
                <button
                  onClick={() => handleCopy(img.url)}
                  className="mt-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm px-3 py-1 rounded-md"
                >
                  Copy Link
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No images found in database.
          </p>
        )}
      </div>
    </div>
  );
}
