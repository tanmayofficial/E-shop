import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Footer from './components/footer/Footer';
import ShippingAndPayment from './components/mainContent/shipping information/ShippingAndPayment';

function App() {
  return (
    <div className="">
      <Navbar />
      <ShippingAndPayment />
      <Footer />
    </div>
  );
}

export default App;
