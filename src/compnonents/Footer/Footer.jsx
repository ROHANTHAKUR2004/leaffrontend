
const Footerr = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-300 flex flex-wrap justify-between p-5">
      <div className="w-full md:w-auto mb-5 md:mb-0">
        <h1 className="text-2xl font-bold text-white">ECOयुग PLATES</h1>
      </div>
    
      <div className="w-full md:w-auto mb-5 md:mb-0">
        <h2 className="text-green-400 mb-2">Business Partners</h2>
        <ul>
          <li><a href="" className="hover:underline">CO- founder's - Dev Chouhan, Raghav Patidar, Nikhil Patidar</a></li>
        </ul>
      </div>
      <div className="w-full md:w-auto">
        <h2 className="text-green-400 mb-2">Let's Talk</h2>
        <p className="mb-2"><i className="fas fa-phone mr-2"></i> NIKHIL  +919584185078</p>
        <p className="mb-2"><i className="fas fa-phone mr-2"></i> DEV +919340021284</p>
        <p className="mb-2"><i className="fas fa-phone mr-2"></i> RAGHAV  +919584185078</p>

        <p className="mb-2"><i className="fas fa-envelope mr-2"></i>EcoYugplates@gmail.com</p>
        
        <h2 className="text-green-400 mt-4 mb-2">Find Us</h2>
        <p>
          <i className="fas fa-map-marker-alt mr-2">Ecoयुग Plates</i><br />
          BHOPAL, Madhya Pradesh<br />      
 INDIA
        </p>
        <br />
        <p>Follow Us</p>
        <div className="flex space-x-3 mt-2">
          <a href="#" className="text-green-400 text-xl"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-green-400 text-xl"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-green-400 text-xl"><i className="fab fa-youtube"></i></a>
          <a href="#" className="text-green-400 text-xl"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>

    </footer>
  );
};

export default Footerr;
