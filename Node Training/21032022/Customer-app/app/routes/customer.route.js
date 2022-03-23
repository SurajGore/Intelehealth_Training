module.exports = (app) => {
    const customers = require('../controllers/customer.controller');
    
    // Create a new Note
    app.post('/customer', customers.create);
    
    // Retrieve all customers
    app.get('/customer', customers.findAll);
    
    // Retrieve a single Note with CustomerId
    app.get('/customer/:customerId', customers.findOne);
    
    // Update a Note with CustomerId
    app.put ('/customer/:customerId', customers.update);
    
    // Delete a Note with CustomerId
    app.delete('/customer/:customerId', customers.delete);
}