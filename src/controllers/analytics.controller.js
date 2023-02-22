const Analytic = require('../models/analytics.model');

class AnalyticsController {
    static async addInformation(req, res, next) {
        const { intent, subIntent, point } = req.body;
        try {
            const infomation = await Analytic.create({
                intent, subIntent, point
            });
            return res.status(200).json({
                success: true,
                data: infomation,
            });

        } catch (error) {
            console.log(error);
        }
    }

    static async getInformation(req, res, next) {
        const { subIntent } = req.query;
        try {
            const infomation = await Analytic.find({subIntent:subIntent});
            return res.status(200).json({
                success: true,
                data: infomation,
            });

        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = AnalyticsController;