const express = require('express');
const {
  createSubmission,
  getSubmissions,
  getSubmission,
  updateSubmission,
  deleteSubmission,
  getStats
} = require('../controllers/contactController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Contact Submissions
 *   description: API for managing contact submissions
 */

// Public routes
/**
 * @swagger
 * /api/contact:
 *   post:
 *     summary: Create a new contact submission
 *     tags: [Contact Submissions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - phone
 *               - company
 *               - employeeCount
 *               - serviceTypes
 *             properties:
 *               firstName:
 *                 type: string
 *                 maxLength: 50
 *                 example: "John"
 *               lastName:
 *                 type: string
 *                 maxLength: 50
 *                 example: "Doe"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "john.doe@company.com"
 *               phone:
 *                 type: string
 *                 example: "+1-555-123-4567"
 *               company:
 *                 type: string
 *                 maxLength: 100
 *                 example: "Acme Corporation"
 *               employeeCount:
 *                 type: string
 *                 enum: ['1-10', '11-50', '51-200', '201-500', '500+']
 *                 example: "51-200"
 *               serviceTypes:
 *                 type: array
 *                 items:
 *                   type: string
 *                   enum: ['Employee Shuttles', 'Corporate Cars', 'Airport Transfers', 'Event Transportation']
 *                 example: ["Employee Shuttles", "Airport Transfers"]
 *               message:
 *                 type: string
 *                 maxLength: 1000
 *                 example: "We need reliable transportation for our employees."
 *     responses:
 *       201:
 *         description: Contact submission created successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/ApiResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       $ref: '#/components/schemas/ContactSubmission'
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Internal server error
 */
router.post('/', createSubmission);

// Admin routes (in a real app, these would be protected with authentication middleware)
/**
 * @swagger
 * /api/contact/stats:
 *   get:
 *     summary: Get submission statistics
 *     tags: [Contact Submissions]
 *     responses:
 *       200:
 *         description: Statistics retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/ApiResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       $ref: '#/components/schemas/Stats'
 */
router.get('/stats', getStats);

/**
 * @swagger
 * /api/contact:
 *   get:
 *     summary: Get all contact submissions with pagination and filtering
 *     tags: [Contact Submissions]
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [new, contacted, quoted, closed, all]
 *         description: Filter by status
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of items per page
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           default: createdAt
 *         description: Sort field
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *           default: desc
 *         description: Sort order
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search term
 *     responses:
 *       200:
 *         description: Submissions retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ContactSubmission'
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     page:
 *                       type: integer
 *                     pages:
 *                       type: integer
 *                     total:
 *                       type: integer
 *                     limit:
 *                       type: integer
 */
router.get('/', getSubmissions);

/**
 * @swagger
 * /api/contact/{id}:
 *   get:
 *     summary: Get a single contact submission by ID
 *     tags: [Contact Submissions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Submission ID
 *     responses:
 *       200:
 *         description: Submission retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/ApiResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       $ref: '#/components/schemas/ContactSubmission'
 *       404:
 *         description: Submission not found
 */
router.get('/:id', getSubmission);

/**
 * @swagger
 * /api/contact/{id}:
 *   put:
 *     summary: Update a contact submission
 *     tags: [Contact Submissions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Submission ID
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [new, contacted, quoted, closed]
 *               notes:
 *                 type: string
 *                 maxLength: 500
 *     responses:
 *       200:
 *         description: Submission updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/ApiResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       $ref: '#/components/schemas/ContactSubmission'
 *       404:
 *         description: Submission not found
 */
router.put('/:id', updateSubmission);

/**
 * @swagger
 * /api/contact/{id}:
 *   delete:
 *     summary: Delete a contact submission
 *     tags: [Contact Submissions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Submission ID
 *     responses:
 *       200:
 *         description: Submission deleted successfully
 *       404:
 *         description: Submission not found
 */
router.delete('/:id', deleteSubmission);

module.exports = router;