const comments = require('../modle/comment')

class Comment{
  async  SetComment(req,res,next){
        var sendComment = comments(req.body)
        await  sendComment.save()
        res.redirect('back')
    }
}

module.exports = new Comment