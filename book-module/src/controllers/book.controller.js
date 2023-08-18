const { bookservice } = require("../services");

/** create book details */
const CreateBook = async (req, res) => {
    try {
        const reqBody = req.body;

        const Book = await bookservice.CreatBook(reqBody);
        if (!Book) {
                 throw new Error("Something went wrong, please try again or later!");
        }
        res.status(200).json({
             success :true,
             message : "Book Details SuucessFully Created.....",
             data : {Book},
        })
    } catch (error) {
                   res.status(400).json({success : false ,message :error.message});
    }
}


/**   Get book list  */

   const GetbookList =  async (req ,res) =>{
          try {
               const GetList  = await bookservice.GetBookList(req,res);

               res.status(200).json({
                success :true,
                message : "SuccessFully All Book list Get.....",
                data : GetList,
               })
          } catch (error) {
               res.status(400).json({success : false ,message :error.message})
          }
   }
module.exports ={
     CreateBook,
     GetbookList
}

