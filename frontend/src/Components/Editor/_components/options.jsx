import AddImageSettings from "../../../Common/Components/AddImageSettings";
import BackgroundSettings from "../../../Common/Components/BackgroundSettings";
import ElementsSettings from "../../../Common/Components/ElementsSettings";
import BorderColor from "../../../Common/Components/Settings/BorderColor";
import BorderRadius from "../../../Common/Components/Settings/BorderRadius";
import BorderWidth from "../../../Common/Components/Settings/BorderWidth";
import FillColor from "../../../Common/Components/Settings/FillColor";
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
    desc: 'Update Canvas Size and Background'
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
    // component: <FontFamily />
  },
  {
      name: 'Bring Front',
      icon: <i className="bi bi-front"></i>,
      // component: <MoveForward />
  },
  {
      name: 'Move Back',
      icon: <i className="bi bi-layer-backward"></i>,
      // component: <MoveBackword />
  },
]