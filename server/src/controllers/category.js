
const {category} = require('../../models')


exports.getCategories = async (req, res) => {
    try {
       
        
      let data = await category.findAll({
        
        attributes: {
          exclude: [ 'createdAt', 'updatedAt'],
        },
       
        
        
       
       
      });
      data = JSON.parse(JSON.stringify(data));

     
    
  
      res.send({
        status: 'success',
        data
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: 'failed',
        message: 'Server Error',
      });
    }
  };