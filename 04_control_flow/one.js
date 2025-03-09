// if statement

/*
if (condition){

}

if (true){  
'go inside the code'
}

if (false){  
    'don't go inside the code'
    }
    */

    const isUserLoggedIn=true
    if(isUserLoggedIn){
console.log(`user is logged in`);

    }

    //= is used to assign the value
    //<, >, ==, >=, <=, !=, ===

    if (3!=2){
        console.log(`three is not equal to two`);        
    }

    if (2 == "2") {
      console.log("equal");
    }else{
      console.log('not equal');
      
    }

    if (2 === "2") {
        console.log("excuted");
      }else{
      console.log('number two is not equal to string two');}

      if (2 != '3') {
        console.log("true");
      }else{
      console.log('number two is not equal to string three');}
//---------------------------------------------------------------------------

      if (2 !== '3') {
        console.log("true");
      }else{ console.log('number two is not equal to string three');}
     
//--------------------------------------------------------------------------------

const temprature=42
if (temprature<50){
  console.log('temprature is less than 50');
  
}else{
  console.log('temprature is greater than 50');
  
}

const score=200
if(score>100){
  power='Fly'
  console.log(`got the power to ${power}`);    
}
else{
  console.log(`no power to ${power}`);
  
}

const balance=1000
if (balance<500){
  console.log(`Balance is less than 500`);  
}else if(balance<700){
  console.log(`Balance is less than 700`);  
  
}else if(balance<900){
  console.log(`Balance is less than 900`);    
}else{
  console.log(`Balance is less than 1200`);  
}

const userLoggedIn=true
const userDabitcard=true
if (userLoggedIn && userDabitcard ){
  console.log(`Allowed to buy courses`);
  
}else{console.log(`Not allowed to buy courses`);}
//-------------------------------
const userLoggedInFromGoogle=true
const userLoggedInFromEmail=false
if (userLoggedInFromGoogle || userLoggedInFromEmail ){
  console.log(`User Logged In`);
  
}else{console.log(`User Not Logged In`);}