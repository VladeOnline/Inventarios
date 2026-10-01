const { Router } = require('express');

const router = Router();

/**
 * @openapi
 * /api/health:
 *   get:
 *     summary: Verifica el estado tecnico del backend.
 *     tags:
 *       - Tecnico
 *     responses:
 *       200:
 *         description: El servidor responde correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 */
router.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = router;
