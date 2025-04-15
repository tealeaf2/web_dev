import AddImageSettings from "../../../Common/Components/AddImageSettings";
import BackgroundSettings from "../../../Common/Components/BackgroundSettings";
import ElementsSettings from "../../../Common/Components/ElementsSettings";
import BorderColor from "../../../Common/Components/Settings/BorderColor";
import BorderRadius from "../../../Common/Components/Settings/BorderRadius";
import BorderWidth from "../../../Common/Components/Settings/BorderWidth";
import FillColor from "../../../Common/Components/Settings/FillColor";
import FontFamily from "../../../Common/Components/Settings/FontFamily";
import Opacity from "../../../Common/Components/Settings/Opacity";
import TextSettings from "../../../Common/Components/TextSettings";
import circleImg from "../../../assets/elements/circle.png"
import lineImg from "../../../assets/elements/line.png"
import squareImg from "../../../assets/elements/square.png"
import triangleImg from "../../../assets/elements/triangle.png"

export const sideBarMenu = [
  {
    name: 'Templates',
    icon: <i className="bi bi-grid-1x2"></i>,
    desc: 'Select Prebuild Template'
  },
  {
    name: 'Elements',
    icon: <i className="bi bi-menu-app"></i>,
    desc: 'Select Shapes and Stickers',
    component: <ElementsSettings />
  },
  {
    name: 'Images',
    icon: <i className="bi bi-image"></i>,
    desc: 'Add Images or Upload your own',
    component: <AddImageSettings/>
  },
  {
    name: 'Text',
    icon: <i className="bi bi-fonts"></i>,
    desc: 'Add Text and Heading',
    component: <TextSettings />
  },
  {
    name: 'Background',
    icon: <i className="bi bi-collection"></i>,
    desc: 'Change Canvas Background',
    component: <BackgroundSettings/>
  },
  // Too much and not important to do
  // {
  //   name: 'AI',
  //   icon: <i className="bi bi-stars"></i>,
  //   desc: 'More AI Features to enhance your design'
  // },
  {
    name: 'Settings',
    icon: <i className="bi bi-gear"></i>,
    desc: 'Update Canvas Size'
  }
]

export const ShapeList = [
  {
      name: 'Circle',
      icon: circleImg
  },
  {
      name: 'Square',
      icon: squareImg
  },
  {
      name: 'Triangle',
      icon: triangleImg
  },
  {
      name: 'Line',
      icon: lineImg
  }
]

export const FontFamilyList = [
  "Arial",
  "Arial Black",
  "Verdana",
  "Helvetica",
  "Tahoma",
  "Trebuchet MS",
  "Times New Roman",
  "Georgia",
  "Garamond",
  "Courier New",
  "Brush Script MT",
  "Palatino",
  "Bookman",
  "Comic Sans MS",
  "Impact",
  "Lucida Sans Unicode",
  "Geneva",
  "Lucida Console",
]

export const shapesSettingsList = [
  {
      name: 'Fill',
      icon: <i className="bi bi-palette"></i>,
      component: <FillColor />
  },
  {
      name: 'Stroke Color',
      icon: <i className="bi bi-square"></i>,
      component: <BorderColor />
  },
  {
      name: 'Stroke Width',
      icon: <i className="bi bi-border-width"></i>,
      component: <BorderWidth />
  },
  {
      name: 'Opacity',
      icon: <i className="bi bi-eye"></i>,
      component: <Opacity />
  },
  {
      name: 'Rounded Corner',
      icon: <i className="bi bi-fullscreen"></i>,
      component: <BorderRadius />
  },
  {
      name: 'Font',
      icon: <i className="bi bi-alphabet"></i>,
      component: <FontFamily />
  },
  // {
  //     name: 'Bring Front',
  //     icon: <i className="bi bi-front"></i>,
  //     component: <MoveForward />
  // },
  // {
  //     name: 'Move Back',
  //     icon: <i className="bi bi-layer-backward"></i>,
  //     component: <MoveBackward />
  // },
]

export const StickerList = [
  'https://cdn-icons-png.flaticon.com/256/428/428094.png',
  'https://cdn-icons-png.flaticon.com/256/2111/2111463.png',
  'https://cdn-icons-png.flaticon.com/256/5968/5968764.png',
  'https://cdn-icons-png.flaticon.com/256/1384/1384060.png',
  'https://cdn-icons-png.flaticon.com/256/733/733585.png',
  'https://cdn-icons-png.flaticon.com/256/2111/2111646.png',
  'https://cdn-icons-png.flaticon.com/256/4494/4494477.png',
  'https://cdn-icons-png.flaticon.com/256/281/281764.png',
  'https://cdn-icons-png.flaticon.com/256/1409/1409941.png',
  'https://cdn-icons-png.flaticon.com/256/10851/10851235.png',
  'https://cdn-icons-png.flaticon.com/256/520/520460.png',
  'https://cdn-icons-png.flaticon.com/256/1791/1791311.png',
  'https://cdn-icons-png.flaticon.com/256/1791/1791320.png',
  'https://cdn-icons-png.flaticon.com/256/1791/1791292.png',
  'https://cdn-icons-png.flaticon.com/256/1791/1791355.png',
  'https://cdn-icons-png.flaticon.com/256/1791/1791307.png',
  'https://cdn-icons-png.flaticon.com/256/7996/7996409.png',
  'https://cdn-icons-png.flaticon.com/256/8760/8760748.png',
  'https://cdn-icons-png.flaticon.com/256/5171/5171530.png',
  'https://cdn-icons-png.flaticon.com/256/5175/5175169.png',
  'https://cdn-icons-png.flaticon.com/256/7096/7096435.png',
  'https://cdn-icons-png.flaticon.com/256/346/346167.png',
  'https://cdn-icons-png.flaticon.com/256/1776/1776968.png',
  'https://cdn-icons-png.flaticon.com/256/1497/1497177.png',
  'https://cdn-icons-png.flaticon.com/256/2517/2517029.png',
  'https://cdn-icons-png.flaticon.com/256/2276/2276906.png',
  'https://cdn-icons-png.flaticon.com/256/6604/6604292.png',
  'https://cdn-icons-png.flaticon.com/256/6010/6010131.png',
  'https://cdn-icons-png.flaticon.com/256/11167/11167978.png',
  'https://cdn-icons-png.flaticon.com/256/11145/11145432.png',
  'https://cdn-icons-png.flaticon.com/256/7645/7645528.png',
  'https://cdn-icons-png.flaticon.com/256/16116/16116383.png',
  'https://cdn-icons-png.flaticon.com/256/639/639373.png'
]