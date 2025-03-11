import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: "Compact Tractor",
    description: "30-50 HP compact tractor, perfect for small to medium farms and landscaping",
    price: 150,
    priceUnit: "day",
    image: "https://www.masseyferguson.com/content/dam/public/masseyfergusonglobal/markets/en_us/assets/tractors/mf-1800-m/product-card/mf-1800-m-product-card-700x700.jpg",
    category: "Tractors",
    availability: "In Stock",
    specifications: "30-50 HP, 4WD, Hydrostatic transmission, Loader-ready"
  },
  {
    id: 2,
    name: "Utility Tractor",
    description: "60-120 HP utility tractor for medium to large scale farming operations",
    price: 250,
    priceUnit: "day",
    image: "https://compactequip.com/wp-content/uploads/2021/04/john-deere-utility-tractor-700x418.jpg",
    category: "Tractors",
    availability: "In Stock",
    specifications: "60-120 HP, 4WD, PowerShift transmission, Climate controlled cab"
  },
  {
    id: 3,
    name: "Row Crop Tractor",
    description: "175-320 HP tractor designed for large scale row crop production",
    price: 400,
    priceUnit: "day",
    image: "https://www.deere.ca/assets/images/region-4/products/tractors/8r-r4f063896.jpg",
    category: "Tractors",
    availability: "Limited Availability",
    specifications: "175-320 HP, 4WD, GPS ready, Precision farming compatible"
  },
  {
    id: 4,
    name: "3-Bottom Plow",
    description: "Standard 3-bottom moldboard plow for soil preparation",
    price: 80,
    priceUnit: "day",
    image: "https://bigiron.blob.core.windows.net/public/items/31dbc49f3b89e71180c000155d746525/internationalharvestor3163bottomplow-5.jpg",
    category: "Plows",
    availability: "In Stock",
    specifications: "3-bottom, Adjustable width, Spring-loaded safety release"
  },
  {
    id: 5,
    name: "Disc Harrow",
    description: "Heavy-duty disc harrow for breaking up soil and incorporating crop residue",
    price: 100,
    priceUnit: "day",
    image: "https://media.kubota.io/uploads/DH2572-product.jpg",
    category: "Tillage Equipment",
    availability: "In Stock",
    specifications: "20-foot width, Hydraulic fold, Adjustable gang angles"
  },
  {
    id: 6,
    name: "Combine Harvester",
    description: "Self-propelled combine for efficient grain harvesting",
    price: 500,
    priceUnit: "day",
    image: "https://www.mechanicalpower.net/wp-content/uploads/2023/05/Combine-Harvester.jpg",
    category: "Harvesters",
    availability: "Limited Availability",
    specifications: "300 HP, 30-foot header, Yield mapping, GPS compatible"
  },
  {
    id: 7,
    name: "Seed Drill",
    description: "Precision seed drill for accurate planting of various crops",
    price: 120,
    priceUnit: "day",
    image: "https://kj1bcdn.b-cdn.net/media/85303/1606917232-2.jpg",
    category: "Planting Equipment",
    availability: "In Stock",
    specifications: "15-foot width, Computer controlled seed rate, No-till capable"
  },
  {
    id: 8,
    name: "Sprayer",
    description: "Self-propelled sprayer for applying fertilizers and crop protection products",
    price: 200,
    priceUnit: "day",
    image: "https://cdn.shopify.com/s/files/1/0722/2059/files/inv-tapas-pahalwaan-202-double-motor-battery-sprayer-12x12-file-16162.jpg?v=1737453338",
    category: "Crop Care",
    availability: "In Stock",
    specifications: "1000-gallon tank, 80-foot boom, GPS guidance, Auto-rate control"
  }
];

