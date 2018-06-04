const mongoose = require('mongoose');
const Dog = mongoose.model('Dog');

module.exports = {
    index(req, res){
        Dog.find({}, (err, dogs)=>{
            if(err){
                errors = [];
                for(e in err.errors){
                    errors.push(err.errors[e])
                }
                return res.json({'errors': errors})
            }else{
                return res.json(dogs);
            }
        })
    },
    create(req, res){
        var dog = new Dog(req.body);
        dog.save((err, savedDog)=>{
            if(err){
                errors = [];
                for (e in err.errors) {
                    errors.push(err.errors[e].message)
                }
                return res.json({'errors': errors});
            }else{
                return res.json(savedDog)
            }
        })
    },
    singleDog(req, res){
        Dog.findOne({_id:req.params.id}, (err, dog)=>{
            if(err) return res.json(err);
            return res.json(dog);
        })
    },
    deleteDog(req, res){
        Dog.findOne({ _id: req.params.id }, (err, dog) => {
            if (err) return res.json(err);
            else{
                dog.remove();
                res.json({'success': 'Dog deleted'})
            }
        })
    },
    updateDog(req, res){
        Dog.update({_id: req.params.id}, req.body, (err, dog)=>{
            if(err) return res.json(err);
            else{
                return res.json({'updated': 'Updated'})
            }
        })
    }
}