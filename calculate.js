function calculateTotal() {
    // Preparation calculations
    var numOfUnits = parseInt(document.getElementById('numOfUnits').value, 10);
    var numPackages = parseInt(document.getElementById('numPackages').value, 10);
    var unitsPerPackage = parseInt(document.getElementById('unitsPerPackage').value, 10);
  
    // Validate inputs for Preparation
    if (isNaN(numOfUnits) || isNaN(numPackages) || isNaN(unitsPerPackage) || numOfUnits <= 0 || numPackages <= 0 || unitsPerPackage <= 0) {
      alert('Please enter positive numbers for all Preparation fields.');
      return;
    }
  
    var sub1 = numPackages * unitsPerPackage;
    var sub2 = numOfUnits + numPackages - sub1;
    var subTotal1 = sub2 <= 64 ? sub2 * 1.4 : sub2 * 1.1;
    var sub3 = numOfUnits - sub2;
    var subTotal2 = sub3 * 0.82;
  
    // Validate if numOfUnits is greater than sub1
    if (numOfUnits <= sub1) {
      document.getElementById('result-container').innerHTML = 'Error: The number of units must be greater than the total units in packages.';
      return;
    }
  
    // Packaging calculations
    var totalPackagingCost = 0;
    for (var i = 1; i <= 3; i++) {
      var materialTypeElement = document.getElementById('materialType' + i);
      var quantityElement = document.getElementById('quantity' + i);
  
      var materialCost = parseFloat(materialTypeElement.value);
      var quantity = parseInt(quantityElement.value, 10);
  
      // Validate inputs for Packaging
      if (isNaN(quantity) || quantity < 0) {
        alert('Please enter a valid quantity for Packaging material type ' + i + '.');
        return;
      }
  
      totalPackagingCost += materialCost * quantity;
    }
  
    // Shipping calculations
    var numOfShipments = parseInt(document.getElementById('numOfShipments').value, 10);
  
    // Validate input for Shipping
    if (isNaN(numOfShipments) || numOfShipments < 0) {
      alert('Please enter a valid number for Shipping.');
      return;
    }
  
    var shippingCost = numOfShipments <= 4 ? numOfShipments * 1 : numOfShipments * 0.8;
  
    // Calculate the final total cost
    var finalTotal = subTotal1 + subTotal2 + totalPackagingCost + shippingCost;
  
    // Display the results
    document.getElementById('result-container').innerHTML = 'Total Cost: ' + finalTotal.toFixed(2);
  }
  
  // Optional function to restrict inputs to positive numbers only
  function restrictInput(event) {
    if (event.key < '0' || event.key > '9') {
      event.preventDefault();
    }
  }
  
  // Add event listeners to restrict input (optional)
  document.getElementById('numOfUnits').addEventListener('keypress', restrictInput);
  document.getElementById('numPackages').addEventListener('keypress', restrictInput);
  document.getElementById('unitsPerPackage').addEventListener('keypress', restrictInput);
  document.getElementById('quantity1').addEventListener('keypress', restrictInput);
  document.getElementById('quantity2').addEventListener('keypress', restrictInput);
  document.getElementById('quantity3').addEventListener('keypress', restrictInput);
  document.getElementById('numOfShipments').addEventListener('keypress', restrictInput);
  