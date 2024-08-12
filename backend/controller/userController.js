// import User from "../models/user";
//requestHandlers
//define methods here and use in routes as per requirment

export function test(req, res) {
  // const {user, ...others} = req
  // console.log({...others});
  const {user} = req
  res.json({user})
}


// get USer details

// update user details

// delete user details

// logout user


