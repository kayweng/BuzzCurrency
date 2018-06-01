import fgInput from './components/Inputs/formGroupInput.vue'
import DropDown from './components/Dropdown.vue'
import Card from './components/Cards/Card.vue'
import {
  Input, InputNumber, DatePicker, Button, Checkbox, Select, Option,
  Carousel, CarouselItem,
  Tooltip,
  Collapse, CollapseItem,
  Container, Row, Col,
  Header, Aside, Main, Footer
} from 'element-ui'

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install (Vue) {
    Vue.component('fg-input', fgInput)
    Vue.component('drop-down', DropDown)
    Vue.component('card', Card)
    Vue.component(Input.name, Input)
    Vue.component(InputNumber.name, InputNumber)
    Vue.component(DatePicker.name, DatePicker)
    Vue.component(Button.name, Button)
    Vue.component(Checkbox.name, Checkbox)
    Vue.component(Select.name, Select)
    Vue.component(Option.name, Option)
    Vue.component(Carousel.name, Carousel)
    Vue.component(CarouselItem.name, CarouselItem)
    Vue.component(Tooltip.name, Tooltip)
    Vue.component(Collapse.name, Collapse)
    Vue.component(CollapseItem.name, CollapseItem)
    Vue.component(Container.name, Container)
    Vue.component(Row.name, Row)
    Vue.component(Col.name, Col)
    Vue.component(Header.name, Header)
    Vue.component(Aside.name, Aside)
    Vue.component(Main.name, Main)
    Vue.component(Footer.name, Footer)
  }
}

export default GlobalComponents
