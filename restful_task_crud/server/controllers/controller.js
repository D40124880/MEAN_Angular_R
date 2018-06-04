var mongoose = require('mongoose');
var Task = mongoose.model('Task');

module.exports = {
    
    all: function(req, res){
        Task.find({}, function(err, tasks){
            if (err){
                console.log("no tasks found");
                for(var key in err.errors){
                    req.flash('task', err.errors[key].message);
                    }
                return res.json({error: err})
            }else{
                console.log("got at least one task")
                return res.json(tasks);
            }
        })
    },

    display: function(req, res){
        console.log("passed id", req.params.id)
        Task.find({_id: req.params.id}, function(err, task){
            if(err){
                console.log("task not found")
                for(var key in err.errors){
                    req.flash('task', err.errors[key].message);
                    }
                res.json({error: err})
            }else{
                console.log('task found')
                return res.json(task);
            }
        })
    },

    new: function(req, res){
        form = req.body;
        console.log('form', form)
        var task = new Task({
            name: form.name,
            age: form.age,
            breed: form.breed,
        });
        task.save(function(err){
            if(err){
                console.log("creation failed")
                for(var key in err.errors){
                    req.flash('quote', err.errors[key].message);
                    }
                    res.json({error: err})
            }else{
                console.log("successfully created person")
                res.json(task);
            }  
        })
    },

    update: function(req, res){
        form = req.body;
        console.log("form", form)
        Task.find({_id: req.params.id}, function(err, task){
            console.log("task before", task)
            task[0].name = form.name;
            task[0].age = form.age;
            task[0].breed = form.breed;
            console.log("task after", task)
            task[0].save(function(err){
                if(err){
                    console.log("update failed")
                    for(var key in err.errors){
                        req.flash('task', err.errors[key].message);
                        }
                    res.json({error: err})
                }else{
                    console.log("successfully updated task");
                    res.json({message: "Success"})
                }   
            })
        })
    },

    destroy: function(req, res){
        Task.remove({_id: req.params.id}, function(err){
            if(err){
                console.log("Delete failed")
                for(var key in err.errors){
                    req.flash('task', err.errors[key].message);
                    }
                    res.json({error: err})   
            }else{
                console.log("successfully deleted task")
                res.json({message: "Success"})
            }   
        })
    },

// end of exports
};
