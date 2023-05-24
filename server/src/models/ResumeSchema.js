const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({

  author: 
    { type: mongoose.Types.ObjectId, ref: 'users' }    
  ,

  firstName: {
    type: String,
    
  },
  lastName: {
    type: String,
    
  },
  email: {
    type: String,
    
  },
  phone: {
    type: String,
    
  },
  address: {
    type: String,
  },
  linkedin: {
    type: String,
    
  },
  summary: {
    type: String,
    
  },
  education: [
    {
      institution: {
        type: String,
        
      },
      degree: {
        type: String,
        
      },
      startDate: {
        type: Date,
        
      },
      endDate: {
        type: Date,
      },
    },
  ],
  experience: [
    {
      company: {
        type: String,
        
      },
      position: {
        type: String,
        
      },
      startDate: {
        type: Date,
        
      },
      endDate: {
        type: Date,
      },
      responsibilities: [
        {
          type: String,
          
        },
      ],
    },
  ],
  skills: [
    {
      name: {
        type: String,
        
      },
      level: {
        type: String,
        
      },
    },
    ],
    type: { type: String },
  premium:{type:Boolean}
});

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;
