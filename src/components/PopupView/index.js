/* eslint-disable jsx-a11y/control-has-associated-label */
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  RulesBtn,
  PopupContainer,
  Img,
  ImgContainer,
  CloseBtn,
} from './styledComponents'

const ReactPopup = () => (
  <Popup
    modal
    trigger={
      <RulesBtn type="button" className="rules-btn">
        Rules
      </RulesBtn>
    }
  >
    {close => (
      <PopupContainer>
        <ImgContainer>
          <CloseBtn type="button" onClick={() => close()}>
            <RiCloseLine size={25} />
          </CloseBtn>

          <Img
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </ImgContainer>
      </PopupContainer>
    )}
  </Popup>
)

export default ReactPopup
