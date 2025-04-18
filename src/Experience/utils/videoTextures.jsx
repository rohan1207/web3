import * as THREE from "three";

function createVideoAndTexture(src) {
  console.log(`PROD: Creating video element for: ${src}`); // Add logging distinct for prod build if possible
  const video = document.createElement("video");
  video.src = src;
  video.crossOrigin = "anonymous";
  video.loop = true;
  video.muted = true;
  video.autoplay = true;
  video.playsInline = true;
  // Consider removing video.play() here too, let VideoTexture handle it
  video.play().catch((e) => console.warn(`Autoplay prevented for ${src}:`, e)); // Add catch for browsers restricting autoplay

  const texture = new THREE.VideoTexture(video);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.colorSpace = THREE.SRGBColorSpace;

  return { element: video, texture };
}

console.log("PROD: videoTextures.js module execution START");

const designWork = createVideoAndTexture("/videos/designwork.mp4");
const devWork = createVideoAndTexture("/videos/devwork.mp4");

const videos = {
  designWork,
  devWork,
};

console.log("PROD: videoTextures.js module execution END");

export default videos;
