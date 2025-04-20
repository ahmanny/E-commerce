import { reviewsInterface } from "../types/review.types";


export const HIGHLIGHT_OPTIONS = ["Handcrafted", "Premium Quality", "Stylish and Comfortable", "Made By Skilled Artisans",
    "Premium Quality", "Versatile Wardrobe Staple", "Available in Various Sizes", "Tailored Fit"]
export const colors = ["red", "blue", "green", "yellow", "purple", "pink", "black", "brown", "gray"];
export const genders = ["male", "female", "unisex"];
export const stockStatus = ["In Stock", "Out of Stock", "Low Stock", "Pre-order", "Discontinued"];
export const materials = ["leather", "Suede", "canvas", "Rubber"];
export const sizes = ["38", "39", "40", "41", "42", "43", "44", "45", "46"];
export const slugify = (title: string) => {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

export const generateSKU = (title: string) => {
    const random = Math.floor(1000 + Math.random() * 9000); // 4-digit random number
    const base = title.replace(/\s+/g, '-').toUpperCase().slice(0, 5); // 5-letter base
    return `${base}-${random}`
}

export const getAverageRating = (reviewData: reviewsInterface[]) => {
    let totalRatings = 0
    let ratingSum = 0

    reviewData.forEach((entry) => {
        const UserReviews = entry.reviews || []
        totalRatings += UserReviews.length;
        UserReviews.forEach((review) => {
            ratingSum += review.rating
        })
    });
    const averageRating = totalRatings > 0 ? ratingSum / totalRatings : 0;
    return { averageRating, totalReviews: totalRatings }
}