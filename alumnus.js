const mongoose = require('mongoose')

// Define the schema for the alumnus
const alumnusSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  photos: {
    type: String,
    required: true
  },
  attendedCollege: {
    undergraduate: {
      type: String,
      required: true
    },
    graduate: {
      type: String
    }
  },
  job: {
    type: String,
    required: true
  },
  attendedOrganizations: [String]
})

// Create a Mongoose model
const Alumnus = mongoose.model('Alumnus', alumnusSchema)

// Function to create a new alumnus record
async function createAlumnus(
  name,
  age,
  photo,
  attendedCollege,
  job,
  attendedOrganizations
) {
  try {
    const alumnus = new Alumnus({
      name,
      age,
      photo,
      attendedCollege,
      job,
      attendedOrganizations
    })
    await alumnus.save()
    console.log('Alumnus created successfully:', alumnus)
  } catch (error) {
    console.error('Error creating alumnus:', error)
  }
}

// Function to retrieve all alumni
async function getAllAlumni() {
  try {
    const alumni = await Alumnus.find()
    return alumni
  } catch (error) {
    console.error('Error fetching alumni:', error)
  }
}

// Connect to MongoDB
/*mongoose
  .connect(
    'mongodb+srv://3564028649:JuZOZdN8WLlCONx8@gratiano.iuy275q.mongodb.net/school',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => {
    console.log('Connected to MongoDB')
    // Example usage:
    // createAlumnus('John Doe', 30, 'john_doe.jpg', { undergraduate: 'University of Example', graduate: 'Example Graduate School' }, 'Software Engineer', ['Alumni Association', 'Tech Club']);
    // getAllAlumni();
  })
  .catch((err) => console.error('Error connecting to MongoDB:', err))*/

module.exports = { createAlumnus, getAllAlumni }
