const requestHandler = (req, res) => {
    res.send('Hello World');
  };
  
  test('Route handler returns "Hello World"', () => {
    const req = {}; 
    const res = {
      send: jest.fn() 
    };
  
    requestHandler(req, res);
  
    expect(res.send).toHaveBeenCalledWith('Hello World');
  });
  