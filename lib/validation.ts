import {z} from 'zod';
const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "webp", "svg"];
export const formSchema = z.object({
    title: z.string().min(3).max(100),
    description: z.string().min(20).max(500),
    category: z.string().min(3).max(20),
    link: z.string().url().refine((url) => {
            return imageExtensions.some(ext => url.toLowerCase().endsWith(`.${ext}`));
        }),
    pitch: z.string().min(10),
}, {
    message: "Invalid image URL. Only image links are allowed."
});