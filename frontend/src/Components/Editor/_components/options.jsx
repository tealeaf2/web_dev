import AddImageSettings from "../../../Common/Components/AddImageSettings";
import BackgroundSettings from "../../../Common/Components/BackgroundSettings";
import ElementsSettings from "../../../Common/Components/ElementsSettings";
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
    desc: 'Add Text and Heading'
  },
  {
    name: 'Background',
    icon: <i className="bi bi-collection"></i>,
    desc: 'Change Canvas Background',
    component: <BackgroundSettings/>
  },
  {
    name: 'AI',
    icon: <i className="bi bi-stars"></i>,
    desc: 'More AI Features to enhance your design'
  },
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
      icon: <i class="bi bi-brush"></i>,
      // component: <FillColor />
  },
  {
      name: 'Stroke Color',
      icon: <i class="bi bi-palette-fill"></i>,
      // component: <BorderColor />
  },
  {
      name: 'Stroke Width',
      icon: <i class="bi bi-border-width"></i>,
      // component: <BorderWidth />
  },
  {
      name: 'Opacity',
      icon: <i class="bi bi-eye"></i>,
      // component: <Opacity />
  },
  {
      name: 'Rounded Corner',
      icon: <i class="bi bi-square-fill"></i>,
      // component: <BorderRadius />
  },
  {
      name: 'Bring Front',
      icon: <i class="bi bi-front"></i>,
      // component: <MoveForward />
  },
  {
      name: 'Move Back',
      icon: <i class="bi bi-layer-backward"></i>,
      // component: <MoveBackword />
  },
  // {
  //     name: 'Delete',
  //     icon: <i class="bi bi-trash"></i>
  // }
]