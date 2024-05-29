import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

const PaymentForm = () => {
    const [transactionUuid] = useState('unique-transaction-id'); // Removed setTransactionUuid to avoid unused var warning
    const [error, setError] = useState('');

    const generateSignature = (totalAmount, transactionUuid, productCode) => {
        const secretKey = '8gBm/:&EnhH.1/q('; // Use the provided secret key for UAT
        const message = `total_amount=${totalAmount},transaction_uuid=${transactionUuid},product_code=${productCode}`;
        const hash = CryptoJS.HmacSHA256(message, secretKey);
        return CryptoJS.enc.Base64.stringify(hash);
    }

    const handleSubmit = (event) => {
        try {
            const totalAmount = 110; // Replace with actual total amount
            const productCode = 'EPAYTEST';
            const signature = generateSignature(totalAmount, transactionUuid, productCode);
            document.getElementById('signature').value = signature;
        } catch (error) {
            console.error('Error in handleSubmit:', error);
            setError('An error occurred while generating the signature.');
            event.preventDefault();
        }
    }

    return (
        <div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" method="POST" onSubmit={handleSubmit}>
                <input type="text" id="amount" name="amount" value="100" required readOnly />
                <input type="text" id="tax_amount" name="tax_amount" value="10" required readOnly />
                <input type="text" id="total_amount" name="total_amount" value="110" required readOnly />
                <input type="text" id="transaction_uuid" name="transaction_uuid" value={transactionUuid} required readOnly />
                <input type="text" id="product_code" name="product_code" value="EPAYTEST" required readOnly />
                <input type="text" id="product_service_charge" name="product_service_charge" value="0" required readOnly />
                <input type="text" id="product_delivery_charge" name="product_delivery_charge" value="0" required readOnly />
                <input type="text" id="success_url" name="success_url" value="http://localhost:3000/success" required readOnly />
                <input type="text" id="failure_url" name="failure_url" value="http://localhost:3000/failure" required readOnly />
                <input type="text" id="signed_field_names" name="signed_field_names" value="total_amount,transaction_uuid,product_code" required readOnly />
                <input type="hidden" id="signature" name="signature" value="" required />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default PaymentForm;
