"use client";

import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { VideoFormData } from "@/redux/features/videos/types";
import { useCreateVideoMutation } from "@/redux/features/videos/videoApi";
import { toast } from "sonner";

const categories = [
  "personal development",
  "business & entrepreneurship",
  "financial literacy",
  "podcast",
] as const;

interface UploadPageProps {
  onSuccess?: () => void;
}

export function UploadPage({ onSuccess }: UploadPageProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<VideoFormData>();

  const [createVideo] = useCreateVideoMutation();

  const onSubmit = async (data: VideoFormData) => {
    try {
      await createVideo(data).unwrap();
      toast.success("Video saved successfully");
      reset();
      if (onSuccess) onSuccess();
    } catch (error) {
      toast.error("Failed to save video");
      console.error(error);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-semibold">Upload Video</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Enter video title"
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <p className="text-red-600 text-sm">{errors.title.message}</p>
            )}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Enter video description"
              rows={4}
              {...register("description", {
                required: "Description is required",
              })}
            />
            {errors.description && (
              <p className="text-red-600 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Thumbnail */}
          <div className="space-y-2">
            <Label htmlFor="thumbnail">Thumbnail</Label>
            <Input
              id="thumbnail"
              placeholder="Enter thumbnail image URL"
              type="url"
              {...register("thumbnail", {
                required: "Thumbnail URL is required",
              })}
            />
            {errors.thumbnail && (
              <p className="text-red-600 text-sm">{errors.thumbnail.message}</p>
            )}
          </div>

          {/* Video URL */}
          <div className="space-y-2">
            <Label htmlFor="videoUrl">Video URL</Label>
            <Input
              id="videoUrl"
              placeholder="Enter YouTube video URL"
              type="url"
              {...register("videoUrl", { required: "Video URL is required" })}
            />
            {errors.videoUrl && (
              <p className="text-red-600 text-sm">{errors.videoUrl.message}</p>
            )}
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select onValueChange={(value) => setValue("category", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.category && (
              <p className="text-red-600 text-sm">{errors.category.message}</p>
            )}
          </div>

          <Button variant={"outline"} type="submit" className="w-full">
            Save
          </Button>
        </form>
      </CardContent>
    </div>
  );
}
