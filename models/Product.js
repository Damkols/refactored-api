import mongoose from 'mongoose';
const { Schema } = mongoose;

//Products Schema
const ProductSchema = new Schema({
    "name": {
        type: String,
        required: true
    },
    "price": {
        type: Number,
        required: true
    },
    "quantity": {
        type: Number,
        required: true
    },
    "category": {
        type: String,
        required: true
    },
    "dateCreated": {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Products', ProductSchema);