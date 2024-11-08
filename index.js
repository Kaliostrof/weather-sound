"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.css");
const rainy_bg_jpg_1 = __importDefault(require("./public/assets/rainy-bg.jpg"));
const winter_bg_jpg_1 = __importDefault(require("./public/assets/winter-bg.jpg"));
const summer = require("./public/assets/summer-bg.jpg");
const main = document.createElement("div");
const pic_div = document.createElement("div");
pic_div.className = "pictures-div";
const title = document.createElement("h1");
title.textContent = "Weather Sounds";
title.className = "main-title";
const summer_pic = document.createElement("img");
summer_pic.className = "pictures";
summer_pic.alt = "summer";
summer_pic.src = summer;
const autumn_pic = document.createElement("img");
autumn_pic.className = "pictures";
autumn_pic.alt = "autumn";
autumn_pic.src = rainy_bg_jpg_1.default;
const winter_pic = document.createElement("img");
winter_pic.className = "pictures";
winter_pic.alt = "winter";
winter_pic.src = winter_bg_jpg_1.default;
pic_div.append(summer_pic);
pic_div.append(autumn_pic);
pic_div.append(winter_pic);
main.append(title);
main.append(pic_div);
document.body.append(main);
//# sourceMappingURL=index.js.map