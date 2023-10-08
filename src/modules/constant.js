import Earth from "../assets/earth.jpeg";
import Jupiter from "../assets/Jupiter.jpeg";
import Saturn from "../assets/Saturn.jpg";
import Mercury from "../assets/Mercury.jpeg";
import Moon from "../assets/Moon.jpeg";
import Neptune from "../assets/Neptune.jpeg";
import Uranus from "../assets/Uranus.jpg";
import Venus from "../assets/Venus.jpeg";
import Mars from "../assets/Mars.jpeg";
import Fallback from "../assets/Fallback.jpeg";

export const theme = {
  dark: "#111111",
  white: "#FFF",
  textColor: "#ffffff",
  logoColor: "rgba(255,255,255,1)",
  logoColorLight: "rgba(255,255,255,0.6)",
  grey: "#BDAFBE",
  blue: "#17366F",
  secondaryDark: "#494F55",
};

export const baseURL = "https://galaxify-bacend.vercel.app/api";

export const Planets={
    Earth:{image:Earth,radius:2.7},
    Moon:{image:Moon,radius:1.2},
    Mercury:{image:Mercury,radius:1.4},
    Mars:{image:Mars,radius:2},
    Neptune:{image:Neptune,radius:2.5},
    Venus:{image:Venus,radius:2.7},
    Jupiter:{image:Jupiter,radius:3.4},
    Uranus:{image:Uranus,radius:2.5},
    Saturn:{image:Saturn,radius:2.9},
    Titan:{image:Venus,radius:2.5},
    Fallback:{image:Fallback,radius:2.7},
    Cupid:{image:Moon,radius:1.9},
}
