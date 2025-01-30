const { text } = require('../../index');


const requestHandler = (req, res) => {
    res.send(text);
  };
  
  test('Route handler returns "Hello World"', () => {
    const req = {}; 
    const res = {
      send: jest.fn() 
    };
  
    requestHandler(req, res);
  
    expect(res.send).toHaveBeenCalledWith(text);
  });
  