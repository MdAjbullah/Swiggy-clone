
import Header from './Copmonents/Header/Header';
import Categories from './Copmonents/Categories/Categories';
import Toprest from './Copmonents/Categories/Toprest';
import OnlineDelivery from './OnlineDelivery';
import PlaceForEat from './Copmonents/PlaceForEat'
import Cuisines from './Copmonents/Cuisines'
import Nearrest from './Copmonents/Nearrest'
import Footer from './Copmonents/Footer';
export default function App() {
  return (
    <>
     <Header />
     <Categories/>
     <Toprest />
     <OnlineDelivery />
     <PlaceForEat/>
     <Cuisines/>
     <Nearrest/>
     <Footer/>
    
    
    </>
  );
}