const AgriRentalApp = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [rentalDays, setRentalDays] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  
  const handleRentClick = (product) => {
    setSelectedProduct(product);
    setShowDetails(true);
  };
  
  const handleCloseDetails = () => {
    setShowDetails(false);
  };
  
  const handleProceedToPayment = () => {
    console.log('proceeding to payment')
    setShowDetails(false);
    setShowPayment(true);
  };
  
  const handleClosePayment = () => {
    setShowPayment(false);
    setShowDetails(true);
  };
  
  const handleSubmitPayment = (e) => {
    e.preventDefault();
    setPaymentSuccess(true);
    setShowPayment(false);
  };
  
  const handleBackToProducts = () => {
    setPaymentSuccess(false);
    setSelectedProduct(null);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="bg-green-100 rounded-lg p-6 mb-8 text-center">
          <h1 className="text-3xl font-bold text-green-800 mb-4">Agricultural Equipment Rental</h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Rent high-quality farming equipment for your agricultural needs. From tractors to harvesters, 
            we provide reliable machinery to help you maximize productivity on your farm.
          </p>
        </section>
        
        {/* Products Grid */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Equipment</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <img src={product.image} alt={product.name} className="max-h-40 max-w-full object-contain" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-green-700">₹{product.price}/{product.priceUnit}</span>
                    <span className="text-sm text-gray-500">{product.category}</span>
                  </div>
                  <button 
                    onClick={() => handleRentClick(product)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-medium transition-colors"
                  >
                    Rent Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      {/* Product Detail Modal */}
      {showDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-scroll">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-90vh overflow-y-auto">
            <div className="p-6 mt-12">
              <div className="flex justify-between items-start my-8">
                <h2 className="text-2xl font-bold text-gray-800">{selectedProduct.name}</h2>
                <button onClick={handleCloseDetails} className="text-gray-400 hover:text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center justify-center bg-gray-100 rounded-lg p-4">
                  <img src={selectedProduct.image} alt={selectedProduct.name} className="max-h-64 max-w-full object-contain" />
                </div>
                
                <div>
                  <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Category:</span>
                      <span>{selectedProduct.category}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Price:</span>
                      <span>₹{selectedProduct.price}/{selectedProduct.priceUnit}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Availability:</span>
                      <span className={selectedProduct.availability === "In Stock" ? "text-green-600" : "text-orange-500"}>
                        {selectedProduct.availability}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Specifications:</span>
                      <span className="text-right">{selectedProduct.specifications}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 border-t pt-6">
                <h3 className="text-xl font-semibold mb-4">Rental Options</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                    <input 
                      type="date" 
                      className="w-full p-2 border border-gray-300 rounded"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                    <input 
                      type="date" 
                      className="w-full p-2 border border-gray-300 rounded"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rental Duration (days)</label>
                  <div className="flex items-center">
                    <button 
                      className="bg-gray-200 px-3 py-1 rounded-l"
                      onClick={() => setRentalDays(Math.max(1, rentalDays - 1))}
                    >
                      -
                    </button>
                    <input 
                      type="number" 
                      min="1"
                      className="w-16 text-center p-1 border-y border-gray-300"
                      value={rentalDays}
                      onChange={(e) => setRentalDays(Math.max(1, parseInt(e.target.value) || 1))}
                    />
                    <button 
                      className="bg-gray-200 px-3 py-1 rounded-r"
                      onClick={() => setRentalDays(rentalDays + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg flex justify-between items-center mb-6">
                  <div>
                    <span className="block text-sm text-gray-600">Total Rental Cost:</span>
                    <span className="text-xl font-bold text-green-700">
                      ₹{selectedProduct.price * rentalDays}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    ₹{selectedProduct.price} × {rentalDays} {rentalDays === 1 ? 'day' : 'days'}
                  </div>
                </div>
                
                <div className="relative group w-full">
                  <button 
                    onClick={handleProceedToPayment}
                    disabled={!startDate || !endDate}
                    className={`w-full py-3 rounded-lg font-medium transition-colors text-white relative
                      ${!startDate || !endDate ? 'bg-green-500 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}>
                    Proceed to Payment
                  </button>

                  {(!startDate || !endDate) && (
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max bg-gray-800 text-white text-xs py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                      Please set a date first
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Payment Modal */}
      {showPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-800">Payment Details</h2>
                <button onClick={handleClosePayment} className="text-gray-400 hover:text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="mb-6 bg-gray-100 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
                <div className="flex justify-between py-2 border-b">
                  <span>{selectedProduct.name}</span>
                  <span>₹{selectedProduct.price} / day</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Rental Period</span>
                  <span>{rentalDays} {rentalDays === 1 ? 'day' : 'days'}</span>
                </div>
                <div className="flex justify-between py-2 font-bold">
                  <span>Total Amount</span>
                  <span>₹{selectedProduct.price * rentalDays}</span>
                </div>
              </div>
              
              <form onSubmit={handleSubmitPayment}>
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                    <input 
                      type="text" 
                      placeholder="1234 5678 9012 3456" 
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Expiration Date</label>
                      <input 
                        type="text" 
                        placeholder="MM/YY" 
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">CVC</label>
                      <input 
                        type="text" 
                        placeholder="123" 
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Billing Address</label>
                    <input 
                      type="text" 
                      placeholder="123 Main St, City, Country" 
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Complete Payment
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      
      {/* Payment Success Modal */}
      {paymentSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full text-center p-6">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h2>
            <p className="text-gray-600 mb-6">
              Your rental of {selectedProduct.name} has been confirmed. You will receive a confirmation email shortly.
            </p>
            
            <button 
              onClick={handleBackToProducts}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors"
            >
              Back to Equipment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgriRentalApp;
