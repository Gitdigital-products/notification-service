const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /notifications/send:
 *   post:
 *     summary: Send a notification
 *     description: Sends a notification to a user via email, SMS, or push
 *     tags: [Notifications]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               channel:
 *                 type: string
 *                 example: email
 *               recipient:
 *                 type: string
 *                 example: user@example.com
 *               message:
 *                 type: string
 *                 example: "Your order has shipped!"
 *     responses:
 *       200:
 *         description: Notification queued successfully
 */
router.post("/send", (req, res) => {
  const { channel, recipient, message } = req.body;
  // In real service: push to queue for async handling
  res.json({ status: "queued", channel, recipient, message });
});

module.exports = router;