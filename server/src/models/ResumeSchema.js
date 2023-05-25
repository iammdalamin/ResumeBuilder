const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({

  author: 
    { type: mongoose.Schema.Types.ObjectId, ref: 'users' }    
  ,
  title:{
    type: String,
    require:true
  },
  photo:{
    type: String,
    require:true
  },

  firstName: {
    type: String,
    require:true

  },
  lastName: {
    type: String,
    require:true

  },
  email: {
    type: String,
    require:true

  },
  phone: {
    type: String,
    require:true

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
  skills: [{ type: String }],
  languages: [{ type: String }],
    type: { type: String },
  premium:{type:Boolean}
});

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;
