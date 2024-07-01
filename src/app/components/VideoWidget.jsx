import React from "react";
import clip from "../../assets/videos/edufund.mp4"
function VideoWidget() {
  return (
    <div>
      <div class="fixed bottom-12 right-20 bg-slate-400">
        <div class="relative">
          <div class="absolute-center">
            <svg class="circle-svg" viewBox="0 0 500 500">
              <defs>
                <path
                  d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
                  id="textcircle_top"
                >
                  <animateTransform
                    attributeName="transform"
                    begin="0s"
                    dur="20s"
                    type="rotate"
                    from="0 250 250"
                    to="360 250 250"
                    repeatCount="indefinite"
                  />
                </path>
              </defs>
              <text class="circle-text" dy="70" textLength="1220">
                <textPath xlink:href="#textcircle_top">
                  View Our Showreels View Our Showreels
                </textPath>
              </text>
            </svg>
          </div>
          <div class="absolute-center">
            <div class="showreels-div">
              <video class="showreels-video" loop autoplay muted>
                <source
                //   src="https://github.com/ahampriyanshu/gfg/raw/main/media/showreel.mp4"
                  src={clip}
                  type="video/mp4"
                />
                <p>Watch our keynote</p>
              </video>
              <img
                alt="play"
                class="showreels-btn"
                src="https://github.com/ahampriyanshu/gfg/raw/main/media/play.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoWidget;
