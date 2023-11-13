// Utility functions for handling media files in the public directory.
// These functions assist in generating the correct URLs for accessing images or other media assets.

// Base directory for media files
export const BASE_DIR_MEDIA = "images";

// Function to get the base URL for media files
export const getBaseUrlMedia = () => {
    return process.env.PUBLIC_URL + '/' + BASE_DIR_MEDIA;
}

// Function to get the complete file URL for a given media file name
export const getFileUrlMedia = fileName => {
    return getBaseUrlMedia() + '/' + fileName;
}
