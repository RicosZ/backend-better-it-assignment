const Word = require('../models/words.model');

class WordController {
    static async addWord(req, res, next) {
        const { value, categoryId } = req.body;
        try {
            const word = await Word.create({
                value, categoryId
            });
            return res.status(200).json({
                success: true,
                data: word,
            });

        } catch (error) {
            console.log(error);
        }
    }

    static async getWordByCategoryId(req, res, next) {
        try {
            const { categoryId } = req.body;
            const words = await Word.find({categoryId: categoryId}).sort({createdAt: 1});
            return res.status(200).json({
                success: true,
                data: words,
            });

        } catch (error) {
            console.log(error);
        }
    }

    static async deleteWord(req, res, next) {
        const { wordId } = req.body;
        try {
            await Word.findByIdAndDelete(wordId);
            return res.status(200).json({
                success: true,
            });

        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = WordController;