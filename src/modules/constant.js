import Earth from "../assets/earth.jpeg";
import Jupiter from "../assets/Jupiter.jpeg";
import Saturn from "../assets/Saturn.jpg";
import Mercury from "../assets/Mercury.jpeg";
import Moon from "../assets/Moon.jpeg";
import Neptune from "../assets/Neptune.jpeg";
import Uranus from "../assets/Uranus.jpg";
import Venus from "../assets/Venus.jpeg"
import Mars from "../assets/Mars.jpeg"
import Fallback from "../assets/Fallback.jpeg"

export const theme = {
  dark: "#111111",
  white: "#FFF",
  textColor: "#ffffff",
  logoColor: "rgba(255,255,255,1)",
  logoColorLight: "rgba(255,255,255,0.6)",
  grey: "#BDAFBE",
  blue: "#17366F",
};

export const baseURL = "https://galaxify-bacend.vercel.app/api";

export const Planets={
    Earth:Earth,
    Moon:Moon,
    Mercury:Mercury,
    Mars:Mars,
    Neptune:Neptune,
    Venus:Venus,
    Jupiter:Jupiter,
    Uranus:Uranus,
    Saturn:Saturn,
    Titan:Venus,
    Fallback:Fallback,
    Cupid:Moon,
}