const mongoose = require('mongoose');

const contactSubmissionSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxLength: [50, 'First name cannot be more than 50 characters']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    maxLength: [50, 'Last name cannot be more than 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    match: [/^[\d\s\-\+\(\)]+$/, 'Please provide a valid phone number']
  },
  company: {
    type: String,
    required: [true, 'Company name is required'],
    trim: true,
    maxLength: [100, 'Company name cannot be more than 100 characters']
  },
  employeeCount: {
    type: String,
    required: [true, 'Employee count is required'],
    enum: {
      values: ['1-10', '11-50', '51-200', '201-500', '500+'],
      message: 'Please select a valid employee count range'
    }
  },
  serviceTypes: {
    type: [String],
    required: [true, 'At least one service type must be selected'],
    validate: {
      validator: function(v) {
        return v && v.length > 0;
      },
      message: 'At least one service type must be selected'
    },
    enum: {
      values: [
        'Employee Shuttles',
        'Corporate Cars', 
        'Airport Transfers',
        'Event Transportation'
      ],
      message: 'Please select valid service types'
    }
  },
  message: {
    type: String,
    trim: true,
    maxLength: [1000, 'Message cannot be more than 1000 characters']
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'quoted', 'closed'],
    default: 'new'
  },
  notes: {
    type: String,
    trim: true,
    maxLength: [500, 'Notes cannot be more than 500 characters']
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Create indexes for better query performance
contactSubmissionSchema.index({ email: 1 });
contactSubmissionSchema.index({ company: 1 });
contactSubmissionSchema.index({ createdAt: -1 });
contactSubmissionSchema.index({ status: 1 });

// Virtual for full name
contactSubmissionSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});

// Static method to get submissions by date range
contactSubmissionSchema.statics.getByDateRange = function(startDate, endDate) {
  return this.find({
    createdAt: {
      $gte: startDate,
      $lte: endDate
    }
  }).sort({ createdAt: -1 });
};

// Static method to get submissions by status
contactSubmissionSchema.statics.getByStatus = function(status) {
  return this.find({ status }).sort({ createdAt: -1 });
};

// Instance method to mark as contacted
contactSubmissionSchema.methods.markAsContacted = function() {
  this.status = 'contacted';
  return this.save();
};

// Pre-save middleware to ensure serviceTypes is an array
contactSubmissionSchema.pre('save', function(next) {
  if (typeof this.serviceTypes === 'string') {
    this.serviceTypes = [this.serviceTypes];
  }
  next();
});

module.exports = mongoose.model('ContactSubmission', contactSubmissionSchema);