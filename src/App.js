import './App.css';
import Header from './components/Header';

import Accessories from './assets/Desktop-Accessories.jpg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'
import Item from './components/Item';

function App() {
  
  return (
    <div className="App">
      <Header />
      <div className="app_itemsContainer">
        <Item 
          backgroundImg={ModelS}
          title="Model S"
          desc="Order Online for Touchless Delivery"
          descLink=''
          leftBtnText="CUSTOM ORDER"
          leftBtnLink=''
          rightBtnText="EXISTING INVENTORY"
          rightBtnLink=''
          twoButtons='true'
          first='true'
        />
        <Item 
          backgroundImg={ModelY}
          title="Model Y"
          desc="Order Online for Touchless Delivery"
          descLink=''
          leftBtnText="CUSTOM ORDER"
          leftBtnLink=''
          rightBtnText="EXISTING INVENTORY"
          rightBtnLink=''
          twoButtons='true'
        />
        <Item 
          backgroundImg={Model3}
          title="Model 3"
          desc="Order Online for Touchless Delivery"
          descLink=''
          leftBtnText="CUSTOM ORDER"
          leftBtnLink=''
          rightBtnText="EXISTING INVENTORY"
          rightBtnLink=''
          twoButtons='true'
        />
        <Item 
          backgroundImg={ModelX}
          title="Model X"
          desc="Order Online for Touchless Delivery"
          descLink=''
          leftBtnText="CUSTOM ORDER"
          leftBtnLink=''
          rightBtnText="EXISTING INVENTORY"
          rightBtnLink=''
          twoButtons='true'
        />
        <Item 
          backgroundImg={SolarPanels}
          title="Lowest Cost Solar Panels in America"
          desc="Money-back guarantee"
          descLink=''
          leftBtnText="ORDER NOW"
          leftBtnLink=''
          rightBtnText="LEARN MORE"
          rightBtnLink=''
          twoButtons='true'
        />
        <Item 
          backgroundImg={SolarRoof}
          title="Solar for New Roofs"
          desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          descLink=''
          leftBtnText="ORDER NOW"
          leftBtnLink=''
          rightBtnText="LEARN MORE"
          rightBtnLink=''
          twoButtons='true'
        />
        <Item 
          backgroundImg={Accessories}
          title="Accessories"
          descLink=''
          leftBtnText="SHOP NOW"
          leftBtnLink=''
        />
      </div>
    </div>
  );
}

export default App;
