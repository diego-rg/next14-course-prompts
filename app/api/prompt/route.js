// populate: sustituir referencias a un model ou id, polos datos reales que conten (requests de posts: populate
// referencia a user para ver tamen os datos do user que o creou)
import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB();
        const prompts = await Prompt.find({}).populate('creator');
        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 });
    }
}; 