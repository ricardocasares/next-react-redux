const MIN_VOTES = 10;
const MIN_ACTIVE = 10;

export const approved = feature => feature.votes > MIN_VOTES;
export const popular = feature => feature.active > MIN_ACTIVE;
export const hasVideo = feature => feature.videos.length > 0;
export const hasImages = feature => feature.images.length > 0;
