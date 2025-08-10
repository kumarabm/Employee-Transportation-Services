const ContactSubmission = require('../models/ContactSubmission');

// @desc    Create new contact submission
// @route   POST /api/contact
// @access  Public
const createSubmission = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      employeeCount,
      serviceTypes,
      message
    } = req.body;

    // Create new submission
    const submission = await ContactSubmission.create({
      firstName,
      lastName,
      email,
      phone,
      company,
      employeeCount,
      serviceTypes,
      message
    });

    // Log the submission for monitoring
    console.log(`📝 New contact submission from ${firstName} ${lastName} (${company})`);

    res.status(201).json({
      success: true,
      message: 'Contact submission received successfully',
      data: submission
    });

  } catch (error) {
    console.error('❌ Error creating contact submission:', error);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(val => ({
        field: val.path,
        message: val.message
      }));

      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    // Handle duplicate email errors
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'A submission with this email already exists'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// @desc    Get all contact submissions
// @route   GET /api/contact
// @access  Private (Admin)
const getSubmissions = async (req, res) => {
  try {
    const {
      status,
      page = 1,
      limit = 10,
      sortBy = 'createdAt',
      sortOrder = 'desc',
      search
    } = req.query;

    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      sort: { [sortBy]: sortOrder === 'desc' ? -1 : 1 }
    };

    let query = {};

    // Filter by status
    if (status && status !== 'all') {
      query.status = status;
    }

    // Search functionality
    if (search) {
      query.$or = [
        { firstName: { $regex: search, $options: 'i' } },
        { lastName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } }
      ];
    }

    const submissions = await ContactSubmission.find(query)
      .sort(options.sort)
      .limit(options.limit * 1)
      .skip((options.page - 1) * options.limit);

    const total = await ContactSubmission.countDocuments(query);

    res.status(200).json({
      success: true,
      data: submissions,
      pagination: {
        page: options.page,
        pages: Math.ceil(total / options.limit),
        total,
        limit: options.limit
      }
    });

  } catch (error) {
    console.error('❌ Error fetching contact submissions:', error);
    
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// @desc    Get single contact submission
// @route   GET /api/contact/:id
// @access  Private (Admin)
const getSubmission = async (req, res) => {
  try {
    const submission = await ContactSubmission.findById(req.params.id);

    if (!submission) {
      return res.status(404).json({
        success: false,
        message: 'Contact submission not found'
      });
    }

    res.status(200).json({
      success: true,
      data: submission
    });

  } catch (error) {
    console.error('❌ Error fetching contact submission:', error);
    
    // Handle invalid ObjectId
    if (error.kind === 'ObjectId') {
      return res.status(404).json({
        success: false,
        message: 'Contact submission not found'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// @desc    Update contact submission
// @route   PUT /api/contact/:id
// @access  Private (Admin)
const updateSubmission = async (req, res) => {
  try {
    const { status, notes } = req.body;

    const submission = await ContactSubmission.findById(req.params.id);

    if (!submission) {
      return res.status(404).json({
        success: false,
        message: 'Contact submission not found'
      });
    }

    // Update allowed fields
    if (status) submission.status = status;
    if (notes !== undefined) submission.notes = notes;

    await submission.save();

    console.log(`📝 Updated submission ${submission._id} - Status: ${submission.status}`);

    res.status(200).json({
      success: true,
      message: 'Contact submission updated successfully',
      data: submission
    });

  } catch (error) {
    console.error('❌ Error updating contact submission:', error);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(val => ({
        field: val.path,
        message: val.message
      }));

      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    // Handle invalid ObjectId
    if (error.kind === 'ObjectId') {
      return res.status(404).json({
        success: false,
        message: 'Contact submission not found'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// @desc    Delete contact submission
// @route   DELETE /api/contact/:id
// @access  Private (Admin)
const deleteSubmission = async (req, res) => {
  try {
    const submission = await ContactSubmission.findById(req.params.id);

    if (!submission) {
      return res.status(404).json({
        success: false,
        message: 'Contact submission not found'
      });
    }

    await ContactSubmission.findByIdAndDelete(req.params.id);

    console.log(`🗑️ Deleted submission ${submission._id} from ${submission.fullName}`);

    res.status(200).json({
      success: true,
      message: 'Contact submission deleted successfully'
    });

  } catch (error) {
    console.error('❌ Error deleting contact submission:', error);
    
    // Handle invalid ObjectId
    if (error.kind === 'ObjectId') {
      return res.status(404).json({
        success: false,
        message: 'Contact submission not found'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// @desc    Get submission statistics
// @route   GET /api/contact/stats
// @access  Private (Admin)
const getStats = async (req, res) => {
  try {
    const totalSubmissions = await ContactSubmission.countDocuments();
    
    const statusStats = await ContactSubmission.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    const serviceTypeStats = await ContactSubmission.aggregate([
      { $unwind: '$serviceTypes' },
      {
        $group: {
          _id: '$serviceTypes',
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } }
    ]);

    const employeeCountStats = await ContactSubmission.aggregate([
      {
        $group: {
          _id: '$employeeCount',
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } }
    ]);

    // Recent submissions (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    const recentSubmissions = await ContactSubmission.countDocuments({
      createdAt: { $gte: thirtyDaysAgo }
    });

    res.status(200).json({
      success: true,
      data: {
        total: totalSubmissions,
        recent: recentSubmissions,
        byStatus: statusStats,
        byServiceType: serviceTypeStats,
        byEmployeeCount: employeeCountStats
      }
    });

  } catch (error) {
    console.error('❌ Error fetching submission statistics:', error);
    
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

module.exports = {
  createSubmission,
  getSubmissions,
  getSubmission,
  updateSubmission,
  deleteSubmission,
  getStats
};