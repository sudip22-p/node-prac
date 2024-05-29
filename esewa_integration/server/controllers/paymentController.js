// const axios = require('axios');
exports.paymentSuccess = (req, res) => {

    try {
        const { status, signature, transaction_code, total_amount, transaction_uuid, product_code, signed_field_names } = req.body;
        
        // Decode and verify the signature
        const secretKey = process.env.SECRET_KEY; // Use the secret key from the environment variables
        const message = `transaction_code=${transaction_code},status=${status},total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code},signed_field_names=${signed_field_names}`;
        const expectedSignature = crypto.createHmac('sha256', secretKey).update(message).digest('base64');

        if (signature === expectedSignature) {
            // Handle successful payment
            res.send('Payment Successful!');
        } else {
            // Handle signature mismatch
            res.status(400).send('Signature Mismatch!');
        }
    } catch (error) {
        console.error('Error in paymentSuccess:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.paymentFailure = (req, res) => {
    try {
        // Handle failed payment
        res.send('Payment Failed!');
    } catch (error) {
        console.error('Error in paymentFailure:', error);
        res.status(500).send('Internal Server Error');
    }
};
// exports.checkPaymentStatus = async (req, res) => {
//     const { product_code, total_amount, transaction_uuid } = req.query;

//     try {
//         const response = await axios.get(`https://epay.esewa.com.np/api/epay/transaction/status/`, {
//             params: {
//                 product_code,
//                 total_amount,
//                 transaction_uuid
//             }
//         });
//         res.json(response.data);
//     } catch (error) {
//         console.error('Error in checkPaymentStatus:', error);
//         res.status(500).send('Internal Server Error');
//     }
// };
