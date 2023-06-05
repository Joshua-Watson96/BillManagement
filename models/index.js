const Bill = require('./Bill');
const Category = require('./Category');
const User = require('./User');

//Bill belongs to Category
Bill.belongsTo(Category, {
    foreignKey: 'category_id',
});

//Category has many Bills
Category.hasMany(Bill,  {
    foreignKey: 'category_id',
});

//Bill belongs to User
Bill.belongsTo(User, {
    foreignKey: 'user_id'
});

//User has many Bills
User.hasMany(Bill, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = {
    Bill,
    Category,
    User
};
