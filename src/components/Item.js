import Button  from ',/Button'

const Item = ({backgroundImg,title,desc,descLink, leftBtnText, leftBtnLink,rightBtnText,rightBtnLink,twoButtons}) => {
  return (
    <div className="item" style={{

    }}>
      <div className="item">
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
        </div>
      </div>
    </div>
  )
}

export default Item;
