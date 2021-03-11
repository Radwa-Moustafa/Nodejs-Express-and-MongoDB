const mongoose =  require('mongoose');
const Schema = mongoose.Schema;


var favoriteSchema = new Schema({
    postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
    dishes: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Dish'
        }]
    }, {
        timestamps: true
    });


var favorites = mongoose.model('Favorite', favoriteSchema);
module.exports = favorites;