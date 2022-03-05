const {transaction,user,film} = require('../../models')
exports.buyFilm = async (req, res) => {
    try {
      
      const data = req.body
  
      let newData = await transaction.create({
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


  exports.getTransaction = async (req, res) => {
    
    try {
      let data = await transaction.findAll({
       
        attributes: {
          exclude: [ 'createdAt', 'updatedAt'],
        },
        include: [{
          model:user,
          as:'user',
          
        },
        {
          model:film,
          as:'film'
        }
      ]
        

      });
      data = JSON.parse(JSON.stringify(data));
      
      data = data.map((item) => {
        return { ...item, 
          idUser:item.user.fullname,
          idFilm:item.film.title,
          film:film,
          price:item.film.price      
        };
});
      
      // console.log(data.image)
      // data = data.map((item) => {
      //   return { ...item, image: process.env.FILE_PATH + item.image };
      // });
      // data.image=process.env.FILE_PATH + item.image
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
  exports.getTransactionUser = async (req, res) => {
    const id = req.user.id
    console.log(id)
    try {
      let data = await transaction.findAll({
       where:{
          idUser:  req.user.id
       },
       include: [{
        model:user,
        as:'user',
        
      },
      {
        model:film,
        as:'film'
      }
    ]
        
        

      });
      data = JSON.parse(JSON.stringify(data));
      
      
      data = data.map((item) => {
        return { ...item, 
          idUser:item.user.fullname,
          idFilm:item.film.title,
          film:film,
          price:item.film.price  
        };
});
      
      // console.log(data.image)
      // data = data.map((item) => {
      //   return { ...item, image: process.env.FILE_PATH + item.image };
      // });
      // data.image=process.env.FILE_PATH + item.image
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
  exports.getFilmApproved = async (req, res) => {
    const id = req.user.id
    console.log(id)
    try {
      let data = await transaction.findAll({
       where:{
          idUser:  req.user.id,
          status:'Approved'
       },
       include: [
      {
        model:film,
        as:'film'
      }
    ]
        
        

      });
      data = JSON.parse(JSON.stringify(data));
      
      
      data = data.map((item) => {
        return { ...item, 
       
         
          image: process.env.FILE_PATH + item.film.image,
          film:film,
          idFilm:item.film.id
        };
});
      
      // console.log(data.image)
      // data = data.map((item) => {
      //   return { ...item, image: process.env.FILE_PATH + item.image };
      // });
      // data.image=process.env.FILE_PATH + item.image
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
  exports.getApprovement = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await transaction.findOne({
        where: {
          id,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
  
      res.send({
        status: "success...",
        data,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        status: "failed",
        message: "Server Error",
      });
    }
  };



  
  exports.updateTransaction = async (req, res) => {
  
    try {
      const {id} = req.params
      const newData ={
        status: req.body.status,
      
        
      }
  
      let data = await transaction.update(newData, {
        where: {
          id,
        },
       
      });
    data = JSON.parse(JSON.stringify(data));
  
        data = {
          ...data,
         
        };
      
      
      res.send({
        status: 'success',
        message: `Update transaction id: ${id} finished`,
        data:data
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: 'failed',
        message: 'Server Error',
        
      });
    }
  };