module.exports = (sequelize, DataTypes) => {
    const Room = sequelize.define("Room", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true // Automatically gets converted to SERIAL for postgres
        },
        roomType: {
            type: DataTypes.ENUM,
            values: ['suite', 'VIP', 'normal','single','double'],
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nbRoomAvailable: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
       
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    });


   
    Room.associate = models => {
        Room.belongsToMany(models.Discounts, {
            through: 'discount_room',
            as: 'dis_room',
            foreignkey: {
                allowNull: false
            }
        });
    };

    Room.associate = models => {
        Room.belongsTo(models.Booking, {
            foreignkey: {
                allowNull: false
            }
        });
    };

    return Room;
};
