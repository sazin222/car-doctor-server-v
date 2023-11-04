// step 
// 1 . install jsonwebtoken 
// 2. jwt(payload, secret, {expiresIn:})
// 3. token send client side 

// how to store token on client side 

// 1. memory-- ok type 
// 2. LocalStorage --- ok type (xss)
// 3. cookies:httpOnly ---- 

// set the cookies http only for development secure: false 

// cors app.use(cors({
//   origin:['http://localhost:5173/'],
//   credentials:true 
// }))

// client side axios setting 

// in axios set withCredentials true 

// to send cookies from the client side make sure you added withCredentials true for the api call using axios 

// use cookies parser in backend as a middleWare 