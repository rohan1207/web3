import * as THREE from "three";

function createVideoAndTexture(src) {
  const video = document.createElement("video");
  video.src = src;
  video.crossOrigin = "anonymous";
  video.loop = true;
  video.muted = true;
  video.autoplay = true;
  video.playsInline = true;
  video.play().catch((e) => console.warn(`Autoplay prevented for ${src}:`, e));

  const texture = new THREE.VideoTexture(video);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.colorSpace = THREE.SRGBColorSpace;

  return { element: video, texture };
}

const designWork = createVideoAndTexture("/videos/designwork.mp4");
const devWork = createVideoAndTexture("/videos/devwork.mp4");

const videos = {
  designWork,
  devWork,
};

export default videos;
