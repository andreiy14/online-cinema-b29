
const {film,category} = require('../../models')

exports.addFilm = async (req, res) => {
    try {
     
      const data = req.body
  
      let newData = await film.create({
        ...data,
        image: req.file.filename,
        
      });
      
      newData = JSON.parse(JSON.stringify(newData));

      newData = {
        ...newData,
       
        image: process.env.FILE_PATH + newData.image,
       

      };

      res.send({
        status: 'success',
        
        
        data:newData,

       
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: 'failed',
        message: 'Server Error',
        
      });
    }
  };

exports.getFilms = async (req, res) => {
    try {
     
        
      let data = await film.findAll({
        
        attributes: {
          exclude: [ 'createdAt', 'updatedAt'],
        },
        include:[{
          model:category,
          as:'categories'
        }]
        
        
       
       
      });
      data = JSON.parse(JSON.stringify(data));

      data = data.map((item) => {
        return { ...item, image: process.env.FILE_PATH + item.image,
          category: item.categories.category,
         };
      });
    
  
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

 exports.getFilm = async (req, res) => {
     const {id} = req.params
    try {
     
        
      let data = await film.findOne({
        where:{
            id:id,
        },
        attributes: {
          exclude: [ 'createdAt', 'updatedAt'],
        },
        include:[{
          model:category,
          as:'categories'
        }]
        
        
       
       
      });
      data = JSON.parse(JSON.stringify(data));

      data = {
        ...data,
        category:data.categories.category,
        image: process.env.FILE_PATH + data.image,
      };
    
  
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
  exports.getFilmCategory = async (req, res) => {
    // take id from s params
    const {id} = req.params
   try {
     let data = await film.findAll({
       where:{
         //condition
        category:id

        
       },
       attributes: {
         exclude: [ 'createdAt', 'updatedAt'],
       },
       include:[{
         model:category,
         as:'categories'
       }]
      
     });
     data = JSON.parse(JSON.stringify(data));

    
    data = data.map((item)=>{
      return{...item, image:process.env.FILE_PATH + item.image}
    })
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