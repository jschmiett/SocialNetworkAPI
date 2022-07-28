const { Schema, model } = require('mongoose');

// Schema to create a course model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            // unique
            // trimmed
        },
        email: {
            type: String,
            required: true,
            // unique
            // must match valid email address - look into Mongoose's matching validation
        },
        thoughts: {
            // array of _id values referncing the Thought model
        },
        friends: {
            // array of _id values referencing the User model (self-reference)
        }

    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const Course = model('course', courseSchema);

module.exports = Course;

// create a virtual called friendCount that retrieves the length of the user's friends array field on query.

