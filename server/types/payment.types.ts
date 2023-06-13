export type MpesaAccessToken = {
   "access_token": string,
   "expires_in": number
};

export type MpesaResponse = {
   "Body": {
      "stkCallback": {
         "MerchantRequestID": string,
         "CheckoutRequestID": string,
         "ResultCode": number,
         "ResultDesc": string,
         "CallbackMetadata": {
            "Item": 
            [
               {
                  "Name": "Amount",
                  "Value": number
               },
               {
                  "Name": "MpesaReceiptNumber",
                  "Value": string
               },
               {
                  "Name": "TransactionDate",
                  "Value": number
               },
               {
                  "Name": "PhoneNumber",
                  "Value": string
               }
            ]
         } | undefined
      }
   }
};