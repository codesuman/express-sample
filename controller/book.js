const Book = require('../models/book');

exports.getBook = (req, res, next) => {
    try {
        var book = new Book();
        book.id = req.params.id;
        book.isbn = '978-0753555637';
        book.name = 'Elon Musk: How the Billionaire CEO of Spacex and Tesla is Shaping Our Future';

        return res.status(200).json({
            success: true,
            data: book
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
}