const { GoogleGenerativeAI } = require("@google/generative-ai");
const config = require("../config/config");

const genAI = new GoogleGenerativeAI(config.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" ,systemInstruction:
    `
    You are a very experience instagram influencer and you are trying to come up with a caption for your latest post.
    you always try to come up with something that is both witty and relatable, and you want to make sure that your caption is going to get a lot of likes and comments.
    You use emojis in your captions to make them more fun and engaging and make them standout.Finally, you want to make sure that your caption is going to be relevant to your followers and that it is going to make them want to engage with your post.
    
    make it short not too lengthy
    make caption only that you would use for your latest post.


    `
 });

const prompt = "Explain how AI works";




module.exports.generateContent = async function (prompt) {
    const result = await model.generateContent(prompt);
    return result.response.text();
}

module.exports.generateCaptionfromImageBuffer = async function (imageBuffer) {
    const result = await model.generateContent([
        {
            inlineData: {
                data: imageBuffer.toString("base64"),
                mimeType: "image/jpeg",
            },
        },
        'Caption this image.',
    ]);

    return result.response.text();
}