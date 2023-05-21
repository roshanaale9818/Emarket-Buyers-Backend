module.exports = {
    HOST:"localhost",
    USER:"postgres",
    PASSWORD:"Padma9818@",
    DB:"emarket",
    dialect:"postgres",
    pool:{
        min:0,//min number of connection
        max:5, //max number of connection
        acquire:30000, //maximum time, in milliseconds, that pool will try to get connection before throwing error
        idle:10000//maximum time, in milliseconds, that a connection can be idle before being released
    }
}