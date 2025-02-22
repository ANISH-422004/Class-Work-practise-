import { v2 as cloudinary } from 'cloudinary';
const config = require('../config/config');
const { Readable } = require('stream');


// Configuration
cloudinary.config({
    cloud_name: config.CLOUDINARY_NAME,
    api_key: config.CLOUDINARY_API_KEY,
    api_secret: config.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});



export const uploadFile = (fileBuffer) => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream({ folder: 'instagram' },
            (err, filedata) => {
                Readable.from(fileBuffer).pipe(uploadStream);
                resolve({
                    url: filedata.url,
                    public_id: filedata.public_id,
                    asset_id: filedata.asset_id,
                    format: filedata.format,
                });
            }
        )


    });
}



