import constants from './constants';

var snoowrap = require('snoowrap')

export async function scrapeSubreddit() {
    const r = new snoowrap({
        userAgent: 'Captain America',
        clientId: constants.clientId,
        clientSecret: constants.clientSecret,
        refreshToken: constants.refreshToken,
        accessToken: constants.accessToken
    });

    const subreddit = await r.getSubreddit('Marvel');
    const topPosts = await subreddit.getTop({time: 'week', limit: 3});

    let data = [];

    topPosts.forEach((post) => {
        data.push({
            link: post.url,
            text: post.title,
            score: post.score
        })
    })

    return data;
}