import Button  from './Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Item.css';
import Footer from './Footer';

const Item = ({backgroundImg,first,title,desc,descLink, leftBtnText, leftBtnLink,rightBtnText,rightBtnLink,twoButtons}) => {
  return (
    <div className="item" style={{
      backgroundImage:`url(${backgroundImg})`
    }}>
      <div className="item_container">
        <div className="item_text">
          <p>{title}</p>
          <div className="item_textDesc">
            <p>{desc}</p>
          </div>
        </div>
        {/* lowe third */}
        <div className="item_lowerThird">
          <div className="item_button">
            <Button 
              imp='primary'
              text={leftBtnText} 
              link={leftBtnLink}/>
              {
                twoButtons && (
                  <Button 
                    imp='secondary' 
                    text={rightBtnText}
                    link={rightBtnLink} />
                    
                )
                
              }
          </div>

          {first && (
            <div className="item_expand">
               <ExpandMoreIcon />
            </div>
          )}
          {/* conditional footer */}
          {
            !twoButtons && (
              <Footer/>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Item;
