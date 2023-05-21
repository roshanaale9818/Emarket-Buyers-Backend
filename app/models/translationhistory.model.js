module.exports= (sequelize, Sequelize)=>{
    const Translation = sequelize.define("translations", {
        userId: {
          type: Sequelize.STRING
        },
        translatedText: {
          type: Sequelize.STRING
        },
        translatedTo: {
          type: Sequelize.STRING
        }
      });
    
      return Translation;
    };
