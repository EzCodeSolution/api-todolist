## TodoList API 😳
Make by Thanaha 
Github EzcodeSolution 😎

    npm install 
    sequelize db:migrate

ENV Need

 - nodeJs
 - mysql maria db
 - sequelize
 - database name thatodolist
 - configyour database config in your  config/config.js


   

API Document 

EndPoint 

    /api/v1/apiroute

Auth 
|method| route |status code| parameter| description |
|--|--|--|--|--|
| post | auth/login  |200|Email:string,Password:string|
| post | auth/register  |201| Email:string,ConfirmPassword:string,Password:string,FirstName:sting,LastName:"string,Google:string,Facebook:string|
| get | auth/logout  | 200 | null |ออกจากระบบจะทำการ banedtoken jwt|
ขี้เกียจเขียนต่อละ เอาไปเเค่นี้ก่อน
