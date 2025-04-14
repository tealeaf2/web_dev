import AddImageSettings from "../../../Common/Components/AddImageSettings";
import BackgroundSettings from "../../../Common/Components/BackgroundSettings";
import ElementsSettings from "../../../Common/Components/ElementsSettings";

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
    components: <ElementsSettings />
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