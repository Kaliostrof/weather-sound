import "./index.css";
import SUM_PIC from "./public/assets/summer-bg.jpg";
import AUT_PIC from "./public/assets/rainy-bg.jpg";
import WIN_PIC from "./public/assets/winter-bg.jpg";
import sun_ic from "./public/assets/icons/sun.svg";
import rain_ic from "./public/assets/icons/cloud-rain.svg";
import snow_ic from "./public/assets/icons/cloud-snow.svg";
import pause_ic from "./public/assets/icons/pause.svg";
import SUM_SOUND from "./public/assets/sounds/summer.mp3";
import AUT_SOUND from "./public/assets/sounds/rain.mp3";
import WIN_SOUND from "./public/assets/sounds/winter.mp3";

const main = document.createElement("div");
main.className = "main";

const pic_div = document.createElement("div");
pic_div.className = "pictures-div";

const title = document.createElement("h1");
title.textContent = "Weather Sounds";
title.className = "main-title";

const summer_sound = document.createElement("audio");
summer_sound.className = "sound";
summer_sound.id = "sum_sound";
summer_sound.src = SUM_SOUND;

const autumn_sound = document.createElement("audio");
autumn_sound.className = "sound";
autumn_sound.id = "aut_sound";
autumn_sound.src = AUT_SOUND;

const winter_sound = document.createElement("audio");
winter_sound.className = "sound";
winter_sound.id = "win_sound";
winter_sound.src = WIN_SOUND;

const summer_div = document.createElement("div");
summer_div.className = "pictures";

const autumn_div = document.createElement("div");
autumn_div.className = "pictures";

const winter_div = document.createElement("div");
winter_div.className = "pictures";

const summer_icon = document.createElement("img");
summer_icon.className = "svg";
summer_icon.id = "sum_ic";
summer_icon.src = sun_ic;
summer_icon.append(summer_sound);

const btn_sum = document.createElement("button");
btn_sum.id = "btn_sum";
btn_sum.className = "btn";
btn_sum.append(summer_icon);

const summer_pic = document.createElement("img");
summer_pic.className = "pictures";
summer_pic.id = "summer";
summer_pic.src = SUM_PIC;

summer_div.append(summer_pic);
summer_div.append(btn_sum);

const autumn_icon = document.createElement("img");
autumn_icon.className = "svg";
autumn_icon.id = "aut_ic";
autumn_icon.src = rain_ic;
autumn_icon.append(autumn_sound);

const btn_aut = document.createElement("button");
btn_aut.id = "btn_aut";
btn_aut.className = "btn";
btn_aut.append(autumn_icon);

const autumn_pic = document.createElement("img");
autumn_pic.className = "pictures";
autumn_pic.id = "autumn";
autumn_pic.src = AUT_PIC;

autumn_div.append(autumn_pic);
autumn_div.append(btn_aut);

const winter_icon = document.createElement("img");
winter_icon.className = "svg";
winter_icon.id = "win_ic";
winter_icon.src = snow_ic;
winter_icon.append(winter_sound);

const btn_win = document.createElement("button");
btn_win.id = "btn_win";
btn_win.className = "btn";
btn_win.append(winter_icon);

const winter_pic = document.createElement("img");
winter_pic.className = "pictures";
winter_pic.id = "winter";
winter_pic.src = WIN_PIC;

winter_div.append(winter_pic);
winter_div.append(btn_win);

pic_div.append(summer_div);
pic_div.append(autumn_div);
pic_div.append(winter_div);

const volume_slider = document.createElement("input");
volume_slider.className = "slider";
volume_slider.id = "vol";
volume_slider.type = "range";
volume_slider.name = "range";
volume_slider.min = "0";
volume_slider.max = "1";
volume_slider.step = "0.1";
volume_slider.value = "1";

const volume_label = document.createElement("label");
volume_label.textContent = "Громкость";

const volume_div = document.createElement("div");
volume_div.className = "slider-div";
volume_div.append(volume_label);
volume_div.append(volume_slider);

main.append(title);
main.append(pic_div);
main.append(volume_div);

document.body.append(main);

const new_body = document.querySelector("body") as HTMLElement;

new_body.style.backgroundImage = `url(${summer_pic.src})`;

document.addEventListener("input", () => {
  summer_sound.volume = Number(volume_slider.value);
  autumn_sound.volume = Number(volume_slider.value);
  winter_sound.volume = Number(volume_slider.value);
});

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    const icon = e.target as HTMLElement;

    let image;
    let id;
    switch (icon.id) {
      case "sum_ic":
        image = summer_pic.src;
        id = "sum_sound";
        onPlay(id, image);
        break;
      case "aut_ic":
        image = autumn_pic.src;
        id = "aut_sound";
        onPlay(id, image);
        break;

      case "win_ic":
        image = winter_pic.src;
        id = "win_sound";
        onPlay(id, image);
        break;
      default:
        console.log("Просто заглушка");
    }
  })
);
function onPlay(id: string, image: string) {
  const allMusic = document.querySelectorAll("audio");
  allMusic.forEach((sound) => {
    sound.pause();
    let svg = sound.closest(".svg");
    let old_source;
    switch (svg?.id) {
      case "sum_ic":
        old_source = sun_ic;
        break;
      case "aut_ic":
        old_source = rain_ic;
        break;

      case "win_ic":
        old_source = snow_ic;
        break;
      default:
        console.log("Просто заглушка");
    }
    svg?.setAttribute("src", old_source);

    if (sound.id === id) {
      if (sound.currentTime > 0) {
        sound.currentTime = 0.0;
      } else {
        const backgr = document.querySelector("body") as HTMLElement;
        backgr.style.backgroundImage = `url(${image})`;
        svg?.setAttribute("src", pause_ic);
        sound.play();
      }
    }
  });
}
