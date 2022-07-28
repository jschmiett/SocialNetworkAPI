const { Schema, model } = require('mongoose');

// Schema to create a course model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            // must be between 1 and 280 characters
        },
        createdAt: {
            type: Date,
            // set default value to the current timestamp
            // use a getter method to format the timestamp on query
        },
        username: {
            // the user that created this thought
            type: String,
            required: true,
        },
        reactions: {
            // these are like replies
            // Array of nested documents created with the reactSchema
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

