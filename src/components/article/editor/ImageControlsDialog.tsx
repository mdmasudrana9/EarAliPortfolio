"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Crop, Maximize2, Type, ImageIcon } from "lucide-react";

interface ImageControlsDialogProps {
  imageData: {
    src: string;
    alt?: string;
    title?: string;
    width?: number;
    height?: number;
  };
  onSave: (data: {
    src: string;
    alt?: string;
    title?: string;
    width?: number;
    height?: number;
  }) => void;
  onClose: () => void;
}

export function ImageControlsDialog({
  imageData,
  onSave,
  onClose,
}: ImageControlsDialogProps) {
  const [alt, setAlt] = useState(imageData.alt || "");
  const [caption, setCaption] = useState(imageData.title || "");
  const [width, setWidth] = useState(imageData.width || 0);
  const [height, setHeight] = useState(imageData.height || 0);
  const [scale, setScale] = useState(100);
  const [cropMode, setCropMode] = useState(false);
  const [cropData, setCropData] = useState({ x: 0, y: 0, width: 0, height: 0 });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [originalDimensions, setOriginalDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [croppedSrc, setCroppedSrc] = useState(imageData.src);

  // Initialize image dimensions
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setOriginalDimensions({ width: img.width, height: img.height });
      if (!width) setWidth(img.width);
      if (!height) setHeight(img.height);
    };
    img.src = imageData.src;
  }, [imageData.src]);

  // Update width/height when scale changes
  const handleResize = (newScale: number[]) => {
    const scaleValue = newScale[0];
    setScale(scaleValue);
    if (originalDimensions.width && originalDimensions.height) {
      setWidth(Math.round((originalDimensions.width * scaleValue) / 100));
      setHeight(Math.round((originalDimensions.height * scaleValue) / 100));
    }
  };

  // Keep scale synced if width/height manually changed
  const handleWidthChange = (newWidth: number) => {
    setWidth(newWidth);
    if (originalDimensions.width) {
      const newScale = Math.round((newWidth / originalDimensions.width) * 100);
      setScale(newScale);
    }
  };

  const handleHeightChange = (newHeight: number) => {
    setHeight(newHeight);
    if (originalDimensions.height) {
      const newScale = Math.round(
        (newHeight / originalDimensions.height) * 100
      );
      setScale(newScale);
    }
  };

  // Crop function
  const handleCrop = () => {
    if (!canvasRef.current || !imgRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imgRef.current;

    // Set canvas size to crop dimensions
    canvas.width = cropData.width || img.width;
    canvas.height = cropData.height || img.height;

    // Draw cropped image
    ctx.drawImage(
      img,
      cropData.x,
      cropData.y,
      cropData.width || img.width,
      cropData.height || img.height,
      0,
      0,
      canvas.width,
      canvas.height
    );

    // Convert to base64
    const croppedImage = canvas.toDataURL("image/png");
    setCroppedSrc(croppedImage);
    setCropMode(false);

    // Update width/height and original dimensions
    setWidth(canvas.width);
    setHeight(canvas.height);
    setOriginalDimensions({ width: canvas.width, height: canvas.height });
    setScale(100); // reset scale after crop
  };

  // Save final data
  const handleSave = () => {
    onSave({
      src: croppedSrc,
      alt,
      title: caption,
      width: width || undefined,
      height: height || undefined,
    });
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Image Controls</DialogTitle>
          <DialogDescription>
            Resize, crop, and add captions or alt text to your image
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="resize" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="resize">
              <Maximize2 className="h-4 w-4 mr-2" /> Resize
            </TabsTrigger>
            <TabsTrigger value="crop">
              <Crop className="h-4 w-4 mr-2" /> Crop
            </TabsTrigger>
            <TabsTrigger value="caption">
              <Type className="h-4 w-4 mr-2" /> Caption
            </TabsTrigger>
            <TabsTrigger value="alt">
              <ImageIcon className="h-4 w-4 mr-2" /> Alt Text
            </TabsTrigger>
          </TabsList>

          {/* Resize Tab */}
          <TabsContent value="resize" className="space-y-4">
            <Card className="p-4">
              <div className="space-y-4">
                <div className="flex justify-center">
                  <img
                    src={croppedSrc || "/placeholder.svg"}
                    alt="Preview"
                    style={{ width: `${scale}%`, maxWidth: "100%" }}
                    className="rounded-md border"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Scale: {scale}%</Label>
                  <Slider
                    value={[scale]}
                    onValueChange={handleResize}
                    min={10}
                    max={200}
                    step={5}
                    className="w-full"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="width">Width (px)</Label>
                    <Input
                      id="width"
                      type="number"
                      value={width}
                      onChange={(e) =>
                        handleWidthChange(Number(e.target.value))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height">Height (px)</Label>
                    <Input
                      id="height"
                      type="number"
                      value={height}
                      onChange={(e) =>
                        handleHeightChange(Number(e.target.value))
                      }
                    />
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  Original: {originalDimensions.width} ×{" "}
                  {originalDimensions.height}px
                </p>
              </div>
            </Card>
          </TabsContent>

          {/* Crop Tab */}
          <TabsContent value="crop" className="space-y-4">
            <Card className="p-4">
              <div className="space-y-4">
                {!cropMode ? (
                  <>
                    <div className="flex justify-center">
                      <img
                        ref={imgRef}
                        src={croppedSrc || "/placeholder.svg"}
                        alt="Preview"
                        className="max-w-full rounded-md border"
                      />
                    </div>
                    <Button
                      onClick={() => setCropMode(true)}
                      className="w-full"
                    >
                      Start Cropping
                    </Button>
                  </>
                ) : (
                  <>
                    <div className="space-y-2">
                      <Label>Crop Area (adjust values manually)</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <Label htmlFor="crop-x" className="text-xs">
                            X Position
                          </Label>
                          <Input
                            id="crop-x"
                            type="number"
                            value={cropData.x}
                            onChange={(e) =>
                              setCropData({
                                ...cropData,
                                x: Number(e.target.value),
                              })
                            }
                            min={0}
                          />
                        </div>
                        <div>
                          <Label htmlFor="crop-y" className="text-xs">
                            Y Position
                          </Label>
                          <Input
                            id="crop-y"
                            type="number"
                            value={cropData.y}
                            onChange={(e) =>
                              setCropData({
                                ...cropData,
                                y: Number(e.target.value),
                              })
                            }
                            min={0}
                          />
                        </div>
                        <div>
                          <Label htmlFor="crop-width" className="text-xs">
                            Width
                          </Label>
                          <Input
                            id="crop-width"
                            type="number"
                            value={cropData.width || originalDimensions.width}
                            onChange={(e) =>
                              setCropData({
                                ...cropData,
                                width: Number(e.target.value),
                              })
                            }
                            min={1}
                          />
                        </div>
                        <div>
                          <Label htmlFor="crop-height" className="text-xs">
                            Height
                          </Label>
                          <Input
                            id="crop-height"
                            type="number"
                            value={cropData.height || originalDimensions.height}
                            onChange={(e) =>
                              setCropData({
                                ...cropData,
                                height: Number(e.target.value),
                              })
                            }
                            min={1}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={handleCrop} className="flex-1">
                        Apply Crop
                      </Button>
                      <Button
                        onClick={() => setCropMode(false)}
                        variant="outline"
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                    </div>
                  </>
                )}
                <canvas ref={canvasRef} className="hidden" />
              </div>
            </Card>
          </TabsContent>

          {/* Caption Tab */}
          <TabsContent value="caption" className="space-y-4">
            <Card className="p-4">
              <div className="space-y-4">
                <div className="flex justify-center">
                  <img
                    src={croppedSrc || "/placeholder.svg"}
                    alt="Preview"
                    className="max-w-full max-h-64 rounded-md border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="caption">Caption (Title)</Label>
                  <Textarea
                    id="caption"
                    placeholder="Add a caption for your image..."
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    rows={3}
                  />
                  <p className="text-sm text-muted-foreground">
                    Captions appear as tooltips when hovering over the image
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Alt Text Tab */}
          <TabsContent value="alt" className="space-y-4">
            <Card className="p-4">
              <div className="space-y-4">
                <div className="flex justify-center">
                  <img
                    src={croppedSrc || "/placeholder.svg"}
                    alt="Preview"
                    className="max-w-full max-h-64 rounded-md border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="alt">Alt Text</Label>
                  <Textarea
                    id="alt"
                    placeholder="Describe this image for accessibility..."
                    value={alt}
                    onChange={(e) => setAlt(e.target.value)}
                    rows={3}
                  />
                  <p className="text-sm text-muted-foreground">
                    Alt text helps screen readers describe images to visually
                    impaired users
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
