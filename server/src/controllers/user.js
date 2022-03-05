const {user} = require('../../models')
const bcrypt = require("bcrypt");
const Joi = require('joi')
const jwt = require('jsonwebtoken');
exports.addUser = async(req, res) =>{
    try{
      const schema = Joi.object({
        fullname: Joi.string().min(5).required(),
        email: Joi.string().email().min(6).required(),
        password: Joi.string().min(6).required(),
        image: Joi.string().min(5)
      
      });
      const { error } = schema.validate(req.body);
      if (error) {
        return res.send({
          error: error.details[0].message,
        }); 
      }
      const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser= await user.create({
    
      fullname: req.body.fullname,
      email: req.body.email,
      password: hashedPassword,
      numberaccount: Date.now(),
      status: "client",
    });
    const tokenData = {
      id: newUser.id,
     
      email: newUser.email,
      fullname: newUser.fullname,
      status:newUser.status
    };
    console.log(process.env.TOKEN_KEY)
    const token = jwt.sign(tokenData, process.env.TOKEN_KEY);
        res.send({
            status: 'success',
            message: 'Add user finished',
            data: {
              fullname: newUser.fullname,
            
            },
            // token
            
          });
    }catch(error){
        console.log(error)
        res.send({
            status:'failed bro',
            message:'server error'
        })
    }
}

exports.checkAuth = async (req, res) => {
  try {
    const id = req.user.id;

    const dataUser = await user.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
    });

    if (!dataUser) {
      return res.status(404).send({
        status: "failed",
      });
    }

    res.send({
      status: "success...",
      data: {
        user: {
          id: dataUser.id,
          fullname: dataUser.fullname,
          email: dataUser.email,
          status:dataUser.status,
          numberaccount : dataUser.numberaccount
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status({
      status: "failed",
      message: "Server Error",
    });
  }
};
exports.login = async (req, res) => {
  // our validation schema here
  const schema = Joi.object({
    email: Joi.string().email().min(6).required(),
    password: Joi.string().min(6).required(),
  });

  // do validation and get error object from schema.validate
  const { error } = schema.validate(req.body);

  // if error exist send validation error message
  if (error)
    return res.status(400).send({
      error: {
        message: error.details[0].message,
      },
    });

  try {
    const userExist = await user.findOne({
      where: {
        email: req.body.email,
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });

    if (!userExist) {
      return res.send({
        status: 'failed',
        message: 'Email & password not match',
      });
    }

    const isValid = await bcrypt.compare(req.body.password, userExist.password);

    if (isValid == false) {
      return res.send({
        status: 'failed',
        message: 'Email & password not match',
      });
    }

    const tokenData = {
      id: userExist.id,
  
      email: userExist.email,
      fullname: userExist.fullname,
      status: userExist.status,
      numberaccount:userExist.numberaccount
    };
 
    const token = jwt.sign(tokenData, process.env.TOKEN_KEY);

    res.status(200).send({
      status: 'success...',
      data: {
        fullname: userExist.fullname,
        username: userExist.username,
        email: userExist.email,
        status: userExist.status,
        numberaccount:userExist.numberaccount,
        token
      }
      
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 'failed',
      message: 'Server Error',
    });
  }
};
exports.getUser = async (req, res) => {
  const id = req.user.id
  try {
    let data = await user.findOne({
      where :{
        id,
      },
      attributes: {
        exclude: ['password', 'createdAt', 'updatedAt'],
      },
    });
    data = JSON.parse(JSON.stringify(data));
    

    data = {
      ...data,
    
    };
    // console.log(data.image)
    // data = data.map((item) => {
    //   return { ...item, image: process.env.FILE_PATH + item.image };
    // });
    // data.image=process.env.FILE_PATH + item.image
    res.send({
      status: 'success',
      data: {
        data,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: 'failed',
      message: 'Server Error',
    });
  }
};