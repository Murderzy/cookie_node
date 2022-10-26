import news from "../models/news.js";
import  bcrypt from"bcryptjs";

export const add_news = async (req, res, next) => {
    if (req.body) {
      const { title,text } = req.body;
     
      if(title != "" && text != ""){
        //валидация данных
        let biggest;
        if (news.length !== 0) {
          biggest = news.reduce((prev, current) =>
            prev.id > current.id ? prev : current
          );
        
        news.push({
          id: biggest ? biggest.id + 1 : 1,
          title:title,
          text:text,
        });
  
      }
    }
}
    next();

  };