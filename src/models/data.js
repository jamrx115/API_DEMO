const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const data = new Schema({
    id: {
        type: String,
        required: true
    },
    temp: {
        type: Number,
        required: true
    },
    hum: {
        type: Number,
        required: true
    },
    presion: {
        type: Number,
        required: true
    },
    acel: {
        ax: {
            type: Number,
            required: true
        },
        ay: {
            type: Number,
            required: true
        },
        az: {
            type: Number,
            required: true
        }
    },
    giro: {
        gx: {
            type: Number,
            required: true
        },
        gy: {
            type: Number,
            required: true
        },
        gz: {
            type: Number,
            required: true
        }
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('demo', data